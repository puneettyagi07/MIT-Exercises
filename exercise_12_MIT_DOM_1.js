const body = document.body;
body.style.backgroundColor = "rgb(15,23,42)";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.gap = "20px";
body.style.alignItems = "center";
body.style.fontFamily = "Arial, Helvetica, sans-serif";
body.style.boxSizing = "border-box"
body.style.margin = "0px";
body.style.padding = "0px";

// console.log(body);

const bodyElements = document.body.children

// console.log(bodyElements);

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

// console.log(navContainer);

const navPara= document.body.children[0].firstElementChild;
navPara.style.color="white";
navPara.style.margin ="0px";
navPara.style.padding ="0px";

// console.log(navPara);

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

// console.log(bigContainer);

const bigContainerText1 = bigContainer.children[0];
bigContainerText1.style.color = "rgb(55, 192, 236)";
bigContainerText1.style.margin = "0px";
bigContainerText1.style.fontSize = "40px";

// console.log(bigContainerText1);

const bigContainerText2 = bigContainer.children[1];
bigContainerText2.style.color = "gray";
bigContainerText2.style.margin = "10px 0px 0px 0px";
bigContainerText2.style.fontSize = "16px";

// console.log(bigContainerText2);

const cardContainer = document.body.children[2];
cards.style.display = "flex";
cards.style.gap = "20px";
cards.style.width = "90vw";
cards.style.padding = `0px 20px`;

console.log(cards);

// const cards; 
// for(let i = 0; i < cardContainer.clientHeight; i++){
// cardContainer.style.height = "fit-content";
// cardContainer.style.width = "30vw";
// cardContainer.style.border = "5px 0px 0px 0px solid";
// cardContainer.style.borderRadius = " 15px"
// cardContainer.style.borderColor = "purple";
// }

const card1 = cards.children[0];
card1.style.height = "fit-content";
card1.style.width = "30vw";
card1.style.border = "5px 0px 0px 0px solid";
card1.style.borderRadius = " 15px"
card1.style.borderColor = "purple";
card1.style.padding = "10px";
card1.style.display = "flex";
card1.style.flexDirection = "column";
card1.style.justifyContent = "left";
card1.style.gap = "10px";

// console.log(card1);

const card1Content = card1.children[0];
card1Content.style.fontSize = "20px";
card1Content.style.color = "white";
card1Content.style.margin = "0px";
card1Content.style.padding = "0px";

const card1Content = card1.children[1];
card1Content.style.fontSize = "14px";
card1Content.style.color = "gray";
card1Content.style.margin = "0px";
card1Content.style.padding = "0px";
card1Content.style.width = "70px";

const card1Content = card1.children[2];
card1Content.style.fontSize = "14px";
card1Content.style.color = "purple";
card1Content.style.margin = "0px";
card1Content.style.padding = "0px";


const card2 = cards.children[1];
card2.style.height = "fit-content";
card2.style.width = "30vw";
card2.style.border = "5px 0px 0px 0px solid";
card2.style.borderRadius = " 15px"
card2.style.borderColor = "rgb(104, 155, 219)";
card2.style.padding = "10px";
card2.style.display = "flex";
card2.style.flexDirection = "column";
card2.style.justifyContent = "left";
card2.style.gap = "10px";
card2.style.shadow = "10px";
card2.style.shadowColor = "blue";

const card2Content = card2.children[0];
card2Content.style.fontSize = "20px";
card2Content.style.color = "white";
card2Content.style.margin = "0px";
card2Content.style.padding = "0px";

const card2Content = card2.children[1];
card2Content.style.fontSize = "14px";
card2Content.style.color = "gray";
card2Content.style.margin = "0px";
card2Content.style.padding = "0px";
card2Content.style.width = "70px";

const card2Content = card2.children[2];
card2Content.style.fontSize = "14px";
card2Content.style.color = "blue";
card2Content.style.margin = "0px";
card2Content.style.padding = "0px";

const card3 = cards.children[2];
card3.style.height = "fit-content";
card3.style.width = "30vw";
card3.style.border = "5px 0px 0px 0px solid";
card3.style.borderRadius = " 15px"
card3.style.borderColor = "beige";
card3.style.padding = "10px";
card3.style.display = "flex";
card3.style.flexDirection = "column";
card3.style.justifyContent = "left";
card3.style.gap = "10px";

const card3Content = card3.children[0];
card3Content.style.fontSize = "20px";
card3Content.style.color = "white";
card3Content.style.margin = "0px";
card3Content.style.padding = "0px";

const card3Content = card3.children[1];
card3Content.style.fontSize = "14px";
card3Content.style.color = "gray";
card3Content.style.margin = "0px";
card3Content.style.padding = "0px";
card3Content.style.width = "70px";

const card3Content = card3.children[2];
card3Content.style.fontSize = "14px";
card3Content.style.color = "beige";
card3Content.style.margin = "0px";
card3Content.style.padding = "0px";
