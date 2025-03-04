const ctx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1 янв', '2 янв', '3 янв', '4 янв', '5 янв', '6 янв', '7 янв'],
        datasets: [{
            label: 'Аэробика',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Йога',
            data: [55, 49, 70, 71, 46, 45, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Медитация',
            data: [45, 39, 60, 61, 36, 35, 20],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
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

function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const weight = document.getElementById('weight').value;
    const bmi = weight / (height * height);
    const bmiValue = document.getElementById('bmi-value');
    const bmiStatus = document.getElementById('bmi-status');

    bmiValue.textContent = bmi.toFixed(1);

    if (bmi < 18.5) {
        bmiStatus.textContent = 'Недостаточный вес';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiStatus.textContent = 'Вы здоровы';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiStatus.textContent = 'Избыточный вес';
    } else {
        bmiStatus.textContent = 'Ожирение';
    }
}
