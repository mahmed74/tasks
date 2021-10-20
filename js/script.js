/**
 * Task 1
 */
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];

let date = new Date();
let day = days[date.getDay()];

document.getElementById("current_day").innerHTML = day;
setInterval(function () {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let prefix = "PM";
  if (hour > 12) {
    hour = hour - 12;
    prefix = "PM";
  } else {
    prefix = "AM";
  }

  document.getElementById(
    "current_time"
  ).innerHTML = `${hour} ${prefix} : ${min} : ${sec}`;
}, 1000);

/**
 * Task 2
 */
document.getElementById("current_time_now").innerHTML = `${
  date.getMonth() + 1
}-${date.getDay()}-${date.getFullYear()} & ${
  date.getMonth() + 1
}/${date.getDay()}/${date.getFullYear()}`;
/**
 * Task 3
 */
let avg = (5 + 6 + 7) / 2;
document.getElementById("area_of_triangle").innerHTML = Math.sqrt(
  avg * (avg - 5) * (avg - 6) * (avg - 7)
);
/**
 * Task 5
 */
let status = date.getFullYear() % 4 ? "Leap Calender" : "Georgion Caleder";

document.getElementById("year_status").innerHTML = `"${status}"`;

/**
 * Task 6
 */
let calc_sunday = 0;
let startDate = 2014;
let endDate = 2050;
for (let i = 2014; i <= 2050; i++) {
  let check = new Date(`January 1, ${i}`).getDay();
  if (check == 0) {
    calc_sunday += 1;
  }
}
document.getElementById("check_sunday").innerHTML = `"${calc_sunday}"`;

/**
 * Task 7
 */
document.getElementById("guess").addEventListener("click", function () {
  let random_num = Math.round(Math.random() * (10 - 1) + 1);
  let guess = prompt("Guess a Number");
  if (guess != "") {
    if (guess == random_num) {
      alert("Good Work");
    } else {
      alert("Not matched");
    }
  }
});
/**
 * Task 8
 */
const date1 = new Date();
const date2 = new Date("08/14/2022");
console.log(typeof date2);
console.log(date2);

const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("august_left").innerHTML = diffDays;
/**
 * Task 9
 */
let alert_box = document.getElementById("alert_result");
document.getElementById("add").addEventListener("click", function () {
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);
  if (input1 == "" || input2 == "") {
    return (alert_box.innerHTML = "Both inputs are required");
  } else {
    alert_box.innerHTML = `Result of Addition is: ${input1 + input2}`;
  }
});
document.getElementById("mul").addEventListener("click", function () {
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);
  if (input1 == "" || input2 == "") {
    return (alert_box.innerHTML = "Both inputs are required");
  } else {
    alert_box.innerHTML = `Result of Multiplication is: ${input1 * input2}`;
  }
});

document.getElementById("clear").addEventListener("click", function () {
  alert_box.innerHTML = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
});

/**
 * Task 9
 */


const convertTemp = ()=>{
  const temp = document.getElementById("temp").value;
  const selectBox = document.getElementById("units");
  const showResult = document.getElementById("showResult");

  console.log(temp.value);

  console.log(selectBox.value);

  if (selectBox.value == "celcius"){
      var result = (temp*9/5)+32
    showResult.innerText = `${result} °F`
}
else{
      var result = ((temp-32)/9)*5;
    showResult.innerText = `${result} °C`
}

}


