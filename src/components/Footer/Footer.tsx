import { socials } from '@/appData/personal'

const FooterSocials = () => {
  return (
    <footer className="bg-secondary px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Social Icons */}
        <ul className="flex gap-6">
          {socials.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-neutral/70 text-2xl transition-colors duration-300"
                aria-label={`Link to ${item.href}`}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-tertiary-content text-center text-xs md:text-sm">
          © 2025 — Copyright. All Rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterSocials
