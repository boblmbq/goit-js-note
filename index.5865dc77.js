[document.getElementById("task-form"),document.getElementById("task-list")][0].addEventListener("submit",(function(t){t.preventDefault();var e={};new FormData(t.currentTarget).forEach((function(t,n){return e[n]=t}));var n=JSON.parse(localStorage.getItem("notes"))||[];console.log(n),n.push(e),localStorage.setItem("TASKS",JSON.stringify(n))}));
//# sourceMappingURL=index.5865dc77.js.map
