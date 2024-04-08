document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".menu__hamburger");
  const navigationMenu = document.querySelector(".menu__nav");

  hamburgerMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
  });
});

const greetingOptions = [
  "Hi!",
  "Hola!",
  "Selamat Datang!",
  "你好!",
  "안녕하세요!",
  "こんにちは!",
];
const speed = 50;
const repeatDelay = 2000;
const constantPart = "I'm Michaela";

const typingElement = document.getElementById("typing-animation");
let currentGreetingIndex = 0;

const typeWriter = () => {
  const greeting = greetingOptions[currentGreetingIndex];
  const text = `${greeting} ${constantPart}`;
  let i = 0;
  typingElement.innerHTML = "";

  function typeNextCharacter() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeNextCharacter, speed);
    } else {
      setTimeout(typeWriter, repeatDelay);
    }
  }
  typeNextCharacter();

  currentGreetingIndex = (currentGreetingIndex + 1) % greetingOptions.length;
};

typeWriter();
