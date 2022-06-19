document.addEventListener('DOMContentLoaded', () =>{
  Highcharts.chart('container', {
      chart :{
            type:'column',
            zoomType:'xy'                                 //zoom type have 3 values x , y & xy 
      },

      credits:{
       // enabled:false,                                  //default value is true
       text:'Click Here',                                 //text of the credits
       href :'https://google.com',                         //link URL
       position :{
           align : 'left',
           x:10
       },
       style :{
           fontSize:'15px',
           color:'blue'
       }

    },
    responsive:{
         rules:[
             {
                 condition:{
                     maxWidth:500
                 },
                 chartOptions:{
                     legend:{enabled:false},
                     credits:{enabled:false},
                     yAxis:{title:{text:''}}
                 }
             }
         ]
    },
    colors : ['green', 'blue', 'yellow', 'cyan','violet'],  //colors will be repeated once the data is exceeded than numbers of colors mentioned

    tooltip:{
          animation:true,                                 //default value is true, for better visualization when hover make it to true
          backgroundColor : 'black',
          borderRadius:'20',
          borderColor:'lightgreen',
          followPointer:true,                            // default value of followPointer is false
          style :{                                       // we don't have any text color property in tooltip so change it using style property
              color: 'white'
          },
          shared:false                                   //default value is false, if set to true then it will show all the data values
    
        },

      title :{
           text:'My first Highcharts Example',
           style:{
               fontSize:'25px',
               color:'red',
           }
      },

      xAxis:{
          categories : ['Apple', 'Banana', 'orange','Guava','Mango']
      },

      yAxis :{
           title :{
               text:'Fruits Eaten'
           },
           alternateGridColor:'#dfdfdf'
      },

      series :[
          {
              name:'Amar',
              data : [1, 8, 6,10,4]
          },{
            name:'Anil',
            negativeColor:'red',
            data : [4, 2, -8, 12,6]
        },{
            name:'Isha',
            negativeColor:'red',
            data: [-7,8,23,5,13]
        },{
            name:'Yash',
            negativeColor:'red',
            data: [12,23,7,-3,20]
        }
      ]
  });  
});