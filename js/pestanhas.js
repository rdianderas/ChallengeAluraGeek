document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        tab.classList.add("active");
        tabContents[index].classList.add("active");
        });
    });
});