import { Building, Activity } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="h-screen py-16 px-8 scroll-mt-20">
      <div className="flex items-center justify-center space-x-8">
        <div className="bg-secondary/10 p-6 rounded-lg shadow-md w-80 h-80 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <Building className="w-5 h-5 text-accent" />
            <span>Hwa Chong Integrated Programme</span>
          </h3>
          <p className="text-sm text-gray-400">2014–2019</p>
          <ul className="text-sm leading-snug list-disc list-inside space-y-1">
            <li>Strong academic focus in sciences and mathematics (A-levels)</li>
            <li>Plays water polo competitively</li>
            <li>Founded Habitat for Humanity Hwa Chong campus chapter</li>
          </ul>
        </div>

        <div className="h-1 w-16 bg-accent self-center" />

        <div className="bg-secondary/10 p-6 rounded-lg shadow-md w-80 h-80 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <Building className="w-5 h-5 text-accent" />
            <span>National University of Singapore</span>
          </h3>
          <p className="text-sm text-gray-400">Aug 2022–May 2026</p>
          <ul className="text-sm leading-snug list-disc list-inside space-y-1">
            <li>BSc in Computer Engineering & Mathematics (First Class Honours)</li>
            <li>Digital Systems, Embedded Systems, Algorithms, Data Structures, Networks</li>
          </ul>
        </div>

        <div className="h-1 w-16 bg-accent self-center" />

        <div className="bg-secondary/10 p-6 rounded-lg shadow-md w-80 h-80 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <Activity className="w-5 h-5 text-accent" />
            <span>NUS Overseas College (Chile)</span>
          </h3>
          <p className="text-sm text-gray-400">Aug 2024–Jul 2025</p>
          <ul className="text-sm leading-snug list-disc list-inside space-y-1">
            <li>Entrepreneurship internship in Santiago</li>
            <li>Developed business strategies for robotics startups</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
