/// creat object
class Job {
  constructor(name, time, deadline) {
    this.name = name;
    this.time = time;
    this.deadline = deadline;
  }
}
const works = [];
const complete = [];
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const btns = document.querySelectorAll(".btn-feature");
const features = document.querySelectorAll(".btn-group-feature");
const list = document.querySelector(".list");
const inputTask = document.querySelector(".form-input");
const btnAddTask = document.querySelector(".btn-add");
const btnSortDate = document.querySelector(".btn-sort-time");
const btnSortAZ = document.querySelector(".btn-sort-a-z");
const btnSortZA = document.querySelector(".btn-sort-z-a");
const tasks = document.querySelectorAll(".task");
const date = document.querySelector("#due");
date.addEventListener("change", function () {
  console.log(new Date(this.value));
});
let status; // set mang rong
/////////
// Button
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    btns.forEach((btn) => btn.classList.remove("action"));
    e.target.classList.add("action");
    features.forEach((item) => {
      if (!item.classList.contains("d-none")) item.classList.add("d-none");
    });
    const tab = document.querySelector(e.target.getAttribute("href"));
    tab.classList.remove("d-none");
  });
});

// Update UI
const updateUI = function (jobs) {
  jobs.forEach((work) => {
    const time = new Date(work.time);
    const deadline = new Date(work.deadline);
    const listItem = `<div class="row task mt-3 mx-0 border-bottom align-items-center">
    <i class="bi bi-check col-1 fs-4"></i>
    <input type="text" class="input text-uppercase col-3" value="${work.name}">
    <span class="time fw-light col-4">Start:  ${
      weekday[`${time.getDay()}`]
    } ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}</span>
    <span class="time time-end fw-light col-2">Due:   ${
      weekday[`${deadline.getDay()}`]
    } ${deadline.getDate()}/${
      deadline.getMonth() + 1
    }/${deadline.getFullYear()}  </span>
    </div>`;
    list.insertAdjacentHTML("afterbegin", listItem);
  });
};
// add Task
btnAddTask.addEventListener("click", function (e) {
  if (!inputTask.value || !date.value) {
    alert("Please fill out this form");
    return;
  }
  const name = inputTask.value.toLowerCase();
  const deadline = new Date(date.value);
  const time = new Date();
  const newJob = new Job(name, time, deadline);
  works.push(newJob);
  list.innerHTML = "";
  updateUI(works);
  inputTask.value = "";
  date.value = "";
});
//sort task (a->z)

// sort date
btnSortDate.addEventListener("click", function () {
  list.innerHTML = "";
  const arr = [...works].sort((a, b) => {
    return new Date(b.deadline) - new Date(a.deadline);
  });
  updateUI(arr);
});
btnSortAZ.addEventListener("click", function () {
  const arr = [...works].sort((a, b) => a.name < b.name);
  list.innerHTML = "";
  updateUI(arr);
});
// add complete task
// tasks.forEach((task) =>
//   task.addEventListener("click", function (e) {
//     const list = e.target.closest(".row");
//     list.classList.add("bg-success");
//     list.querySelector("");
//   })
// );

class CarCl {
  constructor(made, speed) {
    this.made = made;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const car = new CarCl("ford", 120);
console.log(car.speedUS);
car.speedUS = 120;
console.log(car);
