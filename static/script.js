const days = [
    {
        name: "Понедельник",
        schedule: [
            { subject: "Математика", time: "09:00 - 09:45" },
            { subject: "Русский язык", time: "10:00 - 10:45" },
            { subject: "Физика", time: "11:00 - 11:45" },
            { subject: "Математика", time: "09:00 - 09:45" },
            { subject: "Русский язык", time: "10:00 - 10:45" },
            { subject: "Физика", time: "11:00 - 11:45" },
        ],
    },
    {
        name: "Вторник",
        schedule: [
            { subject: "История", time: "09:00 - 09:45" },
            { subject: "Химия", time: "10:00 - 10:45" },
            { subject: "Английский язык", time: "11:00 - 11:45" },
        ],
    },
    {
        name: "Среда",
        schedule: [
            { subject: "Биология", time: "09:00 - 09:45" },
            { subject: "Математика", time: "10:00 - 10:45" },
            { subject: "Литература", time: "11:00 - 11:45" },
        ],
    },
    {
        name: "Четверг",
        schedule: [
            { subject: "Информатика", time: "09:00 - 09:45" },
            { subject: "География", time: "10:00 - 10:45" },
            { subject: "Физкультура", time: "11:00 - 11:45" },
        ],
    },
    {
        name: "Пятница",
        schedule: [
            { subject: "Химия", time: "09:00 - 09:45" },
            { subject: "Русский язык", time: "10:00 - 10:45" },
            { subject: "Физика", time: "11:00 - 11:45" },
        ],
    },
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
        scheduleContainer.appendChild(scheduleItem);
    });
}

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
