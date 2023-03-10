import feather from "feather-icons";
import "./style.css";

feather.replace();

// set age
const birthDay = 1106780400;
const now = Date.now() / 1000;

const age = Math.floor((now - birthDay) / (60 * 60 * 24 * 365));

document.querySelector("#age")!.innerHTML = `${age}`;

setTimeout(() => {
  const loader = document.querySelector("#loader")! as HTMLElement;
  loader.style.setProperty("--scale", "0");

  setTimeout(() => {
    loader.remove();
  }, 1000);
}, 500);
