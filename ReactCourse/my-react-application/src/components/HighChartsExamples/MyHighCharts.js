import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
function MyHighCharts() {

    const options = {
        chart:{
            type:'column'
        },
        credits:{
            text:'Click Here',
        },
        colors:['green', 'red', 'yellow', 'blue', 'orange', 'violet'],
        title:{
             text:"My First React HighCharts Example",
             style:{
                 color:'red'
             }
        },
        yAxis:{
            title:{
                text:'Price'
            }
        },
        xAxis:{
            categories:['Shirts', 'Shoes', 'Jacket', 'Blazer','Crocs', 'Tshirt','Watch' ]
        },
        series:[
            {
                name:'Products',
                data : [10,20,80,45,37,78,21]        
            }
        ]
    }
  return (
    <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default MyHighCharts