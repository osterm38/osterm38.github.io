const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/reflection1.jpeg") {
    myImage.setAttribute("src", "images/reflection2.jpeg");
  } else {
    myImage.setAttribute("src", "images/reflection1.jpeg");
  }
};
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
};

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  