"use client";

import { useState } from "react";
import { Compare } from "@/components/ui/compare";

export type ProjectPage = {
  id: string;
  name: string;
  beforeImage: string;
  afterImage: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  pages: ProjectPage[];
};

const DEFAULT_PROJECTS: PortfolioProject[] = [
  {
    id: "project-1",
    name: "1. NOMAD COFFEE",
    pages: [
      {
        id: "p1-home",
        name: "HOME",
        beforeImage: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "p1-product",
        name: "PRODUCT",
        beforeImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "p1-cart",
        name: "CART",
        beforeImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "p1-collection",
        name: "COLLECTION",
        beforeImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "project-2",
    name: "2. VERDANT SKINCARE",
    pages: [
      {
        id: "p2-home",
        name: "HOME",
        beforeImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1571781526291-c477eb311dc6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "p2-product",
        name: "PRODUCT",
        beforeImage: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "project-3",
    name: "3. TIDALWEAR",
    pages: [
      {
        id: "p3-home",
        name: "HOME",
        beforeImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

export function PortfolioViewer() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(DEFAULT_PROJECTS[0].id);
  const [selectedPageId, setSelectedPageId] = useState<string>(DEFAULT_PROJECTS[0].pages[0].id);

  const selectedProject = DEFAULT_PROJECTS.find((p) => p.id === selectedProjectId) || DEFAULT_PROJECTS[0];
  const selectedPage = selectedProject.pages.find((p) => p.id === selectedPageId) || selectedProject.pages[0];

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const project = DEFAULT_PROJECTS.find((p) => p.id === projectId);
    if (project && project.pages.length > 0) {
      setSelectedPageId(project.pages[0].id);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-64px)] bg-[var(--sf-paper)]">
      {/* Sidebar */}
      <aside
        className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0 border-r-2 border-[var(--sf-ink)] bg-[var(--sf-paper-raised)] p-6 overflow-y-auto"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
        }}
      >
        <div className="mb-8">
          <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[var(--sf-ink)] m-0 leading-none">
            Portfolio
          </h2>
          <p className="text-[14px] text-[var(--sf-ink-mute)] font-medium mt-2">
            Generic Dawn vs. Custom Build
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {DEFAULT_PROJECTS.map((project) => (
            <div key={project.id} className="flex flex-col gap-2">
              <button
                onClick={() => handleSelectProject(project.id)}
                className={`text-left text-[16px] font-bold tracking-tight uppercase cursor-pointer transition-colors ${
                  selectedProjectId === project.id
                    ? "text-[var(--sf-primary)]"
                    : "text-[var(--sf-ink)] hover:text-[var(--sf-primary)]"
                }`}
              >
                {project.name}
              </button>

              {/* Pages List (Visible if project is selected) */}
              <div
                className={`flex flex-col gap-1.5 pl-4 border-l-2 ml-[3px] transition-all duration-300 overflow-hidden ${
                  selectedProjectId === project.id
                    ? "border-[var(--sf-primary)] opacity-100 max-h-[500px]"
                    : "border-[var(--sf-line)] opacity-0 max-h-0"
                }`}
              >
                {project.pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setSelectedPageId(page.id)}
                    className={`text-left text-[13px] font-semibold tracking-wide uppercase px-2 py-1 transition-all ${
                      selectedPageId === page.id
                        ? "text-[var(--sf-ink)] bg-[var(--sf-gold-soft)] shadow-[2px_2px_0_var(--sf-ink)]"
                        : "text-[var(--sf-ink-mute)] hover:text-[var(--sf-ink)] bg-transparent shadow-none"
                    }`}
                  >
                    {page.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[var(--sf-paper-sunken)] p-6 md:p-10 flex flex-col relative overflow-hidden">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-[14px] font-bold tracking-[0.1em] uppercase text-[var(--sf-ink-mute)]">
            <span className="text-[var(--sf-ink)]">{selectedProject.name.split(". ")[1]}</span> — {selectedPage.name}
          </div>
          <div className="text-[12px] font-semibold tracking-wide text-[var(--sf-ink-soft)] bg-[var(--sf-paper-raised)] px-3 py-1 border-2 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)]">
            DRAG TO COMPARE
          </div>
        </div>

        {/* Compare Component Container */}
        <div
          className="flex-1 relative w-full rounded-none overflow-hidden border-2 border-[var(--sf-ink)]"
          style={{
            boxShadow: "8px 8px 0 var(--sf-ink)",
            background: "var(--sf-paper-raised)",
          }}
        >
          {/* We key the compare component by the selectedPageId so it re-mounts fully when switching pages. */}
          <Compare
            key={selectedPage.id}
            firstImage={selectedPage.beforeImage}
            secondImage={selectedPage.afterImage}
            firstImageClassName="object-cover object-top"
            secondImageClassname="object-cover object-top"
            className="h-full w-full"
            slideMode="drag"
            initialSliderPercentage={50}
          />
        </div>
      </main>
    </div>
  );
}
