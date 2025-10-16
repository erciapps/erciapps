import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  link?: string;
  repo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40 w-full bg-gradient-to-br from-primary/20 via-purple-500/10 to-blue-600/10">
        <div className="absolute inset-0 grid grid-cols-6 opacity-10">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-border/40" />
          ))}
        </div>
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
        <div className="absolute top-3 right-3 text-xs text-muted-foreground bg-background/70 backdrop-blur px-2 py-1 rounded-md border">{project.year}</div>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex items-center gap-2">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <Button size="sm">Demo</Button>
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline">Código</Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
