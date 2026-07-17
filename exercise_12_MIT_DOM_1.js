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

console.log(bodyElements);

const navContainer = document.body.children[0];
navContainer.style.height = "50px";
navContainer.style.width = "70vw";
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

// Main Big Text Container
const bigContainer = document.body.children[1];
bigContainer.style.height = "200px";
bigContainer.style.width = "70vw";
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
// Big Container Text 1
const bigContainerText1 = bigContainer.children[0];
bigContainerText1.style.color = "rgb(55, 192, 236)";
bigContainerText1.style.margin = "0px";
bigContainerText1.style.fontSize = "40px";

// console.log(bigContainerText1);
// Big Text Container Text 2
const bigContainerText2 = bigContainer.children[1];
bigContainerText2.style.color = "gray";
bigContainerText2.style.margin = "10px 0px 0px 0px";
bigContainerText2.style.fontSize = "16px";

// console.log(bigContainerText2);

// Main Cards Container
const cardsContainer = document.body.children[2];
cardsContainer.style.display = "flex";
cardsContainer.style.gap = "20px";
cardsContainer.style.width = "70vw";
cardsContainer.style.padding = "0px 20px";

console.log(cardsContainer);

const cards = document.body.children[2].children;
console.log(cards)

for(let i = 0; i < cards.length; i++){
cards.style.height = "200px";
cards.style.width = "30vw";
cards.style.borderWidth = "5px 0px 0px 0px";
cards.style.borderStyle = "solid";
cards.style.borderRadius = "15px"
cards.style.padding = "20px 10px ";
cards.style.display = "flex";
cards.style.flexDirection = "column";
cards.style.justifyContent = "space-between";
cards.style.alignItems = "left";
cards.style.gap = "10px";
cards.style.backgroundColor = "rgb(29,40,58)";
}
















































// Card 1
// const card1 = cardContainer.children[0];
// card1.style.height = "200px";
// card1.style.width = "30vw";
// card1.style.borderWidth = "5px 0px 0px 0px";
// card1.style.borderStyle = "solid";
// card1.style.borderRadius = "15px"
// card1.style.borderColor = "rgb(56,189,245)";
// card1.style.padding = "20px 10px ";
// card1.style.display = "flex";
// card1.style.flexDirection = "column";
// card1.style.justifyContent = "space-between";
// card1.style.alignItems = "left";
// card1.style.gap = "10px";
// card1.style.backgroundColor = "rgb(29,40,58)";

// console.log(card1);

// 1st Card Text 1
// const card1Content1 = card1.children[0];
// card1Content1.style.fontSize = "20px";
// card1Content1.style.color = "white";
// card1Content1.style.margin = "0px";
// card1Content1.style.padding = "0px";

// console.log(card1Content1)

// 1st Card Text 2
// const card1Content2 = card1.children[1];
// card1Content2.style.fontSize = "14px";
// card1Content2.style.color = "gray";
// card1Content2.style.margin = "0px";
// card1Content2.style.padding = "0px";
// card1Content2.style.width = "250px";

// 1st Card Text 3
// const card1Content3 = card1.children[2];
// card1Content3.style.fontSize = "14px";
// card1Content3.style.color = "purple";
// card1Content3.style.margin = "0px";
// card1Content3.style.padding = "0px";

// console.log(card1Content3);

// Card 2
// const card2 = cardContainer.children[1];
// card2.style.height = "fit-content";
// card2.style.width = "30vw";
// card2.style.borderTop = "5px solid";
// card2.style.borderRadius = " 15px"
// card2.style.borderColor = "rgb(104, 155, 219)";
// card2.style.padding = "10px";
// card2.style.display = "flex";
// card2.style.flexDirection = "column";
// card2.style.justifyContent = "left";
// card2.style.gap = "10px";
// card2.style.backgroundColor = "rgb(29,40,58)";
// card2.style.shadow = "10px";
// card2.style.shadowColor = "blue";

// 2nd card Text 1
// const card2Content1 = card2.children[0];
// card2Content1.style.fontSize = "20px";
// card2Content1.style.color = "white";
// card2Content1.style.margin = "0px";
// card2Content1.style.padding = "0px";

// 2nd Card Text 2
// const card2Content2 = card2.children[1];
// card2Content2.style.fontSize = "14px";
// card2Content2.style.color = "gray";
// card2Content2.style.margin = "0px";
// card2Content2.style.padding = "0px";
// card2Content2.style.width = "250px";

// 2nd Card Text 3
// const card2Content3 = card2.children[2];
// card2Content3.style.fontSize = "14px";
// card2Content3.style.color = "blue";
// card2Content3.style.margin = "0px";
// card2Content3.style.padding = "0px";

// Card 3
// const card3 = cardContainer.children[2];
// card3.style.height = "fit-content";
// card3.style.width = "30vw";
// card3.style.borderTop = "5px solid";
// card3.style.borderRadius = " 15px"
// card3.style.borderColor = "beige";
// card3.style.padding = "10px";
// card3.style.display = "flex";
// card3.style.flexDirection = "column";
// card3.style.justifyContent = "left";
// card3.style.gap = "10px";
// card3.style.backgroundColor = "rgb(29,40,58)";

// 3rd Card Text1
// const card3Content1 = card3.children[0];
// card3Content1.style.fontSize = "20px";
// card3Content1.style.color = "white";
// card3Content1.style.margin = "0px";
// card3Content1.style.padding = "0px";

// 3rd Card Text2
// const card3Content2 = card3.children[1];
// card3Content2.style.fontSize = "14px";
// card3Content2.style.color = "gray";
// card3Content2.style.margin = "0px";
// card3Content2.style.padding = "0px";
// card3Content2.style.width = "250px";

// 3rd Card Text 3
// const card3Content3 = card3.children[2];
// card3Content3.style.fontSize = "14px";
// card3Content3.style.color = "beige";
// card3Content3.style.margin = "0px";
// card3Content3.style.padding = "0px";

// Hr / Line
// const line = document.body.children[3];
// line.style.height = "500px";

// Footer Text
// const footerText = document.body.children[4];
// footerText.style.color = "gray";
