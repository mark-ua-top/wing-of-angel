function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' });
    const time = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById("currentTime").innerText = `Поточний час: ${time}`;
}

// Функція для побудови календаря
function generateCalendar() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    document.getElementById("currentMonth").innerText = `${firstDay.toLocaleString('uk-UA', { month: 'long' })} ${year}`;

    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ''; // очищаємо попередній календар

    // Заповнюємо календар днями
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        if (i === now.getDate()) {
            dayElement.classList.add("today");
        }
        dayElement.innerText = i;
        calendar.appendChild(dayElement);
    }
}

// Оновлення календаря і часу кожної секунди
setInterval(() => {
    generateCalendar();
    updateTime();
}, 1000);

// Спочатку генеруємо календар і час
generateCalendar();
updateTime();