import { cn } from "@/lib/utils";

interface CodeTerminalProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export function CodeTerminal({ code, language = "json", title = "terminal", className }: CodeTerminalProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[600px] rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl overflow-hidden font-mono text-sm", className)}>
      <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-white/5 px-4">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto flex items-center justify-center text-[11px] text-white/50 tracking-wider">
          {title}
        </div>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-white/80 leading-relaxed">
          <code>
            {code.split('\n').map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell text-right pr-6 text-white/20 select-none">{i + 1}</span>
                <span className="table-cell whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
