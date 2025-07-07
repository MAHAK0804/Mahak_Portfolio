// components/Experience/ExperienceSection.tsx

type Experience = {
  company: string
  role: string
  description: string
}

const experiences: Experience[] = [
  {
    company: 'Staveo Tech Pvt. Ltd., New Delhi',
    role: 'Mobile Application Developer',
    description: `Working as a full-time Mobile App Developer, building high-quality Android and iOS applications using React Native and Expo. Responsible for implementing core features, integrating Firebase, managing state with Redux Toolkit, and optimizing performance. Also involved in publishing apps to the Play Store and maintaining production builds.`,
  },
  {
    company: 'Geeks2Connect Infotech Pvt Ltd, Jaipur',
    role: 'Associate Software Development Engineer Intern',
    description: `Joined as an ASDE Intern and contributed as a Full Stack Developer and App Developer. Worked on various web and mobile application projects using React, React Native, Expo, Express.js, MongoDB, and Firebase. Gained experience in individually handling projects, designing UI, managing APIs, integrating third-party services like payment gateways, and deploying apps.`,
  },
  {
    company: 'Celebal Technologies, Jaipur',
    role: 'Node.js Developer Intern',
    description: `Worked as a backend developer using Node.js and Express. Built REST APIs and collaborated with frontend teams to integrate features. Gained hands-on experience with MongoDB, authentication mechanisms, and project structure.`,
  },
  {
    company: 'Learn and Build, Remote',
    role: 'MERN Stack Developer',
    description: `Developed full-stack web applications using the MERN stack. Built interactive UIs with React, implemented APIs in Node.js/Express, and used MongoDB for database operations. Enhanced skills in deployment, project architecture, and version control.`,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="my-12">
      <h2 className="mb-6 text-center text-3xl font-bold">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="rounded-xl border p-4 shadow-sm">
            <h3 className="text-xl font-semibold">
              {exp.role} @ {exp.company}
            </h3>
            {/* <p className="text-sm text-gray-500">{exp.duration}</p> */}
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
