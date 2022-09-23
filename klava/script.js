const leter = document.querySelectorAll(".leter_js");
const inp = document.querySelector("#i-1");

inp.onkeypress = (event) => {
  for (let item of leter) {
    if (event.code == "Key" + item.textContent.toUpperCase()) {
      item.classList.add("change");
      setTimeout(del, 200);
    }

    if (event.code == item.textContent && item.textContent.length > 4) {
      item.classList.add("change_");
      setTimeout(del, 200);
    }
    function del() {
      item.classList.remove("change", "change_");
    }
  }
};
