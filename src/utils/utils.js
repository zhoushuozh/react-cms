export const formateDate = (timeStamp, connect) => {
  if (!timeStamp) return
  let date = new Date(Number(timeStamp));
  let year, month, day, hour, minute, seconds;
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  hour = date.getHours();
  minute = date.getMinutes();
  seconds = date.getSeconds();
  date = null;
  let arr = [year, month, day, hour, minute, seconds];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      arr[i] = "0" + arr[i];
    } else {
      arr[i] = String(arr[i]);
    }
  }
  if (connect) {
    return `${arr[0]}${connect}${arr[1]}${connect}${arr[2]} ${arr[3]}:${
      arr[4]
      }:${arr[5]}`;
  }
  return arr;
}