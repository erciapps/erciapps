import { useMemo, useState } from "react";
import Hero from "@/components/site/Hero";
import ProjectCard from "@/components/site/ProjectCard";
import { Button } from "@/components/ui/button";

const TAGS = ["Todos", "Web", "Móvil", "Datos", "IA", "Juegos"] as const;

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  link?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Agenda Escolar",
    description:
      "Aplicación web para gestionar tareas, exámenes y recordatorios con notificaciones.",
    tags: ["Web"],
    year: 2024,
    link: "https://example.com/demo",
    repo: "https://github.com/",
  },
  {
    id: "p2",
    title: "App de Aula (Android)",
    description:
      "Aplicación móvil para control de asistencia y comunicación con estudiantes.",
    tags: ["Móvil"],
    year: 2024,
    repo: "https://github.com/",
  },
  {
    id: "p3",
    title: "Dashboard Académico",
    description:
      "Visualización de métricas de rendimiento usando gráficas y filtros interactivos.",
    tags: ["Datos", "Web"],
    year: 2023,
    link: "https://example.com/demo",
  },
  {
    id: "p4",
    title: "Clasificador de Texto",
    description:
      "Proyecto de IA para clasificar feedback de alumnos con modelos ligeros.",
    tags: ["IA"],
    year: 2023,
  },
  {
    id: "p5",
    title: "Juego Didáctico",
    description:
      "Mini juego educativo desarrollado con canvas para practicar lógica.",
    tags: ["Juegos", "Web"],
    year: 2022,
  },
  {
    id: "p6",
    title: "ETL de Calificaciones",
    description:
      "Pipeline para importar/exportar notas desde CSV y normalizarlas.",
    tags: ["Datos"],
    year: 2022,
  },
];

export default function Index() {
  const [active, setActive] = useState<(typeof TAGS)[number]>("Todos");

  const list = useMemo(() => {
    if (active === "Todos") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <>
      <Hero />
      <section id="proyectos" className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Proyectos destacados</h2>
            <p className="text-muted-foreground mt-2">Filtra por categoría para explorar el trabajo.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <Button
                key={t}
                size="sm"
                variant={active === t ? "default" : "outline"}
                onClick={() => setActive(t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
