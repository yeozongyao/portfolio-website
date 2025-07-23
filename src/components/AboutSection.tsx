import { useState } from 'react';
import AboutMe from './About/AboutMe';

const tabs = [
  { id: 'about', label: 'About Me' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'lang', label: 'Languages' },
];

type TabId = 'about' | 'tech' | 'lang';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  return (
    <section id="about" className="w-full px-20 py-16 scroll-mt-20">
      <div className="flex justify-center space-x-6 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabId)}
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

      <div>
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'tech' && <AboutMe />}
        {activeTab === 'lang' && <AboutMe />}
      </div>
    </section>
  );
}
