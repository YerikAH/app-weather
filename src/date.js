function date() {
  const $dayLetter = document.getElementById("dayLetter");
  const $dayNum = document.getElementById("dayNum");
  const $month = document.getElementById("month");
  const date = new Date();
  const day = date.getDay();
  const numDay = date.getDate();
  const numMonth = date.getMonth();
  $dayNum.innerHTML = numDay;
  switch (day) {
    case 1:
      $dayLetter.innerHTML = `Mon`;
      break;
    case 2:
      $dayLetter.innerHTML = `Tue`;
      break;
    case 3:
      $dayLetter.innerHTML = `Wed`;
      break;
    case 4:
      $dayLetter.innerHTML = `Thu`;
      break;
    case 5:
      $dayLetter.innerHTML = `Fri`;
      break;
    case 6:
      $dayLetter.innerHTML = `Sat`;
      break;
    case 7:
      $dayLetter.innerHTML = `Sun`;
      break;
    default:
      $dayLetter.innerHTML = `Null`;
      break;
  }

  switch (numMonth) {
    case 0:
      $month.innerHTML = `Jan`;
      break;
    case 1:
      $month.innerHTML = `Feb`;
      break;
    case 2:
      $month.innerHTML = `Mar`;
      break;
    case 3:
      $month.innerHTML = `Apr`;
      break;
    case 4:
      $month.innerHTML = `May`;
      break;
    case 5:
      $month.innerHTML = `Jun`;
      break;
    case 6:
      $month.innerHTML = `Jul`;
      break;
    case 7:
      $month.innerHTML = `Aug`;
      break;
    case 8:
      $month.innerHTML = `Sep`;
      break;
    case 9:
      $month.innerHTML = `Oct`;
      break;
    case 10:
      $month.innerHTML = `Nov`;
      break;
    case 11:
      $month.innerHTML = `Dic`;
      break;

    default:
      $month.innerHTML = `Null`;
      break;
  }
}
export default date;
