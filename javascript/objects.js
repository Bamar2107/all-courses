let bioData = {
    myFullname :{
        firstname : "Amar",
        lastname: "Babu"
    },
    myAge: 26,
    myPloace: "bhawanipatna",

    getData()   //no need to write function here like getData function() {    }
    {
        console.log(`Hi my name is ${bioData.myFullname.firstname}, i am ${bioData.myAge} years old & i am from ${bioData.myPloace}`)
    }

}
bioData.getData();