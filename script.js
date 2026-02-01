// // ELEMENTS
// const taskList = document.getElementById("taskList");
// const taskTableBody = document.getElementById("taskTableBody");

// const taskInput = document.getElementById("taskInput");
// const category = document.getElementById("category");
// const priority = document.getElementById("priority");
// const dueDate = document.getElementById("dueDate");

// const search = document.getElementById("search");
// const filterCategory = document.getElementById("filterCategory");

// const total = document.getElementById("total");
// const completed = document.getElementById("completed");
// const pending = document.getElementById("pending");
// const overdue = document.getElementById("overdue");

// const themeToggle = document.getElementById("themeToggle");
// const homePage = document.getElementById("homePage");
// const listPage = document.getElementById("listPage");

// // INIT
// document.addEventListener("DOMContentLoaded", () => {
//     loadTheme();
//     updateDashboard();   // ✅ dashboard only
// });

// // THEME
// themeToggle.onclick = () => {
//     document.body.classList.toggle("dark");
//     localStorage.setItem("theme", document.body.classList.contains("dark"));
// };

// function loadTheme() {
//     if (localStorage.getItem("theme") === "true") {
//         document.body.classList.add("dark");
//     }
// }

// // NAVIGATION
// function showPage(page) {
//     document.querySelectorAll(".nav button").forEach(b =>
//         b.classList.remove("active")
//     );

//     if (page === "home") {
//         homePage.classList.remove("hidden");
//         listPage.classList.add("hidden");
//         taskList.innerHTML = ""; // ❌ stop fetching on home
//         document.querySelector(".nav button:first-child").classList.add("active");
//     } else {
//         homePage.classList.add("hidden");
//         listPage.classList.remove("hidden");
//         document.querySelector(".nav button:last-child").classList.add("active");
//         renderTable(); // ✅ fetch ONLY on list page
//     }
// }

// // ADD TASK (Home only)
// function addTask() {
//     if (!taskInput.value.trim()) return alert("Enter a task");

//     const tasks = getTasks();
//     tasks.push({
//         text: taskInput.value,
//         category: category.value,
//         priority: priority.value,
//         dueDate: dueDate.value,
//         completed: false
//     });

//     saveTasks(tasks);
//     updateDashboard();

//     taskInput.value = "";
//     dueDate.value = "";
// }

// // TABLE (List page only)
// function renderTable() {
//     const tasks = getTasks();
//     taskTableBody.innerHTML = "";

//     tasks.forEach((t, i) => {
//         const row = document.createElement("tr");
//         if (t.completed) row.classList.add("completed");

//         row.innerHTML = `
//             <td>${i + 1}</td>
//             <td>${t.text}</td>
//             <td>${t.category}</td>
//             <td>${t.priority}</td>
//             <td>${t.dueDate || "-"}</td>
//             <td>${t.completed ? "Done" : "Pending"}</td>
//             <td class="table-actions">
//                 <button class="done-btn" onclick="markDone(${i})">Done</button>
//                 <button class="remove-btn" onclick="deleteTask(${i})">Remove</button>
//             </td>
//         `;
//         taskTableBody.appendChild(row);
//     });
// }

// function markDone(i) {
//     const tasks = getTasks();
//     tasks[i].completed = true;
//     saveTasks(tasks);
//     renderTable();
//     updateDashboard();
// }

// function deleteTask(i) {
//     const tasks = getTasks();
//     tasks.splice(i, 1);
//     saveTasks(tasks);
//     renderTable();
//     updateDashboard();
// }

// // DASHBOARD
// function updateDashboard() {
//     const tasks = getTasks();
//     const today = new Date().toISOString().split("T")[0];

//     total.innerText = tasks.length;
//     completed.innerText = tasks.filter(t => t.completed).length;
//     pending.innerText = tasks.filter(t => !t.completed).length;
//     overdue.innerText = tasks.filter(
//         t => !t.completed && t.dueDate && t.dueDate < today
//     ).length;
// }

// // STORAGE
// function getTasks() {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// function saveTasks(tasks) {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }
