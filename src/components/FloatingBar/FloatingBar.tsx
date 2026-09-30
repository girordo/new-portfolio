interface FloatingBarProps {
  onOpenCommand: () => void
}

export const FloatingBar = ({ onOpenCommand }: FloatingBarProps) => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-30 bottom-5 sm:bottom-6 w-[min(90vw,480px)] px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 -inset-y-2 rounded-full bg-emerald-500/10 blur-2xl"
      />
      <div className="relative p-[1px] rounded-full bg-gradient-to-b from-white/20 via-white/5 to-emerald-500/30 shadow-[0_12px_44px_-14px_rgba(0,0,0,0.7)]">
        <div className="relative overflow-hidden bg-slate-900/90 backdrop-blur-xl rounded-full">
          <button
            type="button"
            onClick={onOpenCommand}
            className="w-full flex items-center justify-between px-4 py-2 text-left group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center text-[10px] font-mono-jb font-bold text-white shadow-sm ring-1 ring-white/20 transition-transform group-hover:scale-105">
                TG
              </div>
              <span className="font-reading text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                jump to page or search...
              </span>
            </div>
            <kbd className="inline-flex items-center rounded border border-white/[0.12] bg-white/[0.04] px-1.5 py-0.5 font-mono-jb text-[10px] tracking-wider text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </div>
  )
}
export default FloatingBar
