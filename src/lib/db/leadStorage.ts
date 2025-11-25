import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const DATA_DIR = path.join(process.cwd(), 'data', 'leads');

interface LeadData {
  url: string;
  email: string;
  phone: string;
  timestamp: string;
}

interface StoredLead extends LeadData {
  id: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
  source: string;
  notes?: string;
}

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Store a new lead
export async function storeLead(leadData: LeadData): Promise<string> {
  await ensureDataDir();

  const leadId = nanoid();
  const lead: StoredLead = {
    id: leadId,
    ...leadData,
    status: 'new',
    source: 'earn_auditor',
  };

  const filePath = path.join(DATA_DIR, `${leadId}.json`);
  await fs.writeFile(filePath, JSON.stringify(lead, null, 2));

  // Also append to a CSV file for easy viewing
  await appendToCSV(lead);

  return leadId;
}

// Append lead to CSV file
async function appendToCSV(lead: StoredLead) {
  const csvPath = path.join(DATA_DIR, 'leads.csv');
  const csvLine = `"${lead.id}","${lead.timestamp}","${lead.email}","${lead.phone}","${lead.url}","${lead.status}","${lead.source}"\n`;

  try {
    // Check if file exists
    await fs.access(csvPath);
  } catch {
    // File doesn't exist, create with header
    const header = 'ID,Timestamp,Email,Phone,URL,Status,Source\n';
    await fs.writeFile(csvPath, header);
  }

  // Append the lead data
  await fs.appendFile(csvPath, csvLine);
}

// Get lead by ID
export async function getLead(leadId: string): Promise<StoredLead | null> {
  try {
    const filePath = path.join(DATA_DIR, `${leadId}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

// Get all leads
export async function getAllLeads(): Promise<StoredLead[]> {
  try {
    await ensureDataDir();
    const files = await fs.readdir(DATA_DIR);
    const jsonFiles = files.filter(f => f.endsWith('.json'));

    const leads = await Promise.all(
      jsonFiles.map(async (file) => {
        const data = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
        return JSON.parse(data);
      })
    );

    return leads.sort((a, b) =>
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  } catch {
    return [];
  }
}

// Update lead status
export async function updateLeadStatus(
  leadId: string,
  status: StoredLead['status'],
  notes?: string
): Promise<boolean> {
  const lead = await getLead(leadId);
  if (!lead) return false;

  lead.status = status;
  if (notes) lead.notes = notes;

  const filePath = path.join(DATA_DIR, `${leadId}.json`);
  await fs.writeFile(filePath, JSON.stringify(lead, null, 2));

  return true;
}

// Get leads by email
export async function getLeadsByEmail(email: string): Promise<StoredLead[]> {
  const allLeads = await getAllLeads();
  return allLeads.filter(lead => lead.email.toLowerCase() === email.toLowerCase());
}
