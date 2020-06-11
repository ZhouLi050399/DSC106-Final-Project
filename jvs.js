function init() {
    Highcharts.chart('barchar', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Champion', 'MVP', 'FMVP', 'Fisrt Team', 'First Defense Team', 'Scoring Leader'],
            title: {
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Counts',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [3, 4, 3, 12, 5, 1],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [6, 5, 6, 10, 10, 10],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('Po', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Points Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [20.9, 27.2, 31.4, 27.3, 30, 28.4, 29.7, 25.3, 25.3, 26.4, 23.7],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [28.2, 22.7, 37.1, 35, 32.5, 33.6, 31.5, 30, 32.6, 26.9, 30.4, 29.6, 28.7],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('As', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Assists Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [5.9, 7.2, 6.6, 6, 7.2, 7.2, 8.6, 7.4, 6.8, 8.7, 7.9],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [5.9, 2.9, 4.6, 5.9, 8, 6.3, 5.5, 6.1, 5.5, 5.3, 4.3, 4.3, 3.5],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('Re', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Rebounds Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [5.5, 7.4, 7, 6.7, 7.9, 7.6, 7.3, 6, 7.4, 8.6, 7.5],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [6.5, 3.6, 5.2, 5.5, 8, 6.9, 6, 6.4, 6.7, 6.9, 6.6, 5.9, 5.8],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('As', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Assists Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [5.9, 7.2, 6.6, 6, 7.2, 7.2, 8.6, 7.4, 6.8, 8.7, 7.9],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [5.9, 2.9, 4.6, 5.9, 8, 6.3, 5.5, 6.1, 5.5, 5.3, 4.3, 4.3, 3.5],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('St', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Steals Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [1.6, 2.2, 1.6, 1.6, 1.8, 1.7, 1.6, 1.6, 1.4, 1.2, 1.3],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [2.4, 2.1, 2.9, 3.2, 2.9, 2.8, 2.7, 2.3, 2.8, 1.8, 2.2, 1.7, 1.7],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('As', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Assists Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [5.9, 7.2, 6.6, 6, 7.2, 7.2, 8.6, 7.4, 6.8, 8.7, 7.9],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [5.9, 2.9, 4.6, 5.9, 8, 6.3, 5.5, 6.1, 5.5, 5.3, 4.3, 4.3, 3.5],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('Bl', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Blocks Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [0.7, 0.6, 0.8, 0.7, 1.1, 1.1, 1, 0.7, 0.6, 0.6, 0.8],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [0.8, 1.2, 1.5, 1.6, 0.8, 0.7, 1, 0.9, 0.8, 0.8, 0.5, 0.5, 0.5],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('As', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Assists Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [5.9, 7.2, 6.6, 6, 7.2, 7.2, 8.6, 7.4, 6.8, 8.7, 7.9],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [5.9, 2.9, 4.6, 5.9, 8, 6.3, 5.5, 6.1, 5.5, 5.3, 4.3, 4.3, 3.5],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('To', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Season1', 'Season2', 'Season3', 'Season4', 'Season5','Season6','Season7','Season8','Season9','Season10','Season11','Season12','Season13'],
            title: {
                text: '',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        yAxis: {
            title: {
                text:  'Turnovers Per Game',
                style: {
                    color: 'black',
                    fontSize: '25px'
                }
            }
        },
        series: [
            {
                name: 'Lebron James',
                data: [3.5, 3.3, 3.3, 3.2, 3.4, 3, 3.4, 3.9, 3.3, 4.1, 3.7],
                color: "#63B8FF"
            }, 
            {
                name: 'Micheal Jordan',
                data: [3.5, 2.5, 3.3, 3.1, 3.6, 3, 2.5, 2.5, 2.7, 2.1, 2.4, 2, 2.3],
                color: "#696969"
            }
        ]
    });
    Highcharts.chart('pie1', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
        },
        title: {
            floating: false,
            text: 'First Half of The Career'
        },
        series: [{
            name:'',
            type: 'pie',
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return Math.round(this.percentage*100)/100 + ' %';
                },
                distance: -50,
                color:'white'},
            data: [
                {
                    name: 'Win',
                    y: 53.3,
                    color: "#63B8FF"
                },
                {
                    name: 'Lose',
                    y: 46.7,
                    color: "#CD5555"
                }
            ]
        }]
    });
    Highcharts.chart('pie2', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
        },
        title: {
            floating: false,
            text: 'Last Half of The Career'
        },
        series: [{
            name:'',
            type: 'pie',
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return Math.round(this.percentage*100)/100 + ' %';
                },
                distance: -50,
                color:'white'},
            data: [
                {
                    name: 'Win',
                    y: 77.8,
                    color: "#63B8FF"
                },
                {
                    name: 'Lose',
                    y: 22.2,
                    color: "#CD5555"
                }
            ]
        }]
    });
    Highcharts.chart('pie3', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
        },
        title: {
            floating: false,
            text: 'First Half of The Career'
        },
        series: [{
            name:'',
            type: 'pie',
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return Math.round(this.percentage*100)/100 + ' %';
                },
                distance: -50,
                color:'white'},
            data: [
                {
                    name: 'Win',
                    y: 54.5,
                    color: "#63B8FF"
                },
                {
                    name: 'Lose',
                    y: 45.5,
                    color: "#CD5555"
                }
            ]
        }]
    });  
    Highcharts.chart('pie4', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
        },
        title: {
            floating: false,
            text: 'Last Half of The Career'
        },
        series: [{
            name:'',
            type: 'pie',
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return Math.round(this.percentage*100)/100 + ' %';
                },
                distance: -50,
                color:'white'},
            data: [
                {
                    name: 'Win',
                    y: 72.7,
                    color: "#63B8FF"
                },
                {
                    name: 'Lose',
                    y: 27.3,
                    color: "#CD5555"
                }
            ]
        }]
    });  
}