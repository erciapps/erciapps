export default function SobreMi() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre mí</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Soy profesor de DAM2 y aquí comparto proyectos de clase centrados en buenas prácticas, diseño moderno y aprendizaje práctico.
        </p>
        <div className="mt-8 grid gap-4">
          <p>
            Me apasiona construir aplicaciones limpias, accesibles y bien estructuradas. Este sitio funciona como portafolio académico y base para futuras mejoras.
          </p>
          <p>
            ¿Tienes preguntas o propuestas? Puedes contactarme por email desde el botón del encabezado.
          </p>
        </div>
      </div>
    </section>
  );
}
