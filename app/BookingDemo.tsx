"use client";

import { FormEvent, useState } from "react";

const services = ["Лечение", "Чистка", "Имплантация", "Брекеты"];
const periods = ["Утро", "День", "Вечер"];

export function BookingDemo() {
  const [service, setService] = useState(services[0]);
  const [period, setPeriod] = useState(periods[1]);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      `Демо: запрос «${service} / ${period.toLowerCase()}» не отправлен. В рабочей версии здесь подключается канал записи клиники.`,
    );
  }

  return (
    <form className="booking-card" onSubmit={handleSubmit}>
      <div className="booking-card__head">
        <p className="micro-label">ИНТЕРАКТИВНЫЙ МАКЕТ</p>
        <p className="booking-card__step">01 / 02</p>
      </div>

      <fieldset className="booking-fieldset">
        <legend>Что вас интересует?</legend>
        <div className="choice-grid choice-grid--services">
          {services.map((item) => (
            <button
              className="choice-button"
              aria-pressed={service === item}
              key={item}
              onClick={() => {
                setService(item);
                setNotice("");
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="booking-fieldset">
        <legend>Когда удобнее связаться?</legend>
        <div className="choice-grid choice-grid--periods">
          {periods.map((item) => (
            <button
              className="choice-button"
              aria-pressed={period === item}
              key={item}
              onClick={() => {
                setPeriod(item);
                setNotice("");
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="booking-card__footer">
        <p>Свободные окна и контакты в этой версии не проверяются.</p>
        <button className="button button--accent" type="submit">
          Показать результат
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div
        aria-live="polite"
        className={`demo-notice${notice ? " demo-notice--visible" : ""}`}
        role="status"
      >
        <span className="demo-notice__mark" aria-hidden="true">
          i
        </span>
        <span>{notice || "Демо-запрос не отправляет данные."}</span>
      </div>
    </form>
  );
}
