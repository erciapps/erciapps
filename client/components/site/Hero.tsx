import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-600/20 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground">Portafolio académico</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Mis proyectos de clase
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Una colección curada de trabajos, prácticas y proyectos del ciclo DAM2. Código limpio, diseño moderno y aprendizaje continuo.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#proyectos"><Button size="lg">Ver proyectos</Button></a>
            <a href="mailto:profesor@example.com" className="text-sm text-muted-foreground hover:text-foreground">Contactar</a>
          </div>
        </div>
      </div>
    </section>
  );
}
