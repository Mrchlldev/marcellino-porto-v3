import Link from "next/link";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { heroSettings } from "@/lib/settings/hero";
import { aboutSettings } from "@/lib/settings/about";
import { skillSettings } from "@/lib/settings/skills";
import { educationSettings } from "@/lib/settings/education";
import { projectSettings } from "@/lib/settings/projects";
import { contactSettings } from "@/lib/settings/contact";
import { SectionHeader } from "@/components/SectionHeader";

export function HeroSection() {
  return (
    <section className="retro-grid px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div data-aos="blur-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[#b8f26d] px-4 py-2 font-bold shadow-retroSm"><Sparkles size={18} /> {heroSettings.badge}</p>
          <h1 className="font-title text-6xl font-black leading-none md:text-8xl">{heroSettings.heading}</h1>
          <h2 className="mt-4 font-title text-3xl font-black text-[#ff4e9a] md:text-5xl">{heroSettings.subheading}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8">{heroSettings.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={heroSettings.primaryButton.href} className="retro-button bg-[#73d2ff] px-6 py-3 font-extrabold">{heroSettings.primaryButton.label}</Link>
            <Link href={heroSettings.secondaryButton.href} className="retro-button bg-white px-6 py-3 font-extrabold">{heroSettings.secondaryButton.label}</Link>
          </div>
        </div>
        <div className="retro-card relative min-h-[420px] rounded-[2rem] bg-[#ffb84d] p-6" data-aos="blur-up" data-aos-delay="150">
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full border-4 border-black bg-[#ff7ab6]" />
          <div className="absolute bottom-10 left-8 h-28 w-28 rotate-12 border-4 border-black bg-[#73d2ff]" />
          <div className="grid h-full place-items-center rounded-[1.5rem] border-4 border-black bg-[#fff7df] p-8 text-center">
            <div>
              <p className="font-title text-8xl font-black">M</p>
              <p className="mt-3 text-lg font-bold">Retro Creative Identity</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:col-span-2 md:grid-cols-3">
          {heroSettings.stats.map((stat, index) => (
            <div key={stat.label} className="retro-card rounded-3xl bg-white p-6" data-aos="blur-up" data-aos-delay={index * 100}>
              <p className="font-title text-4xl font-black">{stat.value}</p>
              <p className="font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...aboutSettings} />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="retro-card rounded-3xl bg-white p-8" data-aos="blur-up">
            {aboutSettings.paragraphs.map((text) => <p key={text} className="mb-5 leading-8">{text}</p>)}
          </div>
          <div className="grid gap-4">
            {aboutSettings.highlights.map((item, index) => (
              <div key={item} className="retro-card rounded-2xl bg-[#b8f26d] p-5 font-title text-2xl font-black" data-aos="blur-up" data-aos-delay={index * 100}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...skillSettings} />
        <div className="grid gap-6 md:grid-cols-3">
          {skillSettings.skills.map((skill, index) => (
            <div key={skill.name} className="retro-card rounded-3xl bg-[#fff7df] p-6" data-aos="blur-up" data-aos-delay={index * 80}>
              <p className="mb-3 inline-block rounded-full border-2 border-black bg-[#73d2ff] px-3 py-1 text-sm font-black">{skill.level}</p>
              <h3 className="font-title text-3xl font-black">{skill.name}</h3>
              <p className="mt-3 leading-7">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader {...educationSettings} />
        <div className="space-y-6">
          {educationSettings.items.map((item, index) => (
            <div key={item.school} className="retro-card rounded-3xl bg-white p-6" data-aos="blur-up" data-aos-delay={index * 100}>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="font-title text-3xl font-black">{item.school}</h3>
                <p className="rounded-full border-2 border-black bg-[#ffb84d] px-4 py-2 font-black">{item.year}</p>
              </div>
              <p className="mt-2 font-bold">{item.major}</p>
              <p className="mt-3 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...projectSettings} />
        <div className="grid gap-6 md:grid-cols-2">
          {projectSettings.projects.map((project, index) => (
            <a key={project.title} href={project.href} className="retro-card block rounded-3xl bg-white p-7" data-aos="blur-up" data-aos-delay={index * 100}>
              <p className="mb-3 inline-block rounded-full border-2 border-black bg-[#ff7ab6] px-3 py-1 text-sm font-black">{project.category}</p>
              <h3 className="font-title text-4xl font-black">{project.title}</h3>
              <p className="mt-3 leading-7">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full border-2 border-black bg-[#b8f26d] px-3 py-1 text-sm font-bold">{tag}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader {...contactSettings} />
        <div className="grid gap-6 md:grid-cols-3">
          {contactSettings.cards.map((card, index) => (
            <a key={card.label} href={card.href} className="retro-card rounded-3xl bg-[#73d2ff] p-6" data-aos="blur-up" data-aos-delay={index * 100}>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border-[3px] border-black bg-white"><Mail size={22} /></div>
              <h3 className="font-title text-2xl font-black">{card.label}</h3>
              <p className="mt-2 font-bold">{card.value}</p>
            </a>
          ))}
        </div>
        <div className="retro-card mt-10 rounded-3xl bg-[#171717] p-8 text-[#fff7df]" data-aos="blur-up">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-title text-4xl font-black">Ready to collaborate?</h3>
              <p className="mt-2 opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <a href="mailto:hello@example.com" className="retro-button inline-flex items-center gap-2 bg-[#ffb84d] px-6 py-3 font-extrabold text-black">Send Message <ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
