import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Split into blocks by double newlines
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }

    // Heading 2 (## Title)
    if (line.startsWith("## ")) {
      const headingText = line.replace("## ", "").trim();
      const headingId = headingText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      blocks.push(
        <h2
          key={`h2-${i}`}
          id={headingId}
          className="scroll-mt-24 font-heading font-semibold text-[26px] sm:text-[28px] leading-[1.25] tracking-[-0.015em] text-[#000000] mt-10 mb-4"
        >
          {headingText}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote (> Text)
    if (line.startsWith("> ")) {
      const quoteText = line.replace(/^>\s*/, "");
      // Parse simple markdown bold in quote
      const parts = quoteText.split(/(\*\*.*?\*\*)/g);
      blocks.push(
        <div
          key={`quote-${i}`}
          className="my-6 rounded-2xl bg-[#F3F8FE] border border-[#D6E8F8] p-5 md:p-6 text-[16.5px] leading-[1.6] text-[#022771]"
        >
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </div>
      );
      i++;
      continue;
    }

    // Markdown Table (| header | header |)
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerCells = tableLines[0]
          .split("|")
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
          .map((c) => c.trim());

        const bodyRows = tableLines.slice(2).map((r) =>
          r
            .split("|")
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
            .map((c) => c.trim())
        );

        blocks.push(
          <div
            key={`table-${i}`}
            className="my-6 border border-[#E2E8F0] rounded-2xl overflow-x-auto shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
          >
            <table className="w-full min-w-[480px] border-collapse text-[15px] leading-[1.5]">
              <thead>
                <tr className="bg-[#FAFAFC] border-b border-[#EEF0F3]">
                  {headerCells.map((h, hIdx) => (
                    <th
                      key={hIdx}
                      scope="col"
                      className="text-left py-3.5 px-4 sm:px-5 text-[13px] font-semibold text-[#6B7685]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0F3]">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#FAFBFD] transition-colors">
                    <td className="py-3.5 px-4 sm:px-5 text-[#000000] font-medium">{row[0]}</td>
                    <td className="py-3.5 px-4 sm:px-5 text-[#1C2433]">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Numbered list (1. Item)
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s*/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol-${i}`} className="my-4 pl-5 list-decimal space-y-2 text-[16px] text-[#1C2433]">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Normal paragraph
    const pText = line;
    // Simple inline parser for bold
    const parts = pText.split(/(\*\*.*?\*\*)/g);
    blocks.push(
      <p key={`p-${i}`} className="m-0 text-[17px] md:text-[18px] leading-[1.75] text-[#1C2433]">
        {parts.map((part, pIdx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={pIdx} className="font-semibold text-[#000000]">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        })}
      </p>
    );
    i++;
  }

  return <div className="space-y-5 text-left">{blocks}</div>;
}
