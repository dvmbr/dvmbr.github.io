import * as React from "react";
import { projects } from "@/data/projects";
import ProjectAccordion from "./ProjectAccordion";
import Pagination from "@/components/ui/pagination";

const PROJECTS_PER_PAGE = 3;

export default function ProjectPagination() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  return (
    <div>
      <ProjectAccordion projects={currentProjects} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
