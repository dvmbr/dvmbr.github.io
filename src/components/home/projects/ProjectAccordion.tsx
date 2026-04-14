import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

export default function ProjectAccordion({ projects }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      // defaultValue="project-1"
      className="typo-content"
    >
      {projects.map((project) => (
        <AccordionItem
          key={project.id}
          value={project.id}
          className="hover:bg-muted/30 border-b p-4 transition"
        >
          <AccordionTrigger>
            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <h3>{project.title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border-border bg-muted text-muted-foreground hover:bg-accent hover:text-foreground rounded-full border px-3 py-1 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <small className="mt-1 text-sm! font-light">
                {project.duration}
              </small>
              <p className="mt-4 max-w-2xl">{project.summary}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <article className="border-border bg-card typo-content rounded-2xl border p-6 md:p-10">
              <div className="flex flex-col gap-8">
                {/* Overview */}
                <section>
                  <h4>Overview</h4>
                  <p className="mt-4">{project.overview}</p>
                </section>

                {/* Problem / Solution / Impact */}
                <section className="grid gap-4 md:grid-cols-3">
                  {["problem", "solution", "impact"].map((section) => (
                    <div
                      key={section}
                      className="border-border bg-muted/50 rounded-xl border p-5"
                    >
                      <p className="text-xs! tracking-[0.18em] uppercase">
                        {section}
                      </p>
                      <p className="text-sm!">
                        {project[section as "problem" | "solution" | "impact"]}
                      </p>
                    </div>
                  ))}
                </section>

                {/* Contributions */}
                <section>
                  <h4>Key Contributions</h4>

                  <ul className="mt-4 ml-4 list-disc! space-y-3">
                    {project.contributions.map((contribution, index) => (
                      <li key={index} className="list-item">
                        <p>{contribution}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
