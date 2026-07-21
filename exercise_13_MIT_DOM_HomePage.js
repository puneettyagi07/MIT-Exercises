const body = document.body;
body.style.backgroundColor = "black";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.color = "white";

const bodyElements = document.body.children;
// console.log(bodyElements);

// Nav Section
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
navRight.style.listStyle = "none";
navRight.style.display = "flex";
navRight.style.gap = "20px";
navRight.style.color = "rgb(211, 222, 220)";
// console.log(navRight);

// Main Container
const mainContainer = document.body.children[1];
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";
console.log(mainContainer);

// Modern Web Section
const topHeadSectionContainer = document.body.children[1].children[0];
topHeadSectionContainer.style.display = "flex";
topHeadSectionContainer.style.flexDirection = "column";
topHeadSectionContainer.style.alignItems = "center";
topHeadSectionContainer.style.justifyContent = "center";
topHeadSectionContainer.style.marginTop = "20px";
topHeadSectionContainer.style.width = "500px";
console.log(topHeadSectionContainer);

const modernWebHeading = topHeadSectionContainer.firstElementChild;
modernWebHeading.style.fontSize = "56px";
modernWebHeading.style.fontWeight = "400";
modernWebHeading.style.display = "flex";
modernWebHeading.style.textAlign = "center";
// console.log(modernWebHeading);

const modernWebSpan = modernWebHeading.children[0].children[0];
modernWebSpan.style.backgroundImage = 'linear-gradient(to right, lightskyblue, blue)';
modernWebSpan.style.backgroundClip = 'text';
modernWebSpan.style.color = 'transparent';
// modernWebSpan.style.webkitBackgroundClip = 'text';
// modernWebSpan.style.webkitTextFillColor = 'transparent';
// console.log(modernWebSpan);

const modernWebPara = topHeadSectionContainer.children[1];
modernWebPara.style.fontSize = '12px';
modernWebPara.style.color = 'gray';
modernWebPara.style.textAlign = 'center';
modernWebPara.style.width = '350px';
modernWebPara.style.marginTop = '20px';
// console.log(modernWebPara);

const modernWebBtnSection = topHeadSectionContainer.children[2];
modernWebBtnSection.style.display = 'flex';
modernWebBtnSection.style.gap = '20px';
modernWebBtnSection.style.marginTop = '20px';
// console.log(modernWebBtnSection);

const modernWebBtn = modernWebBtnSection.children;

for (let i = 0; i < modernWebBtn.length; i++) {
    // --- 1. Base Styles (Apply default look when page loads) ---
    modernWebBtn[i].style.padding = "10px 24px";
    modernWebBtn[i].style.fontSize = "14px";
    modernWebBtn[i].style.fontWeight = "500";
    modernWebBtn[i].style.borderRadius = "6px";
    modernWebBtn[i].style.cursor = "pointer";
    // 1-2 shades lighter than pure black for a sleek dark mode look
    modernWebBtn[i].style.backgroundColor = "rgb(18, 18, 18)";
    modernWebBtn[i].style.color = "white";
    modernWebBtn[i].style.border = "1px solid white";
    // Smooth transition handles scaling, background flips, and text colors simultaneously
    modernWebBtn[i].style.transition = "transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease";
    // --- 2. Hover Effect (Mouse Enters) ---
    modernWebBtn[i].addEventListener("mouseenter", () => {
        modernWebBtn[i].style.transform = "scale(1.05)";
        modernWebBtn[i].style.backgroundColor = "white";
        modernWebBtn[i].style.color = "black";
        modernWebBtn[i].style.borderColor = "white";
    });
    // --- 3. Reset Effect (Mouse Leaves) ---
    modernWebBtn[i].addEventListener("mouseleave", () => {
        modernWebBtn[i].style.transform = "scale(1)";
        // Returns safely back to the dark outline design
        modernWebBtn[i].style.backgroundColor = "rgb(18, 18, 18)";
        modernWebBtn[i].style.color = "white";
        modernWebBtn[i].style.border = "1px solid white";
    });
}
// console.log(modernWebBtn);

// MIT Section 
const mitSectionContainer = document.body.children[1].children[1];
mitSectionContainer.style.marginTop = '100px';
mitSectionContainer.style.display = 'flex';
mitSectionContainer.style.flexDirection = 'column';
mitSectionContainer.style.alignItems = 'center';
mitSectionContainer.style.gap = '20px';
console.log(mitSectionContainer);

const mitSectionHeading = mitSectionContainer.firstElementChild;
mitSectionHeading.style.textAlign = 'center';
mitSectionHeading.style.display = 'flex';
mitSectionHeading.style.flexDirection = 'column';
mitSectionHeading.style.gap = '10px';
// console.log(mitSectionHeading);

const mitSectionHeadingFirstDiv = mitSectionHeading.firstElementChild;
mitSectionHeadingFirstDiv.style.fontSize = '10px';
mitSectionHeadingFirstDiv.style.fontWeight = '700';
mitSectionHeadingFirstDiv.style.color = 'skyBlue';

const mitSectionHeadingLastDiv = mitSectionHeading.lastElementChild;
mitSectionHeadingLastDiv.style.fontSize = '26px';
mitSectionHeadingLastDiv.style.fontWeight = '600';

const mitSectionPara = mitSectionContainer.lastElementChild;
mitSectionPara.style.display = 'flex';
mitSectionPara.style.alignItems = 'center';
mitSectionPara.style.gap = '30px';
// console.log(mitSectionPara);

const mitParaChildren = mitSectionPara.children; // Array containing [<p>, <p>]

for (let i = 0; i < mitParaChildren.length; i++) {
    // Basic Box Layout Styles
    mitParaChildren[i].style.height = '122px';
    mitParaChildren[i].style.width = '450px';
    mitParaChildren[i].style.letterSpacing = '2px';
    mitParaChildren[i].style.fontSize = '12px';
    mitParaChildren[i].style.padding = '12px';
    mitParaChildren[i].style.borderRadius = "12px";
    mitParaChildren[i].style.border = "1px solid transparent";
    mitParaChildren[i].style.backgroundColor = "transparent";
    mitParaChildren[i].style.cursor = "pointer";
    mitParaChildren[i].style.transition = "transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease";

    // Set Text Color Based on Which Box We Are Currently On
    i === 0 ? mitParaChildren[i].style.color = 'gray' : mitParaChildren[i].style.color = 'skyBlue';

    // Hover Listeners
    mitParaChildren[i].addEventListener("mouseenter", () => {
        mitParaChildren[i].style.transform = "scale(1.03)";
        mitParaChildren[i].style.backgroundColor = "rgb(25, 25, 25)";
        mitParaChildren[i].style.borderColor = "rgba(255, 255, 255, 0.15)";
    });

    mitParaChildren[i].addEventListener("mouseleave", () => {
        mitParaChildren[i].style.transform = "scale(1)";
        mitParaChildren[i].style.backgroundColor = "transparent";
        mitParaChildren[i].style.borderColor = "transparent";
    });
}

// Capability Section
const capabilitySectionContainer = document.body.children[1].children[2];
capabilitySectionContainer.style.marginTop = '60px';
capabilitySectionContainer.style.backgroundColor = 'rgb(25, 25, 25)';
capabilitySectionContainer.style.display = 'flex';
capabilitySectionContainer.style.flexDirection = 'column';
// capabilitySectionContainer.style.justifyContent = 'center';
capabilitySectionContainer.style.alignItems = 'center';
capabilitySectionContainer.style.gap = '20px';
capabilitySectionContainer.style.height = 'fit-content';
capabilitySectionContainer.style.width = '100%';
capabilitySectionContainer.style.padding = '60px 15px';
console.log(capabilitySectionContainer);

const capabilitySectionHeading = capabilitySectionContainer.firstElementChild;
capabilitySectionHeading.style.textAlign = 'center';
capabilitySectionHeading.style.display = 'flex';
capabilitySectionHeading.style.flexDirection = 'column';
capabilitySectionHeading.style.gap = '10px';

const capabilitySectionHeadingFirstDiv = capabilitySectionHeading.firstElementChild;
capabilitySectionHeadingFirstDiv.style.fontSize = '10px';
capabilitySectionHeadingFirstDiv.style.fontWeight = '700';
capabilitySectionHeadingFirstDiv.style.color = 'skyBlue';

const capabilitySectionHeadingLastDiv = capabilitySectionHeading.lastElementChild;
capabilitySectionHeadingLastDiv.style.fontSize = '26px';
capabilitySectionHeadingLastDiv.style.fontWeight = '600';

const capabilitySectionCards = capabilitySectionContainer.lastElementChild;
capabilitySectionCards.style.display = 'flex';
capabilitySectionCards.style.flexWrap = 'wrap';
capabilitySectionCards.style.justifyContent = 'center';
capabilitySectionCards.style.width = '1000px';
capabilitySectionCards.style.alignItems = 'center';
capabilitySectionCards.style.gap = '30px';
// console.log(capabilitySectionCards);

const capabilityCards = capabilitySectionCards.children;
for(let i = 0; i < capabilityCards.length; i++) {
    capabilityCards[i].style.height = '150px';
    capabilityCards[i].style.width = '300px';
    capabilityCards[i].style.padding = '24px';
    capabilityCards[i].style.borderRadius = '12px';
    capabilityCards[i].style.cursor = 'pointer';
    capabilityCards[i].style.display = 'flex';
    capabilityCards[i].style.flexDirection = 'column';
    capabilityCards[i].style.justifyContent = 'flex-start';
    capabilityCards[i].style.gap = '12px';

    // Style the title (1st paragraph inside the card)
    const cardTitle = capabilityCards[i].children[0];
    cardTitle.style.fontSize = '16px';
    cardTitle.style.fontWeight = '600';
    cardTitle.style.color = 'white';

    // Style the description (2nd paragraph inside the card)
    const cardDesc = capabilityCards[i].children[1];
    cardDesc.style.fontSize = '13px';
    cardDesc.style.color = 'gray';
    cardDesc.style.lineHeight = '1.5';

    // --- 2. Base Style & Smooth Transitions ---
    capabilityCards[i].style.backgroundColor = 'black';
    capabilityCards[i].style.border = '1px solid rgba(255, 255, 255, 0.05)'; // Base subtle border
    capabilityCards[i].style.transition = 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';

    // --- 3. Mouse Enter (Hover State) ---
    capabilityCards[i].addEventListener('mouseenter', () => {
        capabilityCards[i].style.transform = 'scale(1.05)';
        capabilityCards[i].style.backgroundColor = 'rgb(18, 18, 18)'; // Slightly lighter black
        capabilityCards[i].style.borderColor = 'skyBlue'; // Accent blue border on hover
        capabilityCards[i].style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.5)';
    });

    // --- 4. Mouse Leave (Reset State) ---
    capabilityCards[i].addEventListener('mouseleave', () => {
        capabilityCards[i].style.transform = 'scale(1)';
        capabilityCards[i].style.backgroundColor = 'black'; // Resets cleanly back to black!
        capabilityCards[i].style.borderColor = 'rgba(255, 255, 255, 0.05)';
        capabilityCards[i].style.boxShadow = 'none';
    });
}

// Numbers Section
const numbersSectionContainer = document.body.children[1].children[3];
numbersSectionContainer.style.height = '400px'
numbersSectionContainer.style.width = '100%'
numbersSectionContainer.style.display = 'flex';
numbersSectionContainer.style.flexDirection = 'column';
numbersSectionContainer.style.justifyContent = 'center';
