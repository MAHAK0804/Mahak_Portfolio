// components/Experience/ExperienceSection.tsx

type Experience = {
  company: string
  role: string
  description: string
}

const experiences: Experience[] = [
  {
    company: 'Geeks2Connect, Jaipur',
    role: 'Associate Software Development Engineer',
    description: `Joined the organization as ASDE and provided direction for applications in development. Researched and developed new ways to improve the development process, also learned about Next.js, Expo, React Native, and many more frameworks and tools that have enhanced skills to individually handle and manage projects.`,
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
