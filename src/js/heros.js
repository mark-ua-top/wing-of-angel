const searchInput = document.querySelector(".heros-search-input");
const herosList = document.querySelector(".heros-list");
const herosItems = herosList.querySelectorAll(".heros-item");

function filterList() {
  const query = searchInput.value.toLowerCase();
  herosItems.forEach((item) => {
    const name = item.querySelector(".heros-name").textContent.toLowerCase();
    if (name.includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterList);
