import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Briefcase, Code, GitBranch, Users } from 'lucide-react';

type Experience = {
  title: string;
  period: string;
  details: string[];
  icon: React.ReactNode;
};

const experiences: Experience[] = [
  {
    title: 'Software Engineering Intern, SK Godelius (NOC Chile)',
    period: 'Aug 2024 – Jul 2025',
    details: [
      'Developed full‑stack control interfaces with real‑time robot monitoring',
      'Integrated ROS2 Nav2 for autonomous robotic navigation in mining',
      'Implemented MLOps pipelines for CV/audio models in mining automation',
      'Built and optimized YOLO models for conveyor belt fault detection',
    ],
    icon: <Briefcase className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Software Engineering Intern, NUS Enterprise',
    period: 'May 2024 – Aug 2024',
    details: [
      'Built full‑stack web apps from scratch using React, Django and PostgreSQL',
      'Architected scalable APIs and infrastructure to support new internal tools',
    ],
    icon: <Code className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Research Assistant, NUS',
    period: 'Mar 2024 – Dec 2024',
    details: [
      'Applied NLP techniques to analyze team meeting transcripts',
      'Built ML pipelines to extract key insights on team collaboration patterns',
    ],
    icon: <Users className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Software Engineering Intern, HedgeSPA',
    period: 'May 2023 – Sep 2023',
    details: [
      'Processed financial data using SQL, Pandas and ML pipelines',
      'Developed a Rasa chatbot for interactive ESG report access',
    ],
    icon: <Briefcase className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Test Automation Intern, Razer',
    period: 'Mar 2022 – Jul 2022',
    details: [
      'Wrote automated test scripts for Razer Synapse using Robot Framework',
      'Worked across device lines including Blackwidow, Basilisk, Blade and more',
    ],
    icon: <Code className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Dive Leader, Naval Diving Unit (SAF)',
    period: 'Nov 2020 – Dec 2021',
    details: [
      'Led dive team operations and managed training for 30 naval divers',
      'Chief NSF for security sweeps during NDP 2021 & US VP official visit',
    ],
    icon: <GitBranch className="w-5 h-5 text-accent" />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 scroll-mt-20 px-4 sm:px-8 max-w-3xl mx-auto"
    >
      <Accordion type="multiple" className="space-y-4">
        {experiences.map((exp, idx) => (
          <AccordionItem
            value={`item-${idx}`}
            key={exp.title}
            className="border rounded-lg bg-secondary/10"
          >
            <AccordionTrigger className="p-4 text-left flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {exp.icon}
                <div>
                  <div className="text-base font-semibold">{exp.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {exp.period}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-0">
              <ul className="list-disc list-inside space-y-2 text-base">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
