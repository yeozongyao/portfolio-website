function About() {
  return (
    <div>
      <section
        id="about"
        className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi! I’m Yeo Zong Yao, a passionate developer with a love for building
          beautiful and functional web applications. I enjoy learning new
          technologies and solving real-world problems through code.
        </p>
      </section>

      <section
        id="skills"
        className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
          <li>React</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML &amp; CSS</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section
        id="projects"
        className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="mb-2">
              A brief description of your project goes here. Highlight the tech
              stack and your role.
            </p>
            <a href="#" className="text-accent underline">
              View Project
            </a>
          </div>
          <div className="bg-white/10 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="mb-2">
              Another project description. You can add as many projects as you
              like.
            </p>
            <a href="#" className="text-accent underline">
              View Project
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          Feel free to reach out to me via email or connect on LinkedIn!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:yeozongyao@gmail.com"
            className="text-accent underline"
          >
            yeozongyao@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/yeozongyao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
