document.addEventListener('DOMContentLoaded', () =>{
    Highcharts.chart('container' , {
        chart:{
              type:'column'
        },
        title:{
            text:'Browser used by the User from recent studies',
            align:'left',
            style:{
                fontSize:'20px',
                color:'red'
            }
        },
        subtitle:{
            text:'Below are the drilldown column charts list of browser use in the market in the year of 2020',
            align:'left',
            x:20,
            style:{
                color:'blue'
            }
        },
        xAxis:{
            type:'category'
        },
        yAxis:{
            title:{
                text:'Totral percent market share'
            }
        },
        credits:{
            enabled:false
        },
        legend:{
            enabled:false
        },
        series:[
            {
                name:'Browsers',
                colorByPoint:true,
                data:[
                    {
                        name:'Chrome',
                        y:62.74,
                        drilldown:'Chrome'
                    },
                    {
                        name:'Firefox',
                        y:10.8,
                        drilldown:'Firefox'
                    },
                    {
                        name:'Safari',
                        y:15.58,
                        drilldown:'Safari'
                    },
                    {
                        name:'Edge',
                        y:44.02,
                        drilldown:'Edge'
                    },
                    {
                        name:'Opera',
                        y:17.92,
                        drilldown:'Opera'
                    },
                    {
                        name:'Others',
                        y:7.62,
                        drilldown:null
                    },
                ]  
            }

        ],
        drilldown:{
            breadcrumbs:{
                position:{
                    align:'center'
                }
            },
            series:[
                {
                    name:'Chrome',
                    id:'Chrome',
                    data:[
                        ['v65',10.2], ['v64',54.4],['v63',13],['v62',1.5],['v61',20],['v60',5.3],['v59',2.65],['v58',1.4]
                    ]
                },
                {
                    name:'Firefox',
                    id:'Firefox',
                    data:[
                        ['v58.0',1.43], ['v57',2.4],['v56',11],['v54',2.7],['v53',3.5]
                    ]
                },
                {
                    name:'Safari',
                    id:'Safari',
                    data:[
                        ['v11.0',11.7],['v10.0',3.8],['v9.0',2.7],['v8.0',7]
                    ]
                },
                {
                    name:'Edge',
                    id:'Edge',
                    data:[
                        ['v21.0',21.7],['v20.0',13.8],['v17.0',2.7],['v16.0',1.7], ['v6.0', 4.77]
                    ]
                },
                {
                    name:'Opera',
                    id:'Opera',
                    data:[
                        ['v51.0',91.7],['v50.0',67.8],['v49.0',27.7],['v48.0',10.7], ['v47.0', 24.77],['v46.0', 12.77],['v45.0', 14.77]
                    ]
                }
            ]
        }

    })
})