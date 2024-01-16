function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  let array = [];
  for(let i = 0; i < cost_per_minute.length; i++){
      let minute = cost_per_minute[i];
      let mile = cost_per_mile[i];
      let number = (minute * ride_time) + (mile * ride_distance);
      array.push(number);
  }
  return array;
}
