import jquery from "jquery";
import "./main.css";
import image from "./assets/kyKz5.png";

console.log({ jquery });

const pic = document.createElement("img");
pic.setAttribute("src", image);
document.body.appendChild(pic);