const dropBtn = document.querySelectorAll(".dropBtn");
const dropEvent = document.querySelectorAll(".dropMenu");
dropBtn.forEach((e) => {
  onDropClick(dropBtn, dropEvent, e);
});
function onDropClick(dropBtns, dropItems, item) {
  item.addEventListener("click", function (e) {

    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-drop");

    let currentDrop = document.querySelector(tabId);

    if (currentBtn.classList.contains("active")) {
      if (currentDrop) {
        currentDrop.classList.remove("active");
        currentBtn.classList.remove("active");
        body.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      dropBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      dropItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentDrop.classList.add("active");
      body.classList.add("active");
    }
  });
}
