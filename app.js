//https://www.youtube.com/watch?v=rRgD1yVwIvE&t=1746s

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/********* FOREACH FUNCTION ************/
companies.forEach(function (company, index) {
  // console.log(company);
  // console.log(index);
});

/********* FILTER FUNCTION ************/
// FILTER get 21 and older
//for loop example
// let canDrink = [];
// for(let i =0; i<ages.length; i++){
//     if(ages[i] >=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter( function(age){
//     return age>=21;
// } )

const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

//filter the company which category is retail
const retailCompanies = companies.filter(
  (retail) => retail.category === "Retail"
);
// console.log(retailCompanies);

//get 80s company

const eightiesCompany = companies.filter(
  (eightyCompany) => eightyCompany.start >= 1980 && eightyCompany.start < 1990
);

// console.log(eightiesCompany);

// GET COMPANIES LASTED 10 YRS
const lastedTenYrs = companies.filter(
  (company) => company.end - company.start >= 10
);
// console.log(lastedTenYrs);

/********* MAP FUNCTION ************/

// GET ALL COMPANY NAMES

const companyNames = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
// console.log(companyNames);

const agesSquare = ages.map((age) => Math.sqrt(age));
// console.log(agesSquare);

/********* SORT FUNCTION ************/
//SORT company by start year

const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

//shorter way using ternary
const sortedCompanies2 = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);
console.log(sortedCompanies2);

//sort ages lowest to highest, this looks easy but it in array be careful

const sortAges = ages.sort((age1, age2) => age1 - age2);
console.log(sortAges);

/********* REDUCE FUNCTION ************/

var order = [{ amount: 250 }, { amount: 100 }, { amount: 300 }, { amount: 50 }];

const totalOrderAmount = order.reduce(function (total, item) {
  return total + item.amount;
}, 0);
//here 0 means initial value for total
console.log(totalOrderAmount);

//converting to arrow FUNCTION
const totalAmount = order.reduce((total, item) => total + item.amount, 0);
console.log(totalAmount);

// lets sum the age
const ageTotal = ages.reduce(function (total, age) {
  return total + age;
}, 0);
console.log(ageTotal);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

//Get total years for all COMPANIES

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);
