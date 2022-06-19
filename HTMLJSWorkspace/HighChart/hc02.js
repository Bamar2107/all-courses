document.addEventListener('DOMContentLoaded', () =>{
    Highcharts.chart('chart', {
        chart:{
            zoomType:'x'
        },
        title:{
            text:'Color Zone',
            style:{
                color:'green',
                fontSize:'20px'
            }
        },
        credits:{
            enabled:false
        },
        xAxis:{
        },
        responsive:{
            rules :[
                {
                    condition:{
                        maxLength:500
                    },
                    chartOptions:{
                        legend:{enabled:false}
                    }
                }
            ]
        },
        series :[
            {
                name:'Growth',
                data: [ -26,-12,-6,-4,0,2,7, 15,  20, 30,45],
                zones: [
                    {
                        value:0,
                        color:'red'
                    },{
                        value:15,
                        color:'blue'
                    },
                    {
                        color:'green'
                    }
                ]
            }
        ]
    })
})