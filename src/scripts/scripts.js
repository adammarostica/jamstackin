const jake = {};

jake.app = () => {
  const jakeTime = document.querySelector('.jake-time');
  jakeTime.addEventListener('click', (e) => {
    jakeTime.classList.toggle('rotating');
  })
}

setTimeout(() => {
  jake.app();
}, 1000);