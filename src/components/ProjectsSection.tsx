import React, { type ReactNode } from 'react';
import { Github, FileText, ExternalLink, Video } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  children: ReactNode;
  githubUrl?: string;
  readmeUrl?: string;
  websiteUrl?: string;
  demoUrl?: string;
};

function ProjectCard({
  title,
  children,
  githubUrl,
  readmeUrl,
  websiteUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white/10 rounded-lg p-6 shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-base mb-4">{children}</div>
      </div>
      <div className="flex space-x-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20"
          >
            <Github className="w-5 h-5 text-accent" />
          </a>
        )}
        {readmeUrl && (
          <a
            href={readmeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20"
          >
            <FileText className="w-5 h-5 text-accent" />
          </a>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20"
          >
            <ExternalLink className="w-5 h-5 text-accent" />
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20"
          >
            <Video className="w-5 h-5 text-accent" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative pt-20 -mt-20 max-w-5xl mx-auto mb-20"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-2 gap-8">
        <ProjectCard
          title="VolunteerConnect"
          githubUrl="https://github.com/yeozongyao/h4gteam"
          websiteUrl="https://volunteerconnectsg.netlify.app/"
          demoUrl="https://www.youtube.com/watch?v=3YMbXo2HcbA"
        >
          A volunteer matching platform built with React and Firebase.
        </ProjectCard>

        <ProjectCard
          title="NUScores"
          githubUrl="https://github.com/yeozongyao/nusscores"
          readmeUrl="https://docs.google.com/document/d/16dyMnkB1Y6o7eGtEurtcsdL81Ve6q1Yoy8PAfwyMkoY/edit?usp=sharing"
          websiteUrl="https://react-frontend-xr90.onrender.com"
          demoUrl="https://drive.google.com/file/d/1zx4xaBiRPqddYvlVENtQjBaCNKeOXOB4/view"
        >
          A student leaderboard app with real-time score updates.
        </ProjectCard>

        <ProjectCard
          title="ALEX Robot"
          githubUrl="https://github.com/yeozongyao/CG2111A-Alex.git"
          readmeUrl="https://docs.google.com/document/d/1bUl-xlblQy1ERZxmMggdV-WTWDzRqLE55aDrkzOGTzE/edit?usp=sharing"
        >
          A ROS2 quadruped robot controller for autonomous navigation.
        </ProjectCard>

        <ProjectCard
          title="E-Portfolio Generator"
          githubUrl="https://github.com/yeozongyao/Hack-Roll-23/tree/main"
        >
          A CLI tool to auto-generate personal portfolio websites.
        </ProjectCard>
      </div>
    </section>
  );
}
