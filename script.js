let textContainer = document.getElementById("textContainer");
let enterKey = document.getElementById("enter");
let allKeys = document.querySelectorAll(".key");
let isCaps = false;
enterKey.addEventListener("click", function () {
  let content = textContainer.innerText;
  let newContent = content + "\n";
  textContainer.innerText = newContent;
});
let spaceKey = document.getElementById("space-key");
spaceKey.addEventListener("click", function () {
  let content = textContainer.innerText;
  let newContent = content + "\u00A0";
  textContainer.innerText = newContent;
});
let deleteKey = document.getElementById("delete");
deleteKey.addEventListener("click", function () {
  let content = textContainer.innerText;
  let newContent = content.slice(0, -1);
  textContainer.innerText = newContent;
});
let capsLock = document.getElementById("caps");
capsLock.addEventListener("click", function () {
  if (isCaps) {
    capsLock.classList.remove("active");
    for (let key of allKeys) {
      if (key.classList.length > 1) {
        //DO NOTHING!
      } else {
        key.innerText = key.innerText.toLowerCase();
      }
    }
  } else {
    capsLock.classList.add("active");
    for (let key of allKeys) {
      if (key.classList.length > 1) {
        //DO NOTHING!
      } else {
        key.innerText = key.innerText.toUpperCase();
      }
    }
  }
  isCaps = !isCaps;
});
for (let key of allKeys) {
  if (key.classList.length > 1) {
    //DO NOTHING!
  } else {
    key.addEventListener("click", function () {
      textContainer.innerText += key.innerText;
    });
  }
}
