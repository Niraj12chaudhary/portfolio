const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Case Study", href: "#medshop" },
  { label: "Project Ref", href: "#parking-lot" },
  { label: "Depth", href: "#depth" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">
          Shivam Chaudhary
        </a>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
