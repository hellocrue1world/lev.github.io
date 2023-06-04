// createChart.js

function createChart(ctx, target_index, priceHistory1, priceHistory2, label1, label2) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: target_index}, (_, i) => i),
            datasets: [
                {
                    label: label1,
                    data: priceHistory1,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: label2,
                    data: priceHistory2,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }
            ]
        },
        options: {
            animation: {
                duration: 0
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



export { createChart }; // 다른 파일에서 이 함수를 import해서 사용할 수 있게 export 합니다.
