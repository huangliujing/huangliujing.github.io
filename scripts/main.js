const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  console.log(mySrc);
  if (mySrc === "images/dog-small.jpg") {
    myImage.setAttribute("src", "images/dog-mediem.jpg");
  } else {
    myImage.setAttribute("src", "images/dog-small.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if(myName != null){
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
