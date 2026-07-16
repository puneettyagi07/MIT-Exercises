const body = document.body;
body.style.backgroundColor = "rgb(15,23,42)";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.gap = "20px";
body.style.alignItems = "center";
body.style.fontFamily = "Arial, Helvetica, sans-serif";
body.style.boxSizing = "border-box"

const bodyElements = document.body.children
console.log(bodyElements);

const navContainer = document.body.children[0];
navContainer.style.height = "50px";
navContainer.style.width = "90vw";
navContainer.style.backgroundColor = "rgb(29,40,58)";
navContainer.style.borderLeft = "5px solid"
navContainer.style.borderColor = "rgb(104, 155, 219)";
navContainer.style.borderRadius = "15px";
navContainer.style.display = "flex";
navContainer.style.alignItems = "center";
navContainer.style.padding = "5px 20px 5px 20px";

const navPara= document.body.children[0].firstElementChild;
navPara.style.color="white";

const bigContainer = document.body.children[1];
bigContainer.style.height = "250px";
bigContainer.style.width = "90vw";
bigContainer.style.backgroundColor = "rgb(29,40,58)";
bigContainer.style.border = "0.005px solid";
bigContainer.style.borderColor = "white";
bigContainer.style.borderRadius = "15px";
bigContainer.style.display = "flex";
bigContainer.style.flexDirection = "column";
bigContainer.style.justifyContent = "center";
bigContainer.style.alignItems = "center";
bigContainer.style.padding = "5px 20px 5px 20px";




