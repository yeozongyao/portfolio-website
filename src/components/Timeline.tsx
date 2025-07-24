import { useState } from 'react';
import Education from './Timeline/Education';
const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
] as const;
type TabId = (typeof tabs)[number]['id'];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<TabId>('education');

  return (
    <section
      id="timeline"
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
        {activeTab === 'education' && <Education />}
        {activeTab === 'experience' && <Education />}
      </div>
    </section>
  );
}
