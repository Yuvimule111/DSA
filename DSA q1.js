// let [m, n] = readline().split(" ").map(x => parseInt(x));
// let accounts = [];
// for(let i = 0; i < m; i++){
// let arr = readline().split(" ").map(x => parseInt(x)).slice(0, n);
// accounts.push(arr);
// }
function wealthyCustomer(accounts, m, n)
{
let maxWealthSoFar = 0;
let wealthyCustomer = -1;
for (let i = 0; i < accounts.length; i++) {
let currCustomerWealth = 0;
for (let money of accounts[i]) {
currCustomerWealth += money;
}
if(maxWealthSoFar < currCustomerWealth){
wealthyCustomer = i + 1;
maxWealthSoFar = currCustomerWealth;
}
}
return wealthyCustomer;
}
let accounts = [2,3,1,1,4,2,2,3];
let m = accounts.length;
let n = accounts[i].length;
console.log(wealthyCustomer(accounts, m, n))

