const root = document.querySelector(":root");
root.style.setProperty("--color", "#000000");
root.style.setProperty("--background-color", "#e8e4e0");
const colorsFile = "/src/data/colors.json";
let current = 0;

function changeColor() {
  fetch(colorsFile)
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      if (current >= jsondata.length) {
        current = 0;
      }
      root.style.setProperty("--color", `#${jsondata[current].color}`);
      root.style.setProperty(
        "--background-color",
        `#${jsondata[current].backgroundColor}`
      );
      current += 1;
    });
}
