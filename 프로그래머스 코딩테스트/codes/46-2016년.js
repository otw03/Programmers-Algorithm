function solution(a, b) {
  const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // a월 b일에 해당하는 날짜를 new Date()를 사용하여 '2016-a-b' 형식의 문자열로 생성
  const date = new Date(`2016-${a}-${b}`);
  // 해당 날짜의 요일 가져옴. 일요일(SUN)을 나타내는 0부터 6까지의 정수
  const dayIndex = date.getDay();
  // console.log(dayIndex)
  // weeks의 [dayIndex]번째 인덱스 day
  const day = weeks[dayIndex];
  
  return day;
}