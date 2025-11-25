import fs from 'fs/promises';
import path from 'path';
import { SavedAudit, User, ComparisonGroup } from './schema';

const DATA_DIR = path.join(process.cwd(), 'data', 'audits');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Audit operations
export async function saveAudit(audit: SavedAudit): Promise<void> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, `${audit.id}.json`);
  await fs.writeFile(filePath, JSON.stringify(audit, null, 2));
}

export async function getAudit(id: string): Promise<SavedAudit | null> {
  try {
    const filePath = path.join(DATA_DIR, `${id}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export async function getAuditsByUrl(url: string, limit = 10): Promise<SavedAudit[]> {
  await ensureDataDir();
  const files = await fs.readdir(DATA_DIR);
  const audits: SavedAudit[] = [];

  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const data = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
    const audit = JSON.parse(data);
    if (audit.url === url) {
      audits.push(audit);
    }
  }

  return audits
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
}

export async function getAuditsByUser(userId: string, limit = 20): Promise<SavedAudit[]> {
  await ensureDataDir();
  const files = await fs.readdir(DATA_DIR);
  const audits: SavedAudit[] = [];

  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const data = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
    const audit = JSON.parse(data);
    if (audit.userId === userId) {
      audits.push(audit);
    }
  }

  return audits
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
}

export async function getAllAudits(limit = 50): Promise<SavedAudit[]> {
  await ensureDataDir();
  const files = await fs.readdir(DATA_DIR);
  const audits: SavedAudit[] = [];

  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const data = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
    audits.push(JSON.parse(data));
  }

  return audits
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
}

// User operations (simple file-based for demo)
const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');

async function getUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveUsers(users: User[]): Promise<void> {
  await fs.mkdir(path.dirname(USERS_FILE), { recursive: true });
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const users = await getUsers();
  return users.find(u => u.email === email) || null;
}

export async function createUser(user: User): Promise<void> {
  const users = await getUsers();
  users.push(user);
  await saveUsers(users);
}

export async function updateUser(email: string, updates: Partial<User>): Promise<void> {
  const users = await getUsers();
  const index = users.findIndex(u => u.email === email);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    await saveUsers(users);
  }
}

// Comparison groups
const COMPARISONS_FILE = path.join(process.cwd(), 'data', 'comparisons.json');

async function getComparisons(): Promise<ComparisonGroup[]> {
  try {
    const data = await fs.readFile(COMPARISONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveComparisons(comparisons: ComparisonGroup[]): Promise<void> {
  await fs.mkdir(path.dirname(COMPARISONS_FILE), { recursive: true });
  await fs.writeFile(COMPARISONS_FILE, JSON.stringify(comparisons, null, 2));
}

export async function createComparisonGroup(group: ComparisonGroup): Promise<void> {
  const comparisons = await getComparisons();
  comparisons.push(group);
  await saveComparisons(comparisons);
}

export async function getComparisonsByUser(userId: string): Promise<ComparisonGroup[]> {
  const comparisons = await getComparisons();
  return comparisons.filter(c => c.userId === userId);
}
