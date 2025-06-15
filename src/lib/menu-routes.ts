export type MenuRoute = {
  position: number,
  text: string,
  href: string,
  imgClass: string,
  desc: string,
};

const menuRoutes = [
  {
    position: 1,
    text: "Вакансии и стажировки",
    href: "vacancies-and-internships",
    imgClass: "briefcase",
    desc: "Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ",
  },
  {
    position: 3,
    text: "Тестовые задания",
    href: "",
    imgClass: "code",
    desc: "Реальные задания с отборов на стажировки и junior-позиции — для практики и портфолио",
  },
  {
    position: 5,
    text: "IT-мероприятия",
    href: "",
    imgClass: "calendar-week",
    desc: "Конференции, хакатоны, метапы и курсы — чтобы расширить кругозор, найти стажировку и завести связи",
  },
  {
    position: 7,
    text: "Контакты рекрутеров",
    href: "",
    imgClass: "message",
    desc: "Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование",
  },
  {
    position: null,
    text: "Резюме соискателей",
    href: "",
    imgClass: "frame",
  },
  {
    position: 2,
    text: "Необходимые навыки",
    href: "",
    imgClass: "stack",
    desc: "Популярные навыки и ключевые слова из вакансий — можно использовать для улучшения резюме",
  },
  {
    position: 4,
    text: "Собеседования",
    href: "questions",
    imgClass: "microphone",
    desc: "Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности — с пояснениями и примерами ответов",
  },
  {
    position: 6,
    text: "Пет-проекты",
    href: "",
    imgClass: "code-asterisk",
    desc: "Проекты для портфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт",
  },
  {
    position: 8,
    text: "ИИ инструменты",
    href: "",
    imgClass: "sparkles",
    desc: "Подборка AI-тулзов для автоматизации, разработки и поиска работы — с описаниями и рейтингом полезности",
  },
]

export default menuRoutes;