/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spendEstimates = {};
   for ( let i = 0 ; i < transactions.length; i++){
     var t = transactions[i];
     if(spendEstimates[t.category]){
       spendEstimates[t.category] = spendEstimates[t.category] + t.price;
     }
     else{
       spendEstimates[t.category] = t.price;
     }
   }

   var keys = Object.keys(spendEstimates);
   console.log(spendEstimates);
   console.log(keys);

  let answer = [];
  for (var i = 0 ; i <keys.length;i++){
    var category = keys[i];
    var obj = {
      category : category,
      amountSpend : spendEstimates[category],
    }
    answer.push(obj);
  }
  console.log(answer);
}

var transactions = [
{
  itemName:"Pepsi",
  category:"drink",
  price:40,
  timestamp:2020,
},
{
  itemName:"Marinda",
  category: "drink",
  price: 40,
  timestamp: 2030,
},
{
  itemName:"coca cola",
  category: "food",
  price: 30,
  timestamp: 2022,
},
{
  itemName:"campa",
  category: "food",
  price: 30,
  timestamp: 2022,
},
{
  itemName: "bhujia",
  category: "namkeen",
  price: 10,
  timestamp: 2022,
},
];


calculateTotalSpentByCategory(transactions);



