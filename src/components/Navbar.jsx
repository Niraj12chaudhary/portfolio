const navItems = [
  { label: "./experience", href: "#experience" },
  { label: "./case-studies", href: "#case-studies" },
  { label: "./project-ref", href: "#parking-lot" },
  { label: "./depth", href: "#depth" },
  { label: "./contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="blink-cursor font-mono text-sm text-slate-200">
          shivam@portfolio:~$
        </a>
        <nav aria-label="Primary" className="hidden gap-6 font-mono md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
