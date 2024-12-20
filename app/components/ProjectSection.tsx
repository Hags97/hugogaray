import ProjectCard from "./ProjectCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { projects } from "@/lib/projects";


export default function ProjectSection() {
  return(
    <section className="min-h-screen bg-[#222A36] py-16" id="Proyectos">
    <MaxWidthWrapper>
      <h2 className="text-2xl text-[#f5f5f5] sm:text-3xl font-merriweather text-center mb-8 sm:mb-12 ">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </MaxWidthWrapper>
  </section>
  );
}