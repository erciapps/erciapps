import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="group inline-flex items-center gap-2">
          <div className="size-7 rounded-md bg-gradient-to-br from-primary to-purple-500 group-hover:scale-105 transition-transform" />
          <span className="font-extrabold tracking-tight">DAM2 Proyectos</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>Inicio</NavLink>
          <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>Sobre mí</NavLink>
          <a href="mailto:profesor@example.com" className="text-muted-foreground hover:text-foreground">Contacto</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="mailto:profesor@example.com">
            <Button size="sm">Escríbeme</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
