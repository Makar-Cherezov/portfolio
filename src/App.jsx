import { useState } from 'react';
import {
  GraduationCap,
  User,
  MapPin,
  Wifi,
  ChevronDown,
  ChevronUp,
  Target,
  Lightbulb,
  CheckCircle2,
  Trophy,
  Sparkles,
  Users,
  Compass,
  Gift,
  ListChecks,
  FolderKanban,
  PartyPopper,
  BrainCircuit,
  Code2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import resumePhoto from '../Фото для резюме.png';

const SectionHeading = ({ icon, title, caption }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      <span className="grid place-items-center w-11 h-11 rounded-xl bg-coral-soft text-coral-deep shrink-0">
        {icon}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-coral-deep tracking-tight text-balance">
        {title}
      </h2>
    </div>
    {caption && <p className="text-caption text-base md:text-lg pl-1">{caption}</p>}
  </div>
);

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-surface border border-line rounded-xl overflow-hidden transition-colors hover:border-teal/50">
      <button
        type="button"
        className="w-full text-left p-5 cursor-pointer flex justify-between items-start gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div>
          <h4 className="font-display text-lg font-bold text-ink">{project.name}</h4>
          <p className="text-sm text-teal-deep mt-1 font-semibold">{project.type}</p>
        </div>
        <span className="text-caption shrink-0 p-1.5 bg-sink rounded-lg">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-2 border-t border-line bg-sink/40">
          <p className="text-sm font-semibold text-caption mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-teal" />
            {t('ui.projectTasks')}
          </p>
          <ul className="space-y-2">
            {project.tasks.map((task, idx) => (
              <li key={idx} className="text-body text-sm flex items-start gap-2">
                <span className="text-coral mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-coral"></span>
                <span className="leading-relaxed">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const { t } = useTranslation();
  const personalInfo = t('personalInfo', { returnObjects: true });
  const tasks = t('tasks', { returnObjects: true });
  const expectations = t('expectations', { returnObjects: true });
  const softPerks = t('softPerks', { returnObjects: true });
  const experience = t('experience', { returnObjects: true });
  const skills = t('skills', { returnObjects: true });
  const education = t('education', { returnObjects: true });
  const achievements = t('achievements', { returnObjects: true });
  const ui = t('ui', { returnObjects: true });

  const skillIcons = [
    <BrainCircuit className="w-5 h-5" />,
    <Code2 className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <User className="w-5 h-5" />,
  ];

  const softPerkIcons = [
    <Sparkles size={18} />,
    <Users size={18} />,
    <GraduationCap size={18} />,
    <PartyPopper size={18} />,
  ];

  return (
    <div className="min-h-screen bg-bg text-body font-sans selection:bg-teal-soft">
      {/* HERO */}
      <header className="relative overflow-hidden pt-10 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 85% 0%, rgba(14,156,143,0.10), transparent 60%), radial-gradient(ellipse 50% 45% at 0% 15%, rgba(210,94,54,0.08), transparent 55%)',
          }}
        ></div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] items-start">
            <figure className="bg-surface border border-line rounded-2xl p-3 shadow-soft">
              <img
                src={resumePhoto}
                alt={ui.photoAlt}
                className="w-full h-auto rounded-xl object-cover"
              />
            </figure>

            <div>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-ink tracking-tight mb-4 text-balance">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-caption font-semibold max-w-3xl mb-8 leading-snug">
                {personalInfo.role}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-body">
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-line">
                  <MapPin size={16} className="text-coral" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-line">
                  <Wifi size={16} className="text-teal" />
                  {ui.remoteWork}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-soft text-teal-deep font-bold font-display">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                  </span>
                  {ui.openToOffers}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20 md:space-y-28">
        {/* ABOUT */}
        <section id="about">
          <SectionHeading
            icon={<User size={22} />}
            title={ui.aboutTitle}
            caption={ui.aboutCaption}
          />
          <div className="bg-surface border border-line rounded-2xl p-7 md:p-9 shadow-soft border-l-4 border-l-coral">
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl">
              {personalInfo.about}
            </p>
          </div>
        </section>

        {/* 3 — TASKS FOR ME */}
        <section id="tasks">
          <SectionHeading
            icon={<ListChecks size={22} />}
            title={ui.tasksTitle}
            caption={ui.tasksCaption}
          />
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {tasks.map((task, idx) => (
              <div key={idx} className="bg-surface border border-line rounded-2xl p-6 shadow-soft">
                <h3 className="font-display text-lg font-bold text-ink mb-2">{task.title}</h3>
                <p className="text-body leading-relaxed">{task.text}</p>
              </div>
            ))}
          </div>

          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-caption mb-5">
            {ui.tasksStack}
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-surface border border-line rounded-2xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-teal-soft text-teal-deep">
                    {skillIcons[idx]}
                  </span>
                  <h4 className="font-display text-base font-bold text-ink">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-bg text-body text-sm rounded-lg border border-line"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4 — EXPECTATIONS */}
        <section id="expectations">
          <SectionHeading
            icon={<Compass size={22} />}
            title={ui.expectationsTitle}
            caption={ui.expectationsCaption}
          />
          <div className="grid gap-4">
            {expectations.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface border border-line rounded-2xl p-6 shadow-soft flex gap-4 items-start"
              >
                <CheckCircle2 size={22} className="text-coral shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink mb-1">{item.title}</h3>
                  <p className="text-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 — PERKS */}
        <section id="perks">
          <SectionHeading
            icon={<Gift size={22} />}
            title={ui.perksTitle}
            caption={ui.perksCaption}
          />

          {/* 5a — what I bring to a team */}
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {softPerks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-surface border border-line rounded-2xl p-6 shadow-soft flex gap-4 items-start"
              >
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-coral-soft text-coral-deep shrink-0">
                  {softPerkIcons[idx]}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink mb-1">{perk.title}</h3>
                  <p className="text-body leading-relaxed">{perk.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 5b — project portfolio */}
          <h3 className="font-display text-xl font-extrabold text-coral-deep mb-8 flex items-center gap-2">
            <FolderKanban size={20} className="text-coral-deep" />
            {ui.perksProjects}
          </h3>
          <div className="space-y-12 pl-4 border-l-2 border-line ml-3 mb-16">
            {experience.map((job) => (
              <div key={job.id} className="relative pl-8">
                <span className="absolute w-3.5 h-3.5 bg-teal rounded-full -left-[26px] top-1.5 ring-4 ring-bg"></span>
                <div className="mb-6">
                  <h4 className="font-display text-2xl font-bold text-ink">{job.company}</h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-caption font-medium text-sm">
                    <span className="text-teal-deep font-semibold">{job.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.location}</span>
                  </div>
                  <p className="mt-3 text-body">{job.description}</p>
                </div>
                <div className="grid gap-4">
                  {job.projects.map((proj, idx) => (
                    <ProjectCard key={idx} project={proj} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 5c — interests + education + achievements */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Interests */}
            <div className="bg-surface border border-line rounded-2xl p-6 shadow-soft">
              <h3 className="font-display text-lg font-extrabold text-coral-deep mb-4 flex items-center gap-2">
                <Lightbulb size={18} className="text-coral" />
                {ui.perksInterests}
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-bg text-body text-sm rounded-lg border border-line"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-surface border border-line rounded-2xl p-6 shadow-soft">
              <h3 className="font-display text-lg font-extrabold text-coral-deep mb-4 flex items-center gap-2">
                <Trophy size={18} className="text-coral" />
                {ui.perksAchievements}
              </h3>
              <ul className="space-y-4">
                {achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Trophy size={16} className="mt-1 shrink-0 text-coral" />
                    <div>
                      <span className="text-ink">{item.title}</span>
                      <span className="ml-2 text-sm font-bold text-coral-deep whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-lg font-extrabold text-coral-deep mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-coral" />
                {ui.perksEducation}
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-surface border border-line rounded-2xl p-6 shadow-soft">
                    <div className="text-sm text-teal-deep font-bold mb-1">{edu.year}</div>
                    <h4 className="font-display text-lg font-bold text-ink mb-2">{edu.university}</h4>
                    <p className="text-body mb-2">{edu.degree}</p>
                    {edu.details && (
                      <p className="text-sm text-caption italic bg-sink/60 p-3 rounded-lg mt-3 border border-line">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-line py-12 text-center text-caption">
        <p>{ui.footerCopyright.replace('{year}', new Date().getFullYear())}</p>
        <p className="text-sm mt-2 max-w-xl mx-auto px-6">{ui.footerNote}</p>
      </footer>
    </div>
  );
}
