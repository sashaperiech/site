let currentEvent = null;

function editEvent(eventElement) {
    currentEvent = eventElement;
    const type = eventElement.querySelector('p:nth-child(2)').textContent;
    const duration = eventElement.querySelector('p:nth-child(1)').textContent.match(/\((.*?)\)/)[1];
    const intensity = eventElement.getAttribute('data-intensity') || '';

    document.getElementById('event-type').value = type;
    document.getElementById('event-duration').value = duration;
    document.getElementById('event-intensity').value = intensity;

    document.getElementById('edit-modal').style.display = 'block';
}

function saveEvent() {
    if (currentEvent) {
        const type = document.getElementById('event-type').value;
        const duration = document.getElementById('event-duration').value;
        const intensity = document.getElementById('event-intensity').value;

        currentEvent.querySelector('p:nth-child(2)').textContent = type;
        const timeRange = currentEvent.querySelector('p:nth-child(1)').textContent.split('(')[0].trim();
        currentEvent.querySelector('p:nth-child(1)').textContent = `${timeRange} (${duration} ч)`;
        currentEvent.setAttribute('data-intensity', intensity);

        document.getElementById('edit-modal').style.display = 'none';
        currentEvent = null;
    }
}

function cancelEdit() {
    document.getElementById('edit-modal').style.display = 'none';
    currentEvent = null;
}

function changeDate(direction) {
    // Ваш код для изменения даты
}

function applyFilters() {
    // Ваш код для применения фильтров
}