import React from 'react';

const techStack = {
  frontend: [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'Tailwind CSS',
    'ShadCN UI',
    'Vite',
    'TanStack',
    'Leaflet + OpenStreetMap',
  ],
  backend: [
    'Node.js',
    'Express',
    'Python',
    'FastAPI',
    'MQTT',
    'WebSocket',
    'WebRTC',
  ],
  ML: [
    'PyTorch',
    'YOLOv8',
    'openCV',
    'TensorFlow',
    'Hugging Face Transformers (BERT, GPT, etc.)',
    'spaCy',
    'NLTK',
    'scikit-learn',
    'Clustering(Kmeans, DBSCAN, Hierarchical Clustering)',
  ],
  testing: ['Jest', 'Cypress', 'Robot Framework', 'Selenium', 'Gazebo Sim'],
  databases: ['PostgreSQL', 'InfluxDB', 'DynamoDB'],
  devops: ['Docker', 'Azure Container Registry', 'Git / GitHub CI'],
  robotics: ['ROS 2 (Nav2)', 'Gazebo'],

  embedded: [
    'C',
    'C++',
    'STM32 / OlinuXino-Lime2 A20',
    'Raspberry Pi',
    'Jetson Orin',
  ],
};

export default function TechStackSection() {
  return (
    <section
      id="tech"
      className="h-screen w-full scroll-mt-20 px-20 py-16 flex flex-col"
    >
      <div className="flex-1 grid auto-rows-min grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="p-4 bg-secondary/10 rounded-lg flex flex-col"
          >
            <h3 className="text-xl font-semibold capitalize">{category}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/20 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
