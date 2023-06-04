// createChart.js
/*
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
*/


function createChart(ctx, target_index, priceHistory1, priceHistory2, label1, label2) {
    const isMobile = window.innerWidth <= 768; // 768px 이하면 모바일로 간주

    const chartSize = isMobile ? { // 모바일인 경우와 아닌 경우에 따라 차트 크기를 설정
        height: window.innerHeight / 2, // 예: 모바일에서 차트의 높이를 창 높이의 반으로 설정
        width: window.innerWidth // 창의 너비에 맞게 차트 너비를 설정
    } : {
        // 원하는 PC 해상도 설정을 여기에 작성하세요.
    };

    ctx.canvas.height = chartSize.height;
    ctx.canvas.width = chartSize.width;

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
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
export { createChart }; // 다른 파일에서 이 함수를 import해서 사용할 수 있게 export 합니다.
