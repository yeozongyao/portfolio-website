const skills = ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Node.js'];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
