const btn = document.querySelector(".btn");
const input = document.getElementById("text");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const text = input.value;
  result.textContent = capText(text);
  input.value = "";
});

function capText(text) {
  words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
