import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  BrainCircuit, 
  Code2, 
  User, 
  MapPin, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Target,
  LineChart,
  Lightbulb,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import resumePhoto from '../Фото для резюме.png';

const SectionHeading = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
      {icon}
    </div>
    <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
  </div>
);

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50">
      <div 
        className="p-5 cursor-pointer flex justify-between items-start gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h4 className="text-lg font-semibold text-slate-100">{project.name}</h4>
          <p className="text-sm text-indigo-400 mt-1 font-medium">{project.type}</p>
        </div>
        <button className="text-slate-400 hover:text-white transition-colors p-1 bg-slate-700/50 rounded-lg">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="px-5 pb-5 pt-2 border-t border-slate-700/50 bg-slate-800/30">
          <p className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            {t('ui.projectTasks')}
          </p>
          <ul className="space-y-2">
            {project.tasks.map((task, idx) => (
              <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
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
  const { t, i18n } = useTranslation();
  const personalInfo = t('personalInfo', { returnObjects: true });
  const experience = t('experience', { returnObjects: true });
  const skills = t('skills', { returnObjects: true });
  const education = t('education', { returnObjects: true });
  const ui = t('ui', { returnObjects: true });

  const skillIcons = [
    <BrainCircuit className="w-5 h-5" />,
    <Code2 className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <User className="w-5 h-5" />,
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('portfolio-language', lng);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* HEADER / HERO SECTION */}
      <header className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-end mb-6">
            <div className="inline-flex rounded-lg border border-slate-700 overflow-hidden">
              {['ru', 'en'].map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => changeLanguage(lng)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    i18n.language.startsWith(lng)
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            {ui.openToOffers}
          </div>
          <div className="grid gap-8 lg:grid-cols-[240px_1fr] items-start">
            <figure className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 backdrop-blur-sm">
              <img
                src={resumePhoto}
                alt={ui.photoAlt}
                className="w-full h-auto rounded-xl object-cover"
              />
            </figure>

            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mb-8 leading-relaxed">
                {personalInfo.role}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-10">
                <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                  <MapPin size={16} className="text-indigo-400" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                  <User size={16} className="text-indigo-400" />
                  {personalInfo.age} {ui.ageLabel}
                </div>
                <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                  <LineChart size={16} className="text-emerald-400" />
                  {ui.salaryLabel}: {personalInfo.salary}
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm lg:col-span-2">
              {personalInfo.about}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">
        
        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <SectionHeading icon={<Briefcase />} title={ui.experienceTitle} />
          
          <div className="space-y-12 pl-4 border-l-2 border-slate-800 ml-4">
            {experience.map((job) => (
              <div key={job.id} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[27px] top-1.5 ring-4 ring-slate-950"></div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-slate-400 font-medium">
                    <span className="text-indigo-400">{job.role}</span>
                    <span>•</span>
                    <span>{job.period}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <p className="mt-3 text-slate-300">{job.description}</p>
                </div>

                <div className="grid gap-4">
                  {job.projects.map((proj, idx) => (
                    <ProjectCard key={idx} project={proj} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <SectionHeading icon={<BrainCircuit />} title={ui.skillsTitle} />
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-400 bg-indigo-500/10 p-2 rounded-lg">
                    {skillIcons[idx]}
                  </div>
                  <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700/50 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-12">
          {/* EDUCATION */}
          <section id="education">
            <SectionHeading icon={<GraduationCap />} title={ui.educationTitle} />
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="text-sm text-indigo-400 font-bold mb-1">{edu.year}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{edu.university}</h3>
                  <p className="text-slate-300 mb-2">{edu.degree}</p>
                  {edu.details && (
                    <p className="text-sm text-slate-400 italic bg-slate-800/50 p-3 rounded-lg mt-3 border border-slate-700/50">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* INTERESTS */}
          <section id="interests">
            <SectionHeading icon={<Lightbulb />} title={ui.interestsTitle} />
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <ul className="space-y-4">
                {personalInfo.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-center text-slate-500">
        <p>{ui.footerCopyright.replace('{year}', new Date().getFullYear())}</p>
        <p className="text-sm mt-2">{ui.footerNote}</p>
      </footer>
    </div>
  );
}