const toggle = document.getElementById("themeSwitch");
const body = document.body;

// Load theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  if (toggle) toggle.checked = true;
}

// Switch theme
if (toggle) {
  toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });
}

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// =====================
// КАЛЕНДАРЬ СТАРТОВ
// =====================

const calendarData = [
  {
    date: "12 марта 2026",
    title: "Чемпионат Липецкой области",
    place: "Манеж, г. Липецк",
    age: "Юниоры, взрослые"
  },
  {
    date: "25 марта 2026",
    title: "Юношеское первенство",
    place: "Стадион «Металлург»",
    age: "2009–2012 г.р."
  },
  {
    date: "5 апреля 2026",
    title: "Открытый городской турнир",
    place: "Легкоатлетический манеж",
    age: "Все категории"
  },
  {
    date: "18 апреля 2026",
    title: "Первенство области среди школьников",
    place: "г. Елец",
    age: "2008–2011 г.р."
  }
];

const calendarContainer = document.getElementById("calendar");
if (calendarContainer) {
  calendarData.forEach(event => {
    const card = document.createElement("div");
    card.className = "calendar-card fade-in";
    card.innerHTML = `
      <div class="calendar-date">${event.date}</div>
      <h3>${event.title}</h3>
      <p><strong>Место:</strong> ${event.place}</p>
      <p><strong>Категория:</strong> ${event.age}</p>
    `;
    calendarContainer.appendChild(card);
  });
}

// =====================
// ПРОТОКОЛЫ
// =====================

const protocolsData = [
  {
    title: "Чемпионат Липецкой области",
    date: "12.03.2026",
    file: "protocols/championship-2026.pdf"
  },
  {
    title: "Юношеское первенство",
    date: "25.03.2026",
    file: "protocols/youth-2026.pdf"
  },
  {
    title: "Городской турнир",
    date: "05.04.2026",
    file: "protocols/city-open-2026.pdf"
  }
];

const protocolsContainer = document.getElementById("protocols");
if (protocolsContainer) {
  protocolsData.forEach(p => {
    const row = document.createElement("div");
    row.className = "protocol-card fade-in";
    row.innerHTML = `
      <div>
        <strong>${p.title}</strong><br>
        <small>${p.date}</small>
      </div>
      <a href="${p.file}" target="_blank">Скачать PDF</a>
    `;
    protocolsContainer.appendChild(row);
  });
}