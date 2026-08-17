import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      ui: {
        openToOffers: 'Открыт к предложениям',
        remoteWork: 'Удаленная работа',
        photoAlt: 'Фото для резюме',
        projectTasks: 'Что делал на проекте:',
        positionsTitle: 'Позиции, на которые я претендую',
        positionsCaption: 'Роли, в которых я приношу максимум пользы',
        aboutTitle: 'О себе',
        aboutCaption: 'Коротко о том, как я работаю и что мне важно',
        tasksTitle: 'Какие задачи мне стоит давать',
        tasksCaption: 'Типы задач, где я силён, — и мой стек под них',
        tasksStack: 'Инструменты и стек',
        expectationsTitle: 'Что я жду от работодателя',
        expectationsCaption: 'Условия, в которых я работаю с максимальной отдачей',
        perksTitle: 'Мои плюшки',
        perksCaption: 'Что вы получаете вместе со мной — сверх резюме',
        perksProjects: 'Портфолио проектов',
        perksHuman: 'Что приношу в команду',
        perksInterests: 'Профессиональные интересы',
        perksEducation: 'Образование',
        perksAchievements: 'Достижения',
        footerCopyright: '© {year} Макар Черезов. Сайт-портфолио.',
        footerNote:
          'Спроектировано для демонстрации расширенного опыта, не вмещающегося в стандартное резюме.',
      },
      personalInfo: {
        name: 'Макар Черезов',
        role: 'Middle Системный аналитик с практической экспертизой в AI и менеджменте',
        location: 'Новосибирск, Россия',
        about:
          '12 проектов за 3 года работы. Как менеджер проектов в агрохолдинге управлял внедрением ИТ-решений, создавал процессы и подразделения, выстраивал проектную культуру в департаменте. В заказной разработке внедрял AI в телеком, документооборот, управление знаниями; создавал продукты с AI: платформа управления рекламой в e-commerce, финтех-приложение для управления финансами на рынке ОАЭ. В командной работе применяю передовые практики и инструменты, создаю доброжелательную атмосферу, слышу разные точки зрения и грамотно доношу свою.',
        interests: [
          'Методологии разработки (SEMAT Essence)',
          'Моделирование бизнес-процессов',
          'Разработка систем на базе AI',
          'Стандартизация (ISO, ГОСТ, CMMI, PMBoK)',
          'Повышение продуктивности с помощью нейросетей',
        ],
      },
      positions: [
        {
          title: 'Системный аналитик',
          note: 'Требования, модели процессов, проектирование API и данных.',
        },
        {
          title: 'Бизнес-аналитик',
          note: 'Обследование, процессы TO BE, экономическое обоснование решений.',
        },
        {
          title: 'Менеджер ИТ-проектов',
          note: 'Портфель проектов, методология, коммуникация со стейкхолдерами.',
        },
        {
          title: 'Аналитик AI-решений',
          note: 'Внедрение LLM в бизнес-процессы: гипотезы, сценарии, Structured Output.',
        },
      ],
      tasks: [
        {
          title: 'Разобраться в процессе',
          text: 'Провести обследование, описать AS IS и TO BE в BPMN, найти узкие места и точки для улучшения.',
        },
        {
          title: 'Спроектировать решение',
          text: 'Собрать и декомпозировать требования, спроектировать API, схему данных и интеграции, написать тест-кейсы.',
        },
        {
          title: 'Внедрить AI в бизнес',
          text: 'Проверить гипотезы, спроектировать AI-агента и Structured Output, рассчитать экономический эффект.',
        },
        {
          title: 'Навести порядок',
          text: 'Выстроить методологию, базу знаний, реестр решений и стандарты работы — даже с нуля в хаотичной среде.',
        },
      ],
      expectations: [
        {
          title: 'Задачи со смыслом и рост',
          text: 'Сложные задачи на стыке анализа и AI, где видно влияние на продукт и бизнес.',
        },
        {
          title: 'Порядок в процессах — или мандат его навести',
          text: 'Либо зрелые процессы, либо свобода и доверие выстроить их самому.',
        },
        {
          title: 'Культура обучения',
          text: 'Обмен знаниями, менторство, ретроспективы и право на ошибку.',
        },
        {
          title: 'Дружелюбная команда',
          text: 'Здоровая атмосфера, открытая коммуникация и уважение друг к другу.',
        },
        {
          title: 'Гибкость',
          text: 'Удалёнка или гибрид и фокус на результат, а не на часы в офисе.',
        },
      ],
      softPerks: [
        {
          title: 'Инициативность',
          text: 'Не жду, пока задачу поставят: сам нахожу узкие места и предлагаю улучшения.',
        },
        {
          title: 'Дружеская атмосфера',
          text: 'Поддерживаю здоровое общение, помогаю коллегам и делюсь знаниями.',
        },
        {
          title: 'Наставничество',
          text: 'Люблю обучать: провожу онбординги и делюсь наработками с командой.',
        },
        {
          title: 'Энергия на корпоративах',
          text: 'Активен в командных событиях и поддерживаю дух команды вне задач.',
        },
      ],
      experience: [
        {
          id: 'red_mad_robot',
          company: 'red_mad_robot',
          role: 'Бизнес- и системный аналитик',
          period: 'Май 2025 - настоящее время',
          location: 'Москва (удалённо)',
          description:
            'Работа в формате заказной разработки, стартапов и лабораторий инноваций. Проектирование систем с внедрением AI.',
          projects: [
            {
              name: 'Приложение для управления финансами в ОАЭ с AI-ассистентом',
              type: 'Финтех, регуляторные требования, AI-driven SDD-процесс разработки',
              tasks: [
                'Изучил документацию и предложения ключевых банков ОАЭ, составил модель каталога счетов, дебетовых и кредитных карт, наполнил каталог для PoC-запуска.',
                'Изучил релевантные регуляторные требования по хранению и обработке данных.',
                'Собрал бизнес-требования к AI-ассистенту, декомпозировал на User Story, разработал HLD для LLM рабочего процесса с тулами, презентовал архитектуру команде.',
                'Описал бизнес- и функциональные требования по парсингу банковских выписок, разработал HLD и Sequence-диаграммы.',
                'Работал по Spec-Driven Development с общим репозиторием для разработки и аналитики, чтобы обеспечить системное и контролируемое применение AI.',
              ],
            },
            {
              name: 'AI-ассистент для управления знаниями на основе внутренних документов',
              type: 'Вопросно-ответная система, RAG, юридический отдел в телеком-компании',
              tasks: [
                'Обследовал и схематизировал процесс AS IS, спроектировал и согласовал процесс TO BE (UML Activity Diagram).',
                'Разработал HLD.',
                'Составил и согласовал с клиентом дерево метрик для результата проекта.',
                'Составил фичлист проекта.',
                'Составил и согласовал техническое задание на разработку.',
                'Провел согласование архитектуры с отделом информационной безопасности клиента.',
                'Разработанная система внедрена в контур клиента.',
                'Провел ретроспективу проекта с менеджером и аудит проекта по стандарту Essence.',
              ],
            },
            {
              name: 'Сервис с AI-агентом для управления рекламой на Wildberries',
              type: 'Внедрение AI, аналитика данных, маркетплейсы',
              tasks: [
                'Сформулировал измеримые цели проекта для бизнес-лидеров.',
                'Обработал результаты каст-дева с селлерами, провел анализ конкурентов.',
                'Собрал, формализовал и декомпозировал бизнес-требования до функциональных (с критериями приемки).',
                'Подобрал референсы UX/UI, на которых обосновалась концепция агента.',
                'Спроектировал AI-агента: карта сценариев, HLD, Sequence-диаграммы, разработал Structured Output.',
                'Спроектировал API, схему данных, интеграции с маркетплейсом.',
                'Создал базу знаний проекта, написал тест-кейсы, внедрил диаграмму Гантта.',
                'Скорректировал процессы менеджмента с меняющейся командой, эскалировал проблемы и добился рефлексии на проекте.',
                'Проводил встречи со стейкхолдерами (CEO, BizDev, PO, селлеры) и груминги для команды.',
              ],
            },
            {
              name: 'Пресейл для двух бизнес-юнитов (AI-обработка документов)',
              type: 'Продажи, документооборот, внедрение AI',
              tasks: [
                'За неделю провел предпроектное обследование и сбор требований со стейкхолдеров.',
                'Составил фичлисты с интеграциями и внедрением AI.',
                'Спроектировал процессы TO BE для трех отделений клиента.',
                'Провел оценку реализации с менеджерами и разработчиками, рассчитал экономический эффект.',
                'Презентовал техническую часть коммерческого предложения командам клиента.',
              ],
            },
            {
              name: 'Лаборатория применения AI в бизнесе - проверка гипотез для телеком-бизнеса',
              type: 'Телекоммуникации, закупки, нормативно-справочная информация, анализ бизнес-процессов, внедрение AI в бизнес',
              tasks: [
                'Провел обследование процессов бизнес-юнитов клиента для поиска возможности внедрения AI.',
                'Составил 3 фичлиста (свой для каждого юнита).',
                'Описал процессы AS IS и TO BE в BPMN.',
                'Спроектировал решения и презентовал их клиентам.',
                'Рассчитал и согласовал с клиентом экономическое обоснование проекта.',
                'Разработал документ для описания и презентации продуктовых гипотез клиенту.',
                'Провел анализ рынка для сегмента телекоммуникаций.',
                'Помог в организации нового типа проектов в компании.',
                'Провел обучение для коллег по результатам проекта.',
              ],
            },
            {
              name: 'Мобильное приложение для казахстанского банка',
              type: 'Mobile app, Entertainment',
              tasks: [
                'Спроектировал модули приложения (тесты и челленджи) на русском и казахском языках.',
                'Составил требования и схему данных.',
              ],
            },
          ],
        },
        {
          id: 'sibagro',
          company: 'Сибагро - ИТ',
          role: 'Администратор проектов / Менеджер',
          period: 'Октябрь 2024 - Май 2025',
          location: 'Томск',
          description:
            'Администрировал портфель из 5 проектов цифровой трансформации растениеводства: Создание Единого диспетчерского центра растениеводства, Внедрение BI-отчетности, Внедрение мониторинга СЗР, Внедрение мониторинга ГСМ, Внедрение комплексного агроскаутинга. Каждый проект масштабировался сразу на Новосибирск и Красноярск. Разработал и защитил дорожную карту перед топ-менеджментом холдинга.',
          projects: [
            {
              name: 'Единый диспетчерский центр растениеводства',
              type: 'Внедрение ИС, регламентация, цифровая отчетность',
              tasks: [
                'Собрал требования со стейкхолдеров разных уровней (от агрономов до зам. гендиректора).',
                'Сформулировал критерии успеха, разработал технико-экономическое обоснование проекта и дорожную карту.',
                'Внедрил инструменты: Lean Canvas, систему управления задачами, базу знаний, реестр решений, дашборды статусов.',
                'Моделировал бизнес-процессы AS IS и TO BE (BPMN), разрабатывал регламенты и должностные инструкции.',
                'Курировал системных аналитиков по описанию интеграций.',
                'Организовывал коммуникацию с подрядчиками в двух регионах (Новосибирск, Красноярск), организовал обучение для сотрудников.',
                'Успешно завершил проект в срок к началу активных полевых работ.',
              ],
            },
            {
              name: 'Разработка методики администрирования проектов',
              type: 'Методологии управления проектами, CMMI, стандартизация',
              tasks: [
                'Провел оценку уровня организации по CMMI (выявлен уровень 1: хаотичный).',
                'Разработал методическое пособие для администраторов проектов (роли, границы, инструменты).',
                'Описал взаимодействие с проектным офисом, формализовал процессы команд.',
                'Провел успешную апробацию практик на портфеле проектов трансформации.',
                'Провел онбординг нового администратора проекта по своим методическим материалам и за 3 дня передал администрирование портфеля из 5-и проектов.',
                'Передал наработки Директору по развитию "Сибагро - ИТ" перед уходом из компании.',
              ],
            },
            {
              name: 'Мониторинг средств защиты растений и ГСМ',
              type: 'IoT, телеметрия, регламентация',
              tasks: [
                'Разработал и контролировал планы проектов.',
                'Разработал схемы процессов TO BE в BPMN, контролировал создание инструкций.',
                'Координировал работу инженерной службы и подрядчиков.',
              ],
            },
            {
              name: 'Внедрение BI-отчетности и агроскаутинга',
              type: 'BI, интеграции 1С, координация закупок',
              tasks: [
                'Координировал интеграции системы подрядчика с 1С холдинга.',
                'Разработал требования к сбору данных, координировал закупки планшетов и БПЛА.',
              ],
            },
          ],
        },
        {
          id: 'sibagro_system_analyst',
          company: 'Сибагро - ИТ',
          role: 'Системный аналитик',
          period: 'Апрель 2024 - Октябрь 2024',
          location: 'Томск',
          description:
            'Обследование процессов финансового блока холдинга, разработка ТЗ на доработку 1С, участие в проекте роботизации.',
          projects: [
            {
              name: 'Финансовый блок холдинга и проект роботизации (RPA)',
              type: 'Системная аналитика, BPMN, 1С, RPA',
              tasks: [
                'Провел обследование бизнес-процессов отдела финансов и казначейства холдинга.',
                'Построил схемы процессов AS IS и TO BE в BPMN.',
                'Самостоятельно проанализировал самописные конфигурации 1С, изучил обмены данными между ними — на основании этого разработал техническое задание на доработку.',
                'Участвовал в проекте роботизации (RPA): провел анализ бизнес-процесса, разработал концепцию и представил ее ЛПР и подрядчикам.',
              ],
            },
          ],
        },
        {
          id: 'intek',
          company: 'Интэк',
          role: 'Проджект-менеджер',
          period: 'Декабрь 2023 - Январь 2024',
          location: 'Томск',
          description: 'Управление небольшими проектами по разработке БПЛА',
          projects: [
            {
              name: 'Организация закупок деталей для БПЛА и разработка ПО для управления БПЛА',
              type: 'Project Management, БПЛА, проведение закупок',
              tasks: [
                'Уточнил нефункциональные требования для разработки ПО, договорился на уменьшение объема работ за счет использования готового решения.',
                'Написал скрипты для автоматизации работы команды в YouGile: сквозная нумерация, подсчет план-факт отчетов, автоматическая простановка статусов.',
                'Составлял инвойсы и вел деловую переписку с поставщиками на английском языке.',
                'Вел реестр контактов и закупок.',
              ],
            },
          ],
        },
      ],
      skills: [
        {
          category: 'Системная аналитика',
          items: [
            'Сбор и формализация требований (User story, Use case)',
            'Моделирование предметной области',
            'SQL (запросы, триггеры, процедуры)',
            'Тест-кейсы (Given/When/Then)',
            'Python, C++ (Базово)',
            'Docker, Podman, Grafana, Jmeter',
            'Проектирование API (REST, Swagger)',
            'UML (Class, Sequence, Component), C4',
            'BPMN, Activity diagrams',
            'Figma (UI/UX wireframes)',
          ],
        },
        {
          category: 'Работа с нейросетями',
          items: [
            'Разработка требований к датасетам',
            'Пайплайны n8n',
            'Structured Output для LLM',
            'Создание скиллов (Gemini, Claude, Cursor)',
            'Принципы работы LLM',
            'Генерация прототипов',
          ],
        },
        {
          category: 'Управление проектами и процесссами, качество процессов',
          items: [
            'Scrum, Kanban, TDD, FDD, DDD',
            'OMG Essence, CMMI, Cynefin',
            'Дорожные карты, Гантта, RACI',
            'OKR, SMART, DoD, DoR',
            'MoSCoW, RICE',
            'Управление рисками',
            'Модель Ицхака Адизеса (PAEI)',
            'Расчет экономической эффективности',
          ],
        },
        {
          category: 'Soft Skills',
          items: [
            'Английский C1 (Advanced)',
            'Лидерство и Ownership',
            'Критическое мышление',
            'Управление ожиданиями',
            'Эскалация проблем',
            'Презентация и фасилитация',
            'Саморефлексия',
          ],
        },
      ],
      achievements: [
        {
          title: 'Стипендиат Правительства РФ и Президента РФ за достижения в науке и учёбе',
          year: '2022–2025',
        },
        {
          title: 'Победитель конкурса менеджеров на форуме «Шерегеш» (Росмолодёжь)',
          year: '2024',
        },
        {
          title: 'Победитель конкурсов ДКЭ «Project Manager IT»',
          year: '2022, 2023',
        },
      ],
      education: [
        {
          university: 'Томский государственный университет',
          degree: 'Магистратура | Управление рисками в программной инженерии',
          year: '2025 - 2027',
        },
        {
          university: 'Томский политехнический университет',
          degree: 'Бакалавриат | Информационные системы и технологии в бизнесе',
          year: '2021 - 2025',
          details:
            'Дипломная работа: «Разработка регламента и центра компетенций администрирования проектов для холдинга “Сибагро”»',
        },
      ],
    },
  },
  en: {
    translation: {
      ui: {
        openToOffers: 'Open to opportunities',
        remoteWork: 'Remote work',
        photoAlt: 'Resume photo',
        projectTasks: 'What I did on the project:',
        positionsTitle: 'Positions I fit',
        positionsCaption: 'Roles where I bring the most value',
        aboutTitle: 'About me',
        aboutCaption: 'A short take on how I work and what matters to me',
        tasksTitle: 'Tasks worth giving me',
        tasksCaption: 'Where I am strong — and the stack behind it',
        tasksStack: 'Tools and stack',
        expectationsTitle: 'What I expect from an employer',
        expectationsCaption: 'Conditions where I deliver my best',
        perksTitle: 'My perks',
        perksCaption: 'What you get with me — beyond the resume',
        perksProjects: 'Project portfolio',
        perksHuman: 'What I bring to a team',
        perksInterests: 'Professional interests',
        perksEducation: 'Education',
        perksAchievements: 'Achievements',
        footerCopyright: '© {year} Makar Cherezov. Portfolio website.',
        footerNote:
          'Designed to showcase extended experience that does not fit in a standard one-page resume.',
      },
      personalInfo: {
        name: 'Makar Cherezov',
        role: 'Business & Systems Analyst · IT Project Manager',
        location: 'Novosibirsk, Russia',
        about:
          'I have hands-on experience in problem analysis and AI-driven solution implementation. I am interested in how organizations work and how they can be improved. I study engineering, quality, and management standards. I implemented project management tools in an organization assessed at CMMI level 1 (initial, chaotic). I enjoy both learning and mentoring colleagues.',
        interests: [
          'Development methodologies (SEMAT Essence)',
          'Business process modeling',
          'AI-based systems design',
          'Standardization (ISO, GOST, CMMI, PMBoK)',
          'Productivity improvement with neural networks',
        ],
      },
      positions: [
        {
          title: 'Systems Analyst',
          note: 'Requirements, process models, API and data design.',
        },
        {
          title: 'Business Analyst',
          note: 'Discovery, TO-BE processes, economic justification of solutions.',
        },
        {
          title: 'IT Project Manager',
          note: 'Project portfolios, methodology, stakeholder communication.',
        },
        {
          title: 'AI Solutions Analyst',
          note: 'Bringing LLMs into business processes: hypotheses, scenarios, Structured Output.',
        },
      ],
      tasks: [
        {
          title: 'Understand the process',
          text: 'Run discovery, map AS-IS and TO-BE in BPMN, and find bottlenecks and improvement points.',
        },
        {
          title: 'Design the solution',
          text: 'Collect and decompose requirements, design API, data schema, and integrations, write test cases.',
        },
        {
          title: 'Bring AI into business',
          text: 'Validate hypotheses, design an AI agent and Structured Output, calculate business impact.',
        },
        {
          title: 'Bring order',
          text: 'Set up methodology, knowledge base, decision register, and working standards — even from scratch in a chaotic environment.',
        },
      ],
      expectations: [
        {
          title: 'Meaningful work and growth',
          text: 'Complex tasks at the intersection of analysis and AI with visible impact on product and business.',
        },
        {
          title: 'Mature processes — or a mandate to build them',
          text: 'Either established processes, or the freedom and trust to set them up myself.',
        },
        {
          title: 'A learning culture',
          text: 'Knowledge sharing, mentorship, retrospectives, and room to make mistakes.',
        },
        {
          title: 'A friendly team',
          text: 'A healthy atmosphere, open communication, and mutual respect.',
        },
        {
          title: 'Flexibility',
          text: 'Remote or hybrid work and a focus on outcomes rather than hours in the office.',
        },
      ],
      softPerks: [
        {
          title: 'Initiative',
          text: "I don't wait for tasks to be assigned: I spot bottlenecks and propose improvements myself.",
        },
        {
          title: 'Friendly atmosphere',
          text: 'I keep communication healthy, help colleagues, and share knowledge.',
        },
        {
          title: 'Mentorship',
          text: 'I enjoy teaching: I run onboardings and pass my practices to the team.',
        },
        {
          title: 'Energy at team events',
          text: 'Active in team events and keeping team spirit alive beyond the tasks.',
        },
      ],
      experience: [
        {
          id: 'red_mad_robot',
          company: 'red_mad_robot',
          role: 'Business & Systems Analyst',
          period: 'May 2025 - Present',
          location: 'Moscow (Remote)',
          description:
            'Worked in startup-like innovation labs and product teams. Designed systems with AI integration.',
          projects: [
            {
              name: 'AI Agent service for Wildberries ad campaign management',
              type: 'AI implementation, data analytics, marketplaces',
              tasks: [
                'Defined measurable project outcomes for business leadership.',
                'Processed customer development interviews with sellers and performed competitive analysis.',
                'Collected, formalized, and decomposed business requirements into functional ones with acceptance criteria.',
                'Selected UX/UI references that shaped the agent concept.',
                'Designed the AI agent: scenario map, HLD, sequence diagrams, and structured output approach.',
                'Designed API, data model, and marketplace integrations.',
                'Built a project knowledge base, wrote test cases, and introduced a Gantt timeline.',
                'Adapted management processes to a changing team, escalated blockers, and facilitated project retrospection.',
                'Ran stakeholder meetings (CEO, BizDev, PO, sellers) and team grooming sessions.',
              ],
            },
            {
              name: 'Presale for two business units (AI document processing)',
              type: 'Sales, document flow, AI implementation',
              tasks: [
                'Completed discovery and requirements collection from stakeholders within one week.',
                'Prepared feature lists including integrations and AI capabilities.',
                'Designed TO-BE processes for three client divisions.',
                'Conducted implementation estimation with managers and engineers and calculated business impact.',
                'Presented the technical section of the commercial proposal to client teams.',
              ],
            },
            {
              name: 'AI business lab - hypothesis validation for telecom business',
              type: 'Telecom, procurement, master data, process analysis, AI adoption',
              tasks: [
                'Conducted process discovery across client business units to find viable AI use cases.',
                'Prepared three feature lists, one for each unit.',
                'Documented AS-IS and TO-BE processes in BPMN.',
                'Designed solution options and presented them to clients.',
                'Calculated and aligned project economic justification with client stakeholders.',
                'Created a reusable document for describing and pitching product hypotheses.',
                'Performed market analysis for the telecom segment.',
                'Contributed to launching a new project format in the company.',
                'Delivered internal knowledge sharing sessions based on project outcomes.',
              ],
            },
            {
              name: 'Mobile app for a Kazakh bank',
              type: 'Mobile app, Entertainment',
              tasks: [
                'Designed app modules (tests and challenges) in Russian and Kazakh.',
                'Prepared requirements and data schema.',
              ],
            },
          ],
        },
        {
          id: 'sibagro',
          company: 'Sibagro - IT',
          role: 'Project Administrator',
          period: 'Oct 2024 - May 2025',
          location: 'Tomsk',
          description:
            'Administered a portfolio of 5 digital transformation projects in crop farming: a unified dispatch center, BI reporting, crop protection product monitoring, fuel monitoring, and integrated agri-scouting. Each project was scaled simultaneously to Novosibirsk and Krasnoyarsk. Developed and defended the roadmap before holding top management.',
          projects: [
            {
              name: 'Unified Dispatch Center for Crop Farming',
              type: 'Information systems implementation, regulations, digital reporting',
              tasks: [
                'Collected requirements from stakeholders at multiple levels, from agronomists to deputy CEO.',
                'Defined success criteria, prepared techno-economic justification, and built a roadmap.',
                'Introduced Lean Canvas, task management system, knowledge base, decision register, and status dashboards.',
                'Modeled AS-IS and TO-BE business processes in BPMN and prepared regulations and job instructions.',
                'Coordinated systems analysts on integration documentation.',
                'Organized communication with contractors across two regions and arranged employee training.',
                'Delivered the project on time before active field operations started.',
              ],
            },
            {
              name: 'Project Administration Methodology Development',
              type: 'Project management methodologies, CMMI, standardization',
              tasks: [
                'Assessed organizational maturity by CMMI and identified level 1 (chaotic).',
                'Created a practical guideline for project administrators (roles, boundaries, tools).',
                'Formalized interaction with PMO and team processes.',
                'Successfully piloted practices on a transformation project portfolio.',
                'Onboarded a new project administrator and transferred management of a 5-project portfolio in three days.',
                'Transferred developed practices to the Director of Development before leaving the company.',
              ],
            },
            {
              name: 'Crop protection and fuel monitoring',
              type: 'IoT, telemetry, process regulation',
              tasks: [
                'Planned and controlled project schedules.',
                'Designed TO-BE process schemes in BPMN and controlled instruction development.',
                'Coordinated engineering team and contractors.',
              ],
            },
            {
              name: 'BI reporting and agri-scouting rollout',
              type: 'BI, 1C integrations, procurement coordination',
              tasks: [
                'Coordinated contractor system integrations with holding-wide 1C.',
                'Defined data collection requirements and coordinated procurement of tablets and UAVs.',
              ],
            },
          ],
        },
        {
          id: 'sibagro_system_analyst',
          company: 'Sibagro - IT',
          role: 'Systems Analyst',
          period: 'Apr 2024 - Oct 2024',
          location: 'Tomsk',
          description:
            'Analyzed finance division processes in the holding, developed technical specification for 1C enhancements, and participated in an RPA initiative.',
          projects: [
            {
              name: 'Holding finance processes and RPA initiative',
              type: 'Systems analysis, BPMN, 1C, RPA',
              tasks: [
                'Conducted business process discovery for the holding finance and treasury department.',
                'Built AS-IS and TO-BE process models in BPMN.',
                'Independently analyzed custom 1C configurations, studied data exchanges between them, and prepared a technical specification for enhancements based on findings.',
                'Participated in an RPA project: analyzed the business process, developed the concept, and presented it to decision makers and contractors.',
              ],
            },
          ],
        },
        {
          id: 'intek',
          company: 'Intek',
          role: 'Project Manager',
          period: 'Dec 2023 - Jan 2024',
          location: 'Tomsk',
          description: 'Managed small UAV development projects.',
          projects: [
            {
              name: 'UAV parts procurement and UAV control software development',
              type: 'Project Management, UAV, procurement',
              tasks: [
                'Clarified non-functional requirements for software development and reduced scope by negotiating reuse of existing solutions.',
                'Wrote automation scripts for team workflows in YouGile: continuous numbering, plan-vs-actual reports, and automatic status updates.',
                'Prepared invoices and handled supplier correspondence in English.',
                'Maintained contact and procurement registry.',
              ],
            },
          ],
        },
      ],
      skills: [
        {
          category: 'Systems Analysis',
          items: [
            'Requirements elicitation and formalization (User story, Use case)',
            'Domain modeling',
            'SQL (queries, triggers, procedures)',
            'Test cases (Given/When/Then)',
            'Python, C++ (basic)',
            'Docker, Podman, Grafana, JMeter',
            'API design (REST, Swagger)',
            'UML (Class, Sequence, Component), C4',
            'BPMN, Activity diagrams',
            'Figma (UI/UX wireframes)',
          ],
        },
        {
          category: 'Working with AI models',
          items: [
            'Dataset requirement design',
            'n8n pipelines',
            'Structured Output for LLMs',
            'Building skills (Gemini, Claude, Cursor)',
            'LLM working principles',
            'Prototype generation',
          ],
        },
        {
          category: 'Project and process management, process quality',
          items: [
            'Scrum, Kanban, TDD, FDD, DDD',
            'OMG Essence, CMMI, Cynefin',
            'Roadmaps, Gantt, RACI',
            'OKR, SMART, DoD, DoR',
            'MoSCoW, RICE',
            'Risk management',
            'Ichak Adizes model (PAEI)',
            'Economic efficiency calculation',
          ],
        },
        {
          category: 'Soft Skills',
          items: [
            'English C1 (Advanced)',
            'Leadership and ownership',
            'Critical thinking',
            'Expectation management',
            'Issue escalation',
            'Presentation and facilitation',
            'Self-reflection',
          ],
        },
      ],
      achievements: [
        {
          title: 'Russian Government and Presidential Scholarship for academic and scientific achievements',
          year: '2022–2025',
        },
        {
          title: 'Winner of the managers competition at the Sheregesh forum (Rosmolodezh)',
          year: '2024',
        },
        {
          title: 'Winner of the DKE "Project Manager IT" competitions',
          year: '2022, 2023',
        },
      ],
      education: [
        {
          university: 'Tomsk State University',
          degree: "Master's | Risk Management in Software Engineering",
          year: '2025 - 2027',
        },
        {
          university: 'Tomsk Polytechnic University',
          degree: "Bachelor's | Information Systems and Technologies in Business",
          year: '2021 - 2025',
          details:
            'Thesis: "Developing project administration regulations and a competence center for the Sibagro holding."',
        },
      ],
    },
  },
};

// EN toggle is temporarily hidden — pin the site to Russian until a dedicated
// English version is ready.
const initialLanguage = 'ru';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
