// // slice() 이용
// function solution(phone_number) {
//   let length = phone_number.length - 4;
//   let star = "";
//   for (let i = 0; i < length; i++) {
//     star += "*";
//   }
//   return star + phone_number.slice(-4);
// }

// substring() 이용
function solution(phone_number) {
  let length = phone_number.length - 4;
  let star = "";
  for (let i = 0; i < length; i++) {
    star += "*";
  }
  return star + phone_number.substring(length);
}