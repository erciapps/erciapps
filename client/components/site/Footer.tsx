export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Profesor DAM2 — Portafolio de proyectos de clase</p>
        <div className="flex items-center gap-4">
          <a href="mailto:profesor@example.com" className="hover:text-foreground">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
