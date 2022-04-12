const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: [
            "Paris", "Lyon", "Marseille", "Montpellier"
        ],

        datasets: [{
            data: [240,140,130,170],
            backgroundColor: [
                "crimson",
                "lightgreen",
                "lightblue",
                "violet"
            ]
        }]
    },

    options: {
        scales:{
            y: {
                suggestedMax: 500,
                ticks: {
                    font: {
                        size: 18
                    }
                }
            },

            x: {
                ticks: {
                    font: {
                        size: 18
                    }
                }
            }
        }
    }
})



// const pieCanvas = document.getElementById("pieCanvas");
// const pieChart = new chart(pieChart, {
//     type: 'pie',
//     data: {
//         labels: [
//             'Marketing',
//             'Developpemnt',
//             'Security'
//         ],

//         datasets: [{
//             data: [300, 150, 100],
//             backgroundColor: [
//                 'rgb (255, 99, 132)',
//                 'rgb (54, 162, 235)',
//                 'rgb (255, 205, 86)'
//             ],

//             hoverOffset: 4
//         }]
//     }
// })