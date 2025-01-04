const days = [
    {
        name: "Понедельник",
        schedule: [
            { subject: "10а", time: "09:00 - 09:45" },
            { subject: "10б", time: "10:00 - 10:45" },
            { subject: "10в", time: "11:00 - 11:45" },
            { subject: "10г", time: "09:00 - 09:45" },
            { subject: "10д", time: "10:00 - 10:45" },
            { subject: "10е", time: "11:00 - 11:45" },
        ],
    },
    {
        name: "Вторник",
        schedule: [
            { subject: "История", time: "09:00 - 09:45", homework: "Прочитать статью" },
            { subject: "Химия", time: "10:00 - 10:45", homework: "Решить задачу" },
            { subject: "Английский язык", time: "11:00 - 11:45", homework: "Выучить слова" },
        ],
    },
    // Добавьте остальные дни
];

let currentDayIndex = 0;

const dayTitle = document.getElementById("day-title");
const scheduleContainer = document.getElementById("schedule");

function renderSchedule() {
    const day = days[currentDayIndex];
    dayTitle.textContent = day.name;

    scheduleContainer.innerHTML = ""; // Очистить расписание
    day.schedule.forEach((item) => {
        const scheduleItem = document.createElement("div");
        scheduleItem.classList.add("schedule-item");
        scheduleItem.innerHTML = `
            <h2>${item.subject}</h2>
            <p>${item.time}</p>
        `;
        
        // Добавляем обработчик для открытия модального окна
        scheduleItem.addEventListener("click", () => openModal(item.subject, item.time, item.homework));
        
        scheduleContainer.appendChild(scheduleItem);
    });
}

// Модальное окно
const modal = document.getElementById("modal");
const modalSubject = document.getElementById("modal-subject");
const modalTime = document.getElementById("modal-time");
const modalHomework = document.getElementById("modal-homework");
const closeModalButton = document.getElementById("close-modal");

function openModal(subject, time, homework) {
    modalSubject.textContent = subject;
    modalTime.textContent = time;
    modalHomework.textContent = homework;
    
    modal.classList.add("open"); // Открыть модальное окно
}

closeModalButton.addEventListener("click", () => {
    modal.classList.remove("open"); // Закрыть модальное окно
});

// Закрытие при клике вне модального окна
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("open");
    }
});

// Переключение между днями
document.querySelector(".left-arrow").addEventListener("click", () => {
    currentDayIndex = (currentDayIndex - 1 + days.length) % days.length;
    renderSchedule();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
    currentDayIndex = (currentDayIndex + 1) % days.length;
    renderSchedule();
});

// Инициализация
renderSchedule();
