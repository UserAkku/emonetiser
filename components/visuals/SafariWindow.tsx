import { cn } from "@/lib/utils";

interface SafariWindowProps {
  children?: React.ReactNode;
  url?: string;
  className?: string;
  videoSrc?: string;
  imageSrc?: string;
}

export function SafariWindow({ children, url = "emonetiser.com", className, videoSrc, imageSrc }: SafariWindowProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[800px] rounded-xl border bg-background shadow-2xl overflow-hidden", className)}>
      <div className="flex h-11 items-center gap-2 border-b bg-slate-100/50 dark:bg-slate-900 px-4">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto flex h-7 w-full max-w-[300px] items-center justify-center rounded-md bg-white dark:bg-slate-800 shadow-sm border text-[11px] text-muted-foreground font-mono">
          {url}
        </div>
      </div>
      <div className="relative w-full bg-slate-50 dark:bg-black overflow-hidden">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={videoSrc}
          />
        ) : imageSrc ? (
          <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
