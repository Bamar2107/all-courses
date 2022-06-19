const orders=[
{userId:1,
amount: 10},

{userId:1,
amount: 39},

{userId:2,
amount: 56},

{userId:2,
amount: 34}
]

const sum =orders.filter(order => order.userId===1)
.map(order => order.amount)
. reduce((a,b) => a+b)


console.log(`The total amount of UserId:1 is ${sum}`);