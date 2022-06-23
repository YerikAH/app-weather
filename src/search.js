function search() {
  const $btnOpen = document.getElementById("openSearch");
  const $btnClose = document.getElementById("closeSearch");
  const $searchMenu = document.getElementById("searchMenu");
  const $noScro = document.querySelector("body");
  $btnOpen.addEventListener("click", (e) => {
    $searchMenu.style.setProperty("top", "0vh");
    $noScro.style.setProperty("overflow-y", "hidden");
  });
  $btnClose.addEventListener("click", (e) => {
    $searchMenu.style.setProperty("top", "-100vh");
    $noScro.style.setProperty("overflow-y", "visible");
  });
}

export default search;
