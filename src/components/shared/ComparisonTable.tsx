import React from "react";

export interface ComparisonRow {
  included: React.ReactNode;
  excluded: React.ReactNode;
}

export interface ComparisonTableProps {
  includedHeader?: React.ReactNode;
  excludedHeader?: React.ReactNode;
  rows: ComparisonRow[];
  className?: string;
}

export default function ComparisonTable({
  includedHeader = (
    <>
      What custom development{" "}
      <span className="underline decoration-[var(--sf-primary)] decoration-2">
        includes
      </span>{" "}
      (building from scratch)
    </>
  ),
  excludedHeader = (
    <>
      What custom development{" "}
      <span className="underline decoration-rose-500 decoration-2">
        does not
      </span>{" "}
      include (modifying)
    </>
  ),
  rows,
  className = "",
}: ComparisonTableProps) {
  return (
    <div
      className={`my-8 overflow-x-auto border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] bg-white ${className}`}
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
            <th
              className="p-4 sm:p-5 text-base sm:text-lg font-bold text-[var(--sf-ink)] border-r-2 border-[var(--sf-ink)] w-1/2"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              {includedHeader}
            </th>
            <th
              className="p-4 sm:p-5 text-base sm:text-lg font-bold text-[var(--sf-ink)] w-1/2"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              {excludedHeader}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-[var(--sf-ink)]/15 text-sm sm:text-base text-[var(--sf-ink)]">
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td className="p-4 sm:p-5 border-r-2 border-[var(--sf-ink)]/15 align-top">
                {row.included}
              </td>
              <td className="p-4 sm:p-5 align-top text-[var(--sf-ink-soft)]">
                {row.excluded}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
