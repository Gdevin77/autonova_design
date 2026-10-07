import { HiBars3, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

const navClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${isActive ? "text-brand" : "text-slate-300 hover:text-white"}`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <Container className="flex h-24 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Circuit Savant home">
          <img src={`${import.meta.env.BASE_URL}logo-mark.png`} alt="" className="h-14 w-auto sm:h-16" />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold uppercase tracking-wide text-white sm:text-2xl">
              Circuit <span className="text-brand">Savant</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:block">Automotive Diagnostics &amp; Repair</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <Button as="link" to="/book" className="px-4 py-2">
            Book a Service
          </Button>
        </nav>

        <button className="rounded p-2 text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass} end={link.to === "/"} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Button as="link" to="/book" onClick={() => setOpen(false)}>
              Book a Service
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Header;