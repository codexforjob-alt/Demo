import { BookingDemo } from "./BookingDemo";

const services = [
  {
    number: "01",
    overline: "СОХРАНЕНИЕ",
    title: "Лечение зубов",
  },
  {
    number: "02",
    overline: "ГИГИЕНА",
    title: "Профессиональная чистка",
  },
  {
    number: "03",
    overline: "ВОССТАНОВЛЕНИЕ",
    title: "Имплантация",
  },
  {
    number: "04",
    overline: "ОРТОДОНТИЯ",
    title: "Брекеты",
  },
  {
    number: "05",
    overline: "ЭСТЕТИКА",
    title: "Виниры",
  },
];

function ToothMark() {
  return (
    <svg
      aria-hidden="true"
      className="tooth-mark"
      fill="none"
      viewBox="0 0 32 38"
    >
      <path
        d="M16 5.2C10.8 1.6 4.4 4.3 4.4 11.2c0 6.5 3.1 8.6 4 14.8.7 5 2.4 8.1 4.3 8.1 2.1 0 1.5-7.1 3.3-7.1s1.2 7.1 3.3 7.1c1.9 0 3.6-3.1 4.3-8.1.9-6.2 4-8.3 4-14.8 0-6.9-6.4-9.6-11.6-6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11 7.2c2.1 1.4 7.9 1.4 10 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.1"
      />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <span className="visual-note visual-note--top">ЭМАЛЬ / ФОРМА</span>
      <span className="visual-note visual-note--side">CONCEPT 01</span>
      <span className="visual-note visual-note--bottom">KASKELEN</span>

      <svg className="hero-art" fill="none" viewBox="0 0 640 680">
        <circle cx="320" cy="323" r="244" stroke="currentColor" />
        <circle cx="320" cy="323" r="204" stroke="currentColor" />
        <path
          className="hero-art__orbit"
          d="M97 227A244 244 0 0 1 466 111"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          className="hero-art__orbit"
          d="M543 419A244 244 0 0 1 174 535"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          className="hero-art__tooth"
          d="M315 170c-43-34-114-4-114 74 0 76 35 104 46 176 9 57 31 93 55 93 28 0 17-91 38-91s10 91 38 91c24 0 46-36 55-93 11-72 46-100 46-176 0-78-71-108-114-74-16 12-34 12-50 0Z"
          fill="currentColor"
        />
        <path
          className="hero-art__line"
          d="M257 214c35 24 91 24 126 0"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          className="hero-art__line hero-art__line--fine"
          d="M279 478c12-48 31-87 61-119 30 32 49 71 61 119"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          className="hero-art__smile"
          d="M176 568c86 61 202 61 288 0"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <circle className="hero-art__dot" cx="112" cy="360" r="5" />
        <circle className="hero-art__dot" cx="528" cy="286" r="5" />
      </svg>

      <div className="visual-caption">
        <span>EMIL STOM</span>
        <span>СЕМЕЙНАЯ СТОМАТОЛОГИЯ</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="demo-banner" role="note">
        <span>ДЕМО-КОНЦЕПЦИЯ</span>
        <span aria-hidden="true">◆</span>
        <span>НЕОФИЦИАЛЬНЫЙ САЙТ</span>
      </div>

      <header className="site-header">
        <div className="shell nav-shell">
          <a className="wordmark" href="#top" aria-label="Emil Stom — наверх">
            <ToothMark />
            <span>
              EMIL STOM
              <small>концепт сайта</small>
            </span>
          </a>

          <nav aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#route">Как это работает</a>
          </nav>

          <a className="nav-action" href="#booking">
            Макет записи
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">EMIL STOM / КАСКЕЛЕН</p>
            <h1 id="hero-title">
              Стоматология
              <br />
              для <em>всей семьи.</em>
            </h1>
            <div className="hero-copy__lower">
              <p>
                Лечение, профессиональная чистка, имплантация, брекеты и
                виниры — в спокойной, понятной подаче.
              </p>
              <a className="button button--primary" href="#booking">
                Посмотреть макет записи
                <span aria-hidden="true">↘</span>
              </a>
            </div>

            <dl className="hero-meta">
              <div>
                <dt>ФОРМАТ</dt>
                <dd>демо-концепция</dd>
              </div>
              <div>
                <dt>ИСТОЧНИК</dt>
                <dd>публичный профиль</dd>
              </div>
              <div>
                <dt>КОНТАКТЫ</dt>
                <dd>не подключены</dd>
              </div>
            </dl>
          </div>

          <HeroVisual />
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-intro">
              <p className="section-marker">§ 01 / НАПРАВЛЕНИЯ</p>
              <h2 id="services-title">
                То, что уже есть
                <br />
                <em>в профиле клиники.</em>
              </h2>
              <p className="section-note">
                Без цен, обещаний и неподтверждённых медицинских заявлений.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card__top">
                    <span>{service.number}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div>
                    <p>{service.overline}</p>
                    <h3>{service.title}</h3>
                  </div>
                </article>
              ))}
            </div>

            <p className="source-note">
              Перечень собран из публичного описания @emil_stom_kz. Методы,
              показания и условия приёма уточняются непосредственно в клинике.
            </p>
          </div>
        </section>

        <section className="route-section" id="route" aria-labelledby="route-title">
          <div className="route-orbit" aria-hidden="true" />
          <div className="shell route-grid">
            <div className="route-copy">
              <p className="section-marker section-marker--light">
                § 02 / СЦЕНАРИЙ САЙТА
              </p>
              <h2 id="route-title">
                Вместо обещаний —
                <br />
                <em>ясный следующий шаг.</em>
              </h2>
              <p>
                Концепт помогает человеку выбрать знакомое направление и понять,
                что произойдёт дальше. Реальная связь появится только в рабочей
                версии сайта.
              </p>
            </div>

            <ol className="route-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Выберите задачу</h3>
                  <p>Направления из профиля — без сложной терминологии.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Укажите удобное время</h3>
                  <p>В демо виден выбор периода, но запрос не отправляется.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Подтвердите контакт</h3>
                  <p>В полной версии клиника подключит свой канал связи.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="booking-section" id="booking" aria-labelledby="booking-title">
          <div className="shell booking-layout">
            <div className="booking-copy">
              <p className="section-marker">§ 03 / ДЕМО-ЗАПИСЬ</p>
              <h2 id="booking-title">
                Два выбора.
                <br />
                <em>Никакой отправки.</em>
              </h2>
              <p>
                Без имени, телефона и личных данных. Этот блок показывает только
                будущую механику записи.
              </p>
              <div className="booking-safety">
                <span aria-hidden="true">●</span>
                <p>
                  Демо-режим активен
                  <small>Данные не сохраняются и не передаются.</small>
                </p>
              </div>
            </div>

            <BookingDemo />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <div className="footer-mark">
            <ToothMark />
            <span>EMIL STOM</span>
          </div>
          <p>Каскелен · визуальная концепция для @emil_stom_kz</p>
        </div>

        <div className="shell footer-disclaimer">
          <p>
            ЭТО НЕ ОФИЦИАЛЬНЫЙ САЙТ КЛИНИКИ. ФОРМЫ, ЗАПИСЬ, КОНТАКТЫ И
            ИНТЕГРАЦИИ НАМЕРЕННО НЕ ПОДКЛЮЧЕНЫ.
          </p>
          <span>DEMO / 2026</span>
        </div>
      </footer>
    </>
  );
}
