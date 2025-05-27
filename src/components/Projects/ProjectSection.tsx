'use client'

import { motion } from 'framer-motion'

type Project = {
  title: string
  role: string
  description: string
  techStack: string[]
  teamSize: string
}

const projects: Project[] = [
  {
    title: 'Game Onn',
    role: 'Full Stack Developer',
    description: `A venue booking platform that allows players to book sports venues while enabling venue hosts to list, manage, and schedule availability.`,
    techStack: ['NextJS', 'Redux', 'Regex', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
    teamSize: '5–6',
  },
  {
    title: 'Music Application',
    role: 'Full Stack Developer',
    description: `A mobile app for streaming music, featuring categorized browsing, searching, audio playback, and a smooth cross-platform UI.`,
    techStack: ['React Native', 'NextJS', 'Redux', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
    teamSize: '10–12',
  },
  {
    title: 'Apna Pump',
    role: 'Full Stack Developer',
    description: `An on-demand fuel delivery app allowing drivers to complete and manage deliveries in real time via an intuitive mobile interface.`,
    techStack: ['NextJS', 'Redux', 'Regex', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
    teamSize: '10–12',
  },
  {
    title: 'Matka App',
    role: 'Full Stack Developer',
    description: `A mobile gaming app for number-based satta betting. Users can bet, check results, and manage their history with a secure interface.`,
    techStack: ['React Native', 'NextJS', 'Postgres', 'Redux', 'Tailwind CSS', 'TypeScript'],
    teamSize: '8–9',
  },
]

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-primary px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-accent mb-16 text-center text-5xl font-extrabold tracking-tight">
          My Projects
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-primary relative rounded-3xl p-8 shadow-lg ring-1 ring-indigo-600/20 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-accent absolute top-0 left-0 h-full w-1 rounded-tr-3xl rounded-br-3xl"></div>
              <div className="ml-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-accent text-2xl leading-tight font-semibold">
                    {project.title}
                  </h3>
                  {/* <span className="text-accent/80 text-sm font-semibold tracking-wide">
                    {project.duration}
                  </span> */}
                </div>
                <p className="text-accent/90 mb-3 text-sm font-semibold tracking-wide">
                  {project.role}
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-accent/20 rounded-full px-4 py-1 text-xs font-semibold text-gray-300 shadow-sm backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-accent/70 text-xs font-medium tracking-wider uppercase">
                  Team Size: {project.teamSize}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
