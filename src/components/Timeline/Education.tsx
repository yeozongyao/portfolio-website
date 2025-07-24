import { Building } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="h-screen py-16 px-8 scroll-mt-20">
      <div className="flex items-center justify-center space-x-8">
        <div className="bg-secondary/10 p-6 rounded-lg shadow-md w-64">
          <h3 className="text-lg font-semibold flex items-center space-x-2 mb-2">
            <Building className="w-5 h-5 text-accent" />
            <span>Hwa Chong Integrated Programme</span>
          </h3>
          <p className="text-sm text-gray-400 mb-2">2014–2019</p>
          <p className="text-sm leading-snug">
            Completed both secondary and junior college phases with strong focus
            in sciences and A-Level qualifications.
          </p>
        </div>

        <div className="h-1 w-16 bg-accent" />

        <div className="bg-secondary/10 p-6 rounded-lg shadow-md w-64">
          <h3 className="text-lg font-semibold flex items-center space-x-2 mb-2">
            <Building className="w-5 h-5 text-accent" />
            <span>National University of Singapore</span>
          </h3>
          <p className="text-sm text-gray-400 mb-2">Aug 2022–May 2026</p>
          <p className="text-sm leading-snug">
            BSc in Computer Engineering & Mathematics (First Class Honours),
            currently on Overseas College programme in Chile.
          </p>
        </div>
      </div>
    </section>
  );
}
