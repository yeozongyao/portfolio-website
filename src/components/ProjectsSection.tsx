import type { ReactNode } from 'react';

type ProjectCardProps = {
  title: string;
  children: ReactNode;
  href: string;
};

function ProjectCard({ title, children, href }: ProjectCardProps) {
  return (
    <div className="bg-white/10 rounded-lg p-6 shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{children}</p>
      <a href={href} className="text-accent underline">
        View Project
      </a>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-8">
        <ProjectCard title="Project One" href="#">
          A brief description of your project goes here. Highlight the tech
          stack and your role.
        </ProjectCard>
        <ProjectCard title="Project Two" href="#">
          Another project description. You can add as many projects as you like.
        </ProjectCard>
      </div>
    </section>
  );
}
