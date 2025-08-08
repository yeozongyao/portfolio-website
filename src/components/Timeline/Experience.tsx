import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, GitBranch, Users, X } from 'lucide-react';

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
      'Developed full-stack web-apps for mining clients',
      'Developed full-stack robot control interfaces with real-time robot monitoring',
      'Integrated ROS2 Nav2 for autonomous robotic navigation in mining',
      'Implemented MLOps pipelines for CV/audio models in mining automation',
      'Finetune and optimized YOLO v8 for conveyor belt fault detection',
    ],
    icon: <Briefcase className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Software Engineering Intern, NUS Enterprise',
    period: 'May 2024 – Aug 2024',
    details: [
      'Built full-stack web apps from scratch using React, Django and PostgreSQL for multiple startups in the NUS GRIP programme',
      'Model testing and quantization of YOLO models on edge devices to optimize performance for resource-constrained environments',
      'Projects: AMGS, EZ-VENT, TinyIssimoYOLO',
    ],
    icon: <Code className="w-5 h-5 text-accent" />,
  },
  {
    title: 'NLP Research Assistant, NUS',
    period: 'Mar 2024 – Dec 2024',
    details: [
      'Applied NLP techniques to analyze team meeting transcripts',
      'Developed machine learning pipelines using Python, NLTK, and scikit-learn to quantify individual contributions and team dynamics',
      'Performed data wrangling and feature engineering to extract structured insights from unstructured transcript data',
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
      'Automated software testing for Razer Synapse using Robot Framework with Selenium for GUI interaction',
      'Designed, wrote and maintained modular test suites covering configuration workflows, device settings, and hardware functionality',
      'Debugged Selenium WebDriver issues and optimized test execution for improved reliability and maintainability',
      'Conducted cross-device testing across flagship lines including BlackWidow, Basilisk, and Blade to ensure consistent software behavior',
    ],
    icon: <Code className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Dive Leader, Naval Diving Unit (SAF)',
    period: 'Nov 2020 – Dec 2021',
    details: [
      'Led dive team operations and managed training for 30 naval divers',
      'Chief NSF for security sweeps during NDP 2021 & US VP Kamala Harris official visit',
    ],
    icon: <GitBranch className="w-5 h-5 text-accent" />,
  },
];

export default function Experience() {
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);
  const toggleSelection = (i: number) => {
    setSelectedIdx((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="experience"
      className="py-5 scroll-mt-20 px-4 sm:px-8 mx-auto max-w-5xl"
    >
      <div
        className={`flex gap-8 ${
          selectedIdx === null ? 'justify-center' : 'justify-start'
        }`}
      >
        {/* LEFT COLUMN (motion) */}
        <motion.div
          layout
          initial={false}
          animate={{ x: selectedIdx === null ? '33.333%' : '0%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex flex-col w-1/3 space-y-4"
        >
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => toggleSelection(i)}
              className={`flex items-center p-4 border rounded-lg text-left 
                ${
                  selectedIdx === i
                    ? 'bg-secondary/20'
                    : 'bg-secondary/10 hover:bg-secondary/20'
                }
                `}
            >
              <div className="flex items-center space-x-2">
                {exp.icon}
                <div>
                  <div className="font-semibold">{exp.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {exp.period}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* RIGHT DETAIL PANE */}
        <div className="relative w-2/3">
          <AnimatePresence>
            {selectedIdx !== null && (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.25 }}
                className="p-6 border rounded-lg bg-secondary/10"
              >
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="absolute top-4 right-4 bg-secondary/10 p-1 rounded-md text-muted-foreground hover:text-accent focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {experiences[selectedIdx].title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {experiences[selectedIdx].period}
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    {experiences[selectedIdx].details.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
