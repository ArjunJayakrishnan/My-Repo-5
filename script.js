"use script";
// Namings
const read = document.querySelector("h2");
const notification = document.querySelectorAll(".notification");
const emojis = document.querySelectorAll(".emoji");
const countDiv = document.querySelector("header div");
// Functionality
read.addEventListener("click", () => {
	notification.forEach((item) => {
		countDiv.remove();
		if (item.classList.contains("new")) {
			item.classList.remove("new");
			const lineToRemove = item.querySelector(".emoji");
			if (lineToRemove) {
				lineToRemove.remove();
			}
		} else return;
	});
});
