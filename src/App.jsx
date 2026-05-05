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

// --- DATA ---
const personalInfo = {
  name: "Макар Черезов",
  role: "Бизнес- и системный аналитик | Менеджер ИТ-проектов",
  age: 22,
  location: "Томск, Россия (Удаленно / Гибрид)",
  salary: "170 000 - 180 000 ₽",
  about: "Имею опыт анализа проблем и внедрения решений на базе ИИ. Интересуюсь тем, как устроены организации и как их можно улучшить. Изучаю стандарты разработки, управления и качества. Внедрял инструменты управления проектами в организацию с уровнем управления CMMI 1 (начальный, хаотичный). Люблю обучаться и обучать коллег.",
  interests: [
    "Методологии разработки (SEMAT Essence)",
    "Моделирование бизнес-процессов",
    "Разработка систем на базе AI",
    "Стандартизация (ISO, ГОСТ, CMMI, PMBoK)",
    "Повышение продуктивности с помощью нейросетей"
  ]
};

const experience = [
  {
    id: "red_mad_robot",
    company: "red_mad_robot",
    role: "Бизнес- и системный аналитик",
    period: "Май 2025 - настоящее время",
    location: "Москва",
    description: "Работа в формате стартапов и лабораторий инноваций. Проектирование сложных систем с внедрением AI.",
    projects: [
      {
        name: "Сервис с ИИ-агентом для управления рекламой на Wildberries",
        type: "Внедрение AI, аналитика данных, маркетплейсы",
        tasks: [
          "Сформулировал измеримые цели проекта для бизнес-лидеров.",
          "Обработал результаты каст-дева с селлерами, провел анализ конкурентов.",
          "Собрал, формализовал и декомпозировал бизнес-требования до функциональных (с критериями приемки).",
          "Подобрал референсы UX/UI, на которых обосновалась концепция агента.",
          "Спроектировал ИИ-агента: карта сценариев, HLD, Sequence-диаграммы, разработал Structured Output.",
          "Спроектировал API, схему данных, интеграции с маркетплейсом.",
          "Создал базу знаний проекта, написал тест-кейсы, внедрил диаграмму Гантта.",
          "Скорректировал процессы менеджмента с меняющейся командой, эскалировал проблемы и добился рефлексии на проекте.",
          "Проводил встречи со стейкхолдерами (CEO, BizDev, PO, селлеры) и груминги для команды."
        ]
      },
      {
        name: "Пресейл для двух бизнес-юнитов (AI-обработка документов)",
        type: "Продажи, документооборот, внедрение AI",
        tasks: [
          "За неделю провел предпроектное обследование и сбор требований со стейкхолдеров.",
          "Составил фичлисты с интеграциями и внедрением AI.",
          "Спроектировал процессы TO BE для трех отделений клиента.",
          "Провел оценку реализации с менеджерами и разработчиками, рассчитал экономический эффект.",
          "Презентовал техническую часть коммерческого предложения."
        ]
      },
      {
        name: "Лаборатория применения AI в бизнесе (Телеком)",
        type: "Анализ бизнес-процессов, внедрение AI",
        tasks: [
          "Провел обследование процессов для поиска возможности внедрения AI.",
          "Описал процессы AS IS и TO BE в BPMN.",
          "Спроектировал и презентовал решения клиентам, согласовал экономическое обоснование.",
          "Помог в организации нового типа проектов в компании, провел анализ рынка телекома."
        ]
      },
      {
        name: "Мобильное приложение для казахстанского банка",
        type: "Mobile app, Entertainment",
        tasks: [
          "Спроектировал модули приложения (тесты и челленджи) на русском и казахском языках.",
          "Составил требования и схему данных."
        ]
      }
    ]
  },
  {
    id: "sibagro",
    company: "Сибагро - ИТ",
    role: "Администратор проектов",
    period: "Октябрь 2024 - Май 2025",
    location: "Томск",
    description: "Администрировал портфель из 5 проектов цифровой трансформации растениеводства. Разработал и защитил дорожную карту перед топ-менеджментом холдинга.",
    projects: [
      {
        name: "Единый диспетчерский центр растениеводства",
        type: "Внедрение ИС, регламентация, цифровая отчетность",
        tasks: [
          "Собрал требования со стейкхолдеров разных уровней (от агрономов до зам. гендиректора).",
          "Сформулировал критерии успеха, разработал ТЭО проекта и дорожную карту.",
          "Внедрил инструменты: Lean Canvas, систему управления задачами, базу знаний, реестр решений, дашборды статусов.",
          "Моделировал бизнес-процессы AS IS и TO BE (BPMN), разрабатывал регламенты и должностные инструкции.",
          "Курировал системных аналитиков по описанию интеграций.",
          "Организовывал коммуникацию с подрядчиками в двух регионах (Новосибирск, Красноярск), проводил обучение.",
          "Успешно завершил проект в срок к началу активных полевых работ."
        ]
      },
      {
        name: "Разработка методики администрирования проектов",
        type: "Методология, CMMI, стандартизация",
        tasks: [
          "Провел оценку уровня организации по CMMI (выявлен уровень 1: хаотичный).",
          "Разработал методическое пособие для администраторов проектов (роли, границы, инструменты).",
          "Описал взаимодействие с проектным офисом, формализовал процессы команд.",
          "Провел успешную апробацию практик на портфеле проектов трансформации."
        ]
      },
      {
        name: "Мониторинг средств защиты растений и ГСМ",
        type: "IoT, телеметрия, регламентация",
        tasks: [
          "Разработал и контролировал планы проектов.",
          "Разработал схемы процессов TO BE в BPMN, контролировал создание инструкций.",
          "Координировал работу инженерной службы и подрядчиков."
        ]
      },
      {
        name: "Внедрение BI-отчетности и агроскаутинга",
        type: "BI, интеграции 1С, координация закупок",
        tasks: [
          "Координировал интеграции системы подрядчика с 1С холдинга.",
          "Разработал требования к сбору данных, координировал закупки планшетов и БПЛА."
        ]
      }
    ]
  },
  {
    id: "intek",
    company: "Интэк",
    role: "Проджект-менеджер",
    period: "Декабрь 2023 - Январь 2024",
    location: "Томск",
    description: "Управление небольшими проектами, автоматизация рутины.",
    projects: [
      {
        name: "Проекты автоматизации и управления",
        type: "Project Management, Скрипты",
        tasks: [
          "Уточнил нефункциональные требования для разработки ПО, договорился на уменьшение объема работ за счет готового решения.",
          "Написал скрипт для автоматической простановки номеров задач в YouGile.",
          "Составление инвойсов, поиск поставщиков на Alibaba."
        ]
      }
    ]
  }
];

const skills = [
  {
    category: "Системная аналитика",
    icon: <BrainCircuit className="w-5 h-5" />,
    items: ["Сбор и формализация требований (User story, Use case)", "Моделирование предметной области", "SQL (запросы, триггеры, процедуры)", "Тест-кейсы (Given/When/Then)", "Python, C++ (Базово)", "Docker, Podman, Grafana, Jmeter", "Проектирование API (REST, Swagger)", "UML (Class, Sequence, Component), C4", "BPMN, Activity diagrams", "Figma (UI/UX wireframes)"]
  },
  {
    category: "Работа с нейросетями",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Разработка требований к датасетам", "Пайплайны n8n", "Structured Output для LLM", "Создание скиллов (Gemini, Claude, Cursor)", "Принципы работы LLM", "Генерация прототипов"]
  },
  {
    category: "Управление проектами",
    icon: <Target className="w-5 h-5" />,
    items: ["Scrum, Kanban, TDD, FDD, DDD", "OMG Essence, CMMI, Cynefin", "Дорожные карты, Гантта, RACI", "OKR, SMART, DoD, DoR", "MoSCoW, RICE", "Управление рисками", "Модель Ицхака Адизеса (PAEI)", "Расчет экономической эффективности"]
  },
  {
    category: "Soft Skills",
    icon: <User className="w-5 h-5" />,
    items: ["Английский C1 (Advanced)", "Лидерство и Ownership", "Критическое мышление", "Управление ожиданиями", "Эскалация проблем", "Презентация и фасилитация", "Саморефлексия"]
  }
];

const education = [
  {
    university: "Томский государственный университет",
    degree: "Магистратура | Управление рисками в программной инженерии",
    year: "2025 - 2027"
  },
  {
    university: "Томский политехнический университет",
    degree: "Бакалавриат | Информационные системы и технологии в бизнесе",
    year: "2021 - 2025",
    details: "Дипломная работа: «Разработка регламента и центра компетенций администрирования проектов для холдинга “Сибагро”»"
  }
];


// --- COMPONENTS ---

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
            Ключевые задачи и кейсы:
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
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* HEADER / HERO SECTION */}
      <header className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Открыт к предложениям
          </div>
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
              {personalInfo.age} года
            </div>
            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
              <LineChart size={16} className="text-emerald-400" />
              Ожидания: {personalInfo.salary}
            </div>
          </div>

          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
            {personalInfo.about}
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">
        
        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <SectionHeading icon={<Briefcase />} title="Опыт работы" />
          
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
          <SectionHeading icon={<BrainCircuit />} title="Компетенции и навыки" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-400 bg-indigo-500/10 p-2 rounded-lg">
                    {skillGroup.icon}
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* INTERESTS */}
          <section id="interests">
            <SectionHeading icon={<Lightbulb />} title="Профессиональные интересы" />
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

          {/* EDUCATION */}
          <section id="education">
            <SectionHeading icon={<GraduationCap />} title="Образование" />
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
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-center text-slate-500">
        <p>© {new Date().getFullYear()} Макар Черезов. Сайт-портфолио.</p>
        <p className="text-sm mt-2">Спроектировано для демонстрации расширенного опыта, не вмещающегося в стандартное резюме.</p>
      </footer>
    </div>
  );
}