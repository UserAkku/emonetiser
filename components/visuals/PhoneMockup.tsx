import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  imageSrc?: string;
  videoSrc?: string;
}

export function PhoneMockup({ children, className, imageSrc, videoSrc }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-[8px] border-slate-900 bg-black shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden", className)}>
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-7 bg-slate-900 rounded-full z-20 shadow-inner flex items-center justify-end px-2">
         <div className="w-2.5 h-2.5 rounded-full bg-slate-800/80 border border-white/5" />
      </div>
      
      <div className="relative w-full h-full bg-white dark:bg-slate-950 overflow-hidden rounded-[2.2rem]">
        {videoSrc ? (
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={videoSrc} />
        ) : imageSrc ? (
          <img src={imageSrc} alt="App Preview" className="w-full h-full object-cover" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
