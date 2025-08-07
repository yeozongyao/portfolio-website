import { useState } from 'react';
import AboutMe from './About/AboutMe';
import TechStackSection from './About/TechStack';
import LanguagesSection from './About/Language';

const tabs = [
  { id: 'about', label: 'About Me' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'lang', label: 'Languages' },
] as const;
type TabId = typeof tabs[number]['id'];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  return (
    <section
      id="about"
      className="h-screen w-full px-20 scroll-mt-20 flex flex-col"
    >
      <div className="flex justify-center space-x-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1 font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-accent border-b-2 border-accent'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-auto">
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'tech' && <TechStackSection />}
        {activeTab === 'lang' && <LanguagesSection />}
      </div>
    </section>
  );
}
