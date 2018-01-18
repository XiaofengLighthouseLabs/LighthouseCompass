var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {};
// start a loop
  for (var i = 0; i < salesData.length; i++){
  // Sales for province
  sumSales = salesData[i].sales.reduce((a,b) => a+b, 0);
   //tax for province
   var rate = taxRates[salesData[i].province]
  sumTax = sumSales * rate;

if(result[salesData[i].name]) {
  result[salesData[i].name].totalSales += sumSales;
  result[salesData[i].name].totalTaxes += sumTax;

} else {
result[salesData[i].name] = {
    totalSales : sumSales,
    totalTaxes : sumTax
  };
}
 }
 console.log(result);



}

calculateSalesTax(companySalesData, salesTaxRates);



