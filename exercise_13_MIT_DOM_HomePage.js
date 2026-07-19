const body = document.body;
body.style.backgroundColor = "black";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.color = "white";

const bodyElements = document.body.children;
// console.log(bodyElements);

const nav = document.body.children[0];
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.height = "fit-content";
nav.style.padding = "20px 60px";
nav.style.borderBottom = "0.5px solid gray";
// console.log(nav);

const navLeft = nav.children[0]
navLeft.style.fontWeight = "700";
// console.log(navLeft);

const navLeft_span = navLeft.firstElementChild;
navLeft_span.style.color = "blue";
navLeft_span.style.fontSize = "20px";
// console.log(navLeft_span);

const navRight = nav.children[1].firstElementChild;
navRight.style.listStyle =  "none";
navRight.style.display =  "flex";
navRight.style.gap =  "20px";
navRight.style.color =  "rgb(211, 222, 220)";

// console.log(navRight);

const mainContainer = document.body.children[1];
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";
console.log(mainContainer);

const topSectionHead = document.body.children[1].children[0];
topSectionHead.style.display = "flex";
topSectionHead.style.flexDirection = "column";
topSectionHead.style.alignItems = "center";
topSectionHead.style.justifyContent = "center";
topSectionHead.style.marginTop = "20px";
topSectionHead.style.width = "500px";

console.log(topSectionHead);

const modernWeb = topSectionHead.firstElementChild;
modernWeb.style.fontSize = "56px";
modernWeb.style.fontWeight = "400";
modernWeb.style.display = "flex";
modernWeb.style.textAlign = "center";

console.log(modernWeb);

const modernWebSpan = modernWeb.children[0].children[0];
modernWebSpan.style.linerGradien = ""
element.style.backgroundImage = 'linear-gradient(to right, lightskyblue, blue)';

console.log(modernWebSpan);



