function f1(days) {
  const addDays = require("date-fns/addDays");
  const result = addDays(new Date(2020, 8, 22), days);
  let d = result.getDate();
  if (d < 10) {
    d = "" + "0" + d;
  }
  let m = result.getMonth();
  if (m < 10) {
    m = "" + "0" + m;
  }
  let y = result.getFullYear();
  let ans = "";
  ans += d;
  ans += "-";
  ans += m;
  ans += "-";
  ans += y;
  return ans;
}

console.log(f1(8));
module.exports = f1;
