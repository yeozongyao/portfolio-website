import React from 'react';

type SpokenLanguage = {
  name: string;
  level: 'Native' | 'Fluent' | 'Intermediate' | 'Beginner';
};

const programmingLanguages = ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Java'];
const spokenLanguages: SpokenLanguage[] = [
  { name: 'English', level: 'Native' },
  { name: 'Chinese', level: 'Native' },
  { name: 'Spanish', level: 'Intermediate' },
];

export default function LanguagesSection() {
  return (
    <section
      id="lang"
      className="w-full scroll-mt-20 px-20 py-16 flex flex-col"
    >
      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0">
        <div className="flex-1 bg-secondary/10 p-6 rounded-lg h-full">
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-3">
            {programmingLanguages.map((lang) => (
              <span
                key={lang}
                className="bg-accent/20 px-3 py-1 rounded-full text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-secondary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Spoken Languages</h3>
          <ul className="space-y-2 text-lg">
            {spokenLanguages.map((lang) => (
              <li key={lang.name} className="flex justify-between">
                <span>{lang.name}</span>
                <span className="font-medium text-accent">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
