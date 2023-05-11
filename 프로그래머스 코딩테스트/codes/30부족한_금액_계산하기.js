// 등차수열의 합 공식 (n * (a + l)) / 2 이용 
function solution(price, money, count) {
  const totalPrice = (count * (price + price * count)) / 2;
  const requireMoney = totalPrice - money;
  
  return requireMoney > 0 ? requireMoney : 0;
}

// // 반복문 이용
// function solution(price, money, count) {
//     let requireMoney = 0;

//     for(let i = 1; i <= count; i++) {
//         requireMoney += i * price;
//     }

//     return requireMoney <= money ? 0 : requireMoney - money;
// }