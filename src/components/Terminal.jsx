export function Kicker({ children }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      <span className="text-slate-600">$</span>
      {children}
    </p>
  );
}

export function WindowDots() {
  return (
    <span className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
      <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
      <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
    </span>
  );
}

export function WindowFrame({ label, children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-md border border-line bg-panel/80 ${className}`}>
      <div className="flex items-center justify-between border-b border-line bg-black/30 px-4 py-2.5">
        <WindowDots />
        {label ? <span className="font-mono text-xs text-slate-500">{label}</span> : null}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
