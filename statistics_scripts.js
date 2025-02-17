let currentChart;

function showChart(type) {
    const ctx = document.getElementById('healthMonitoringChart').getContext('2d');

    if (currentChart) {
        currentChart.destroy();
    }

    document.querySelectorAll('.monitoring-buttons button').forEach(button => {
        button.classList.remove('active');
        if (button.innerText.trim() === type.charAt(0).toUpperCase() + type.slice(1)) {
            button.classList.add('active');
        }
    });

    let data, label, borderColor;
    switch (type) {
        case 'stress':
            data = [2, 3, 2, 5, 3];
            label = 'Уровень стресса';
            borderColor = 'rgba(54, 162, 235, 1)';
            break;
        case 'pulse':
            data = [70, 72, 68, 75, 71];
            label = 'Пульс';
            borderColor = 'rgba(255, 99, 132, 1)';
            break;
        case 'temperature':
            data = [36.5, 36.7, 36.6, 36.8, 36.7];
            label = 'Температура';
            borderColor = 'rgba(255, 206, 86, 1)';
            break;
        case 'calories':
            data = [200, 220, 190, 230, 210];
            label = 'Сожжённые калории';
            borderColor = 'rgba(75, 192, 192, 1)';
            break;
        default:
            data = [];
            label = '';
            borderColor = '';
    }

    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь'],
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

showChart('stress');