const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://1000logos.net/wp-content/uploads/2018/05/Mozilla-Firefox-Logo-2004-640x360.jpg") {
    myImage.setAttribute("src", "https://1000logos.net/wp-content/uploads/2018/05/Mozilla-Firefox-Logo-2002-640x360.jpg");
  } else {
    myImage.setAttribute("src", "https://1000logos.net/wp-content/uploads/2018/05/Mozilla-Firefox-Logo-2004-640x360.jpg");
  }
};

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
  };

  
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  