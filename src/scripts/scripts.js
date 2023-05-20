const jake = {};

jake.app = () => {
  const jakeTime = document.querySelector(".jake-time");
  jakeTime.addEventListener("click", () => {
    jakeTime.classList.toggle("rotating");
  });

};


jake.app();


function loaded() {
  const jakeFace = document.querySelector(".jake-face");
  const jakeTitle = document.querySelector(".jake-title");
  jakeFace.classList.add("tada");
  jakeTitle.classList.add("tada");
}