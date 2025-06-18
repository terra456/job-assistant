export type MenuRoute = {
  position: number,
  text: string,
  href: string,
  imgClass: string,
  desc: string,
};

const menuRoutes = [
  {
    text: "Вакансии / Cтажировки",
    href: "vacancies-and-internships",
    imgClass: "briefcase",
    desc: "Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ",
  },
  {
    text: "Необходимые навыки",
    href: "",
    imgClass: "stack",
    desc: "Популярные навыки и ключевые слова из вакансий — можно использовать для улучшения резюме",
  },
  {
    position: 3,
    text: "Тестовые задания",
    href: "",
    imgClass: "code",
    desc: "Реальные задания с отборов на стажировки и junior-позиции — для практики и портфолио",
  },
  {
    text: "Собеседования",
    href: "questions",
    imgClass: "microphone",
    desc: "Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности — с пояснениями и примерами ответов",
  },
  {
    text: "IT-мероприятия",
    href: "",
    imgClass: "calendar-week",
    desc: "Конференции, хакатоны, метапы и курсы — чтобы расширить кругозор, найти стажировку и завести связи",
  },
  {
    text: "Пет-проекты",
    href: "",
    imgClass: "code-asterisk",
    desc: "Проекты для портфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт",
  },
  {
    position: 7,
    text: "Контакты рекрутеров",
    href: "",
    imgClass: "message",
    desc: "Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование",
  },
  {
    text: "ИИ инструменты",
    href: "",
    imgClass: "sparkles",
    desc: "Подборка AI-тулзов для автоматизации, разработки и поиска работы — с описаниями и рейтингом полезности",
  },
  {
    text: "Резюме соискателей",
    href: "",
    imgClass: "frame",
    desc: "База резюме соискателей. Свяжитесь с понравившемся кандидатами напрямую"
  },
]

export default menuRoutes;