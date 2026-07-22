
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
    const capabilityCardTitle = capabilityCards[i].children[0];
    capabilityCardTitle.style.fontSize = '16px';
    capabilityCardTitle.style.fontWeight = '600';
    capabilityCardTitle.style.color = 'white';

    // Style the description (2nd paragraph inside the card)
    const capabilityCardDesc = capabilityCards[i].children[1];
    capabilityCardDesc.style.fontSize = '13px';
    capabilityCardDesc.style.color = 'gray';
    capabilityCardDesc.style.lineHeight = '1.5';

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
};

// Numbers Section
const numbersSectionContainer = document.body.children[1].children[3];
numbersSectionContainer.style.height = '300px';
numbersSectionContainer.style.width = '100%';
numbersSectionContainer.style.display = 'flex';
numbersSectionContainer.style.flexDirection = 'column';
numbersSectionContainer.style.justifyContent = 'space-around';
numbersSectionContainer.style.alignItems = 'center';
console.log(numbersSectionContainer);

// Top Horizontal Line
const numberSectionHr = numbersSectionContainer.firstElementChild;
numberSectionHr.style.width = '1000px';
numberSectionHr.style.height = '1px';
numberSectionHr.style.backgroundColor = 'gray';
numberSectionHr.style.borderWidth = '0px';
numberSectionHr.style.marginTop = '50px';

// Middle Stat Box Container (Renamed to prevent variable collision)
const statContainer = numbersSectionContainer.children[1];
statContainer.style.display = 'flex';
statContainer.style.justifyContent = 'space-between';
statContainer.style.width = '900px';

// Bottom Horizontal Line
const numberSectionHr2 = numbersSectionContainer.lastElementChild;
numberSectionHr2.style.width = '1000px';
numberSectionHr2.style.height = '1px';
numberSectionHr2.style.backgroundColor = 'gray';
numberSectionHr2.style.borderWidth = '0px';
numberSectionHr2.style.marginBottom = '50px';

// List of the 4 stat boxes
const numberSectionCards = statContainer.children;
for (let i = 0; i < numberSectionCards.length; i++) {
    // Style each stat box wrapper
    numberSectionCards[i].style.display = 'flex';
    numberSectionCards[i].style.flexDirection = 'column';
    numberSectionCards[i].style.alignItems = 'center';
    numberSectionCards[i].style.gap = '8px';

    // Target the first paragraph (e.g., "99.99%")
    const statNumber = numberSectionCards[i].firstElementChild;
    statNumber.style.color = 'blue';
    statNumber.style.fontSize = '28px';
    statNumber.style.fontWeight = '700';

    // Target the second paragraph (e.g., "UPTIME SLA")
    const statLabel = numberSectionCards[i].lastElementChild;
    statLabel.style.color = 'gray';
    statLabel.style.fontSize = '8px';
    statLabel.style.letterSpacing = '1px';
};

// Integrations Section 

const integrationSectionContainer = document.body.children[1].children[4];
integrationSectionContainer.style.height = 'fit-content';
integrationSectionContainer.style.width = '100%';
integrationSectionContainer.style.backgroundColor = 'rgb(25,25,25)';
integrationSectionContainer.style.padding = '50px 0px';
integrationSectionContainer.style.display = 'flex';
integrationSectionContainer.style.flexDirection = 'column';
integrationSectionContainer.style.alignItems = 'center';
integrationSectionContainer.style.justifyContent = 'space-between';
console.log(integrationSectionContainer);

const integrationHeading = integrationSectionContainer.firstElementChild;
integrationHeading.style.textAlign = 'center';
integrationHeading.style.display = 'flex';
integrationHeading.style.flexDirection = 'column';
integrationHeading.style.gap = '10px';

const integrationheadingChildren = integrationHeading.children;
for (let i = 0; i < integrationheadingChildren.length; i++) {
    if (i === 0) {
        // First Child: "INTEGRATIONS"
        integrationheadingChildren[i].style.fontSize = '10px';
        integrationheadingChildren[i].style.fontWeight = '700';
        integrationheadingChildren[i].style.color = 'skyBlue';
    } else {
        // Last Child: "Plays nice with others."
        integrationheadingChildren[i].style.fontSize = '26px';
        integrationheadingChildren[i].style.fontWeight = '600';
    }
};
const integrationHr = integrationSectionContainer.children[1];
integrationHr.style.width = '100%';
integrationHr.style.height = '1px';
integrationHr.style.backgroundColor = 'gray';
integrationHr.style.borderWidth = '0px';
integrationHr.style.marginTop = '20px';
integrationHr.style.marginBottom = '20px';

const integrationUlContainer = integrationSectionContainer.children[2].firstElementChild;
integrationUlContainer.style.display = 'flex';
integrationUlContainer.style.gap = '30px';
integrationUlContainer.style.listStyle = 'none';

const integrationUl = integrationUlContainer.children;
for (let i = 0; i < integrationUl.length; i++) {
    integrationUl[i].style.fontSize = '22px';
    integrationUl[i].style.color = 'gray';
    integrationUl[i].style.cursor = 'pointer';
    integrationUl[i].style.transition = 'color 0.2s ease';

    integrationUl[i].addEventListener('mouseenter', () => {
        integrationUl[i].style.color = 'white';
    });
    integrationUl[i].addEventListener('mouseleave', () => {
        integrationUl[i].style.color = 'gray';
    });
};

// // Case Study Section
// const caseStudySectionContainer = document.body.children[1].children[5];
// caseStudySectionContainer.style.width = '100%';
// caseStudySectionContainer.style.height = 'fit-content';
// caseStudySectionContainer.style.padding = '50px 0px';
// caseStudySectionContainer.style.display = 'flex';
// caseStudySectionContainer.style.flexDirection = 'column';
// caseStudySectionContainer.style.gap = '30px';

// const caseStudyHeading = caseStudySectionContainer.firstElementChild;
// caseStudyHeading.style.textAlign = 'center';
// caseStudyHeading.style.display = 'flex';
// caseStudyHeading.style.flexDirection = 'column';
// caseStudyHeading.style.gap = '10px';

// const caseStudyheadingChildren = caseStudyHeading.children;
// for (let i = 0; i < caseStudyheadingChildren.length; i++) {
//     if (i === 0) {
//         // First Child: "INTEGRATIONS"
//         caseStudyheadingChildren[i].style.fontSize = '10px';
//         caseStudyheadingChildren[i].style.fontWeight = '700';
//         caseStudyheadingChildren[i].style.color = 'skyBlue';
//     } else {
//         // Last Child: "Plays nice with others."
//         caseStudyheadingChildren[i].style.fontSize = '26px';
//         caseStudyheadingChildren[i].style.fontWeight = '600';
//     }
// };

// const caseStudyCardsContainer = caseStudySectionContainer.children[1];
// caseStudyCardsContainer.style.display = 'flex';
// caseStudyCardsContainer.style.justifyContent = 'center';
// caseStudyCardsContainer.style.gap = '20px';

// const caseStudyCards = caseStudySectionContainer.children[1].children;
// for(let i = 0; i < caseStudyCards.length; i++){
//     caseStudyCards[i].style.height = '250px';
//     caseStudyCards[i].style.width = '400px';
//     caseStudyCards[i].style.backgroundColor = 'gray';
//     caseStudyCards[i].style.padding = '12px';
//     caseStudyCards[i].style.borderRadius = '10px';
//     caseStudyCards[i].style.gap = '20px';

//      const caseStudyCardTitle = caseStudyCards[i].children[0];
//     caseStudyCardTitle.style.fontSize = '16px';
//     caseStudyCardTitle.style.fontWeight = '600';
//     caseStudyCardTitle.style.color = 'white';
//     caseStudyCardTitle.style.position = 'bottom';

//     // Style the description (2nd paragraph inside the card)
//     const caseStudyCardDesc = caseStudyCards[i].children[1];
//     caseStudyCardDesc.style.fontSize = '13px';
//     caseStudyCardDesc.style.color = 'gray';
//     caseStudyCardDesc.style.lineHeight = '1.5';
//     caseStudyCardDesc.style.position = 'bottom 5px';

//     // --- 2. Base Style & Smooth Transitions ---
//     caseStudyCards[i].style.backgroundColor = 'black';
//     caseStudyCards[i].style.border = '1px solid rgba(255, 255, 255, 0.05)'; // Base subtle border
//     caseStudyCards[i].style.transition = 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';

//     // --- 3. Mouse Enter (Hover State) ---
//     caseStudyCards[i].addEventListener('mouseenter', () => {
//         caseStudyCards[i].style.transform = 'scale(1.05)';
//         caseStudyCards[i].style.backgroundColor = 'rgb(18, 18, 18)';
//         caseStudyCards[i].style.borderColor = 'skyBlue';
//         caseStudyCards[i].style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.5)';
//     });

//     // --- 4. Mouse Leave (Reset State) ---
//     caseStudyCards[i].addEventListener('mouseleave', () => {
//         caseStudyCards[i].style.transform = 'scale(1)';
//         caseStudyCards[i].style.backgroundColor = 'darkNavy'; 
//         caseStudyCards[i].style.borderColor = 'rgba(255, 255, 255, 0.05)';
//         caseStudyCards[i].style.boxShadow = 'none';
//     });
// };
// console.log(caseStudyCards);

// Case Study Section
const caseStudySectionContainer = document.body.children[1].children[5];
caseStudySectionContainer.style.width = '100%';
caseStudySectionContainer.style.height = 'fit-content';
caseStudySectionContainer.style.padding = '50px 0px';
caseStudySectionContainer.style.display = 'flex';
caseStudySectionContainer.style.flexDirection = 'column';
caseStudySectionContainer.style.alignItems = 'center';
caseStudySectionContainer.style.gap = '30px';

const caseStudyHeading = caseStudySectionContainer.firstElementChild;
caseStudyHeading.style.textAlign = 'center';
caseStudyHeading.style.display = 'flex';
caseStudyHeading.style.flexDirection = 'column';
caseStudyHeading.style.gap = '10px';

const caseStudyheadingChildren = caseStudyHeading.children;
for (let i = 0; i < caseStudyheadingChildren.length; i++) {
    if (i === 0) {
        caseStudyheadingChildren[i].style.fontSize = '10px';
        caseStudyheadingChildren[i].style.fontWeight = '700';
        caseStudyheadingChildren[i].style.color = 'skyBlue';
    } else {
        caseStudyheadingChildren[i].style.fontSize = '26px';
        caseStudyheadingChildren[i].style.fontWeight = '600';
    }
}

const caseStudyCardsContainer = caseStudySectionContainer.children[1];
caseStudyCardsContainer.style.display = 'flex';
caseStudyCardsContainer.style.justifyContent = 'center';
caseStudyCardsContainer.style.gap = '20px';

const caseStudyCards = caseStudyCardsContainer.children;
for (let i = 0; i < caseStudyCards.length; i++) {
    // 1. Flexbox layout to push content to the bottom-left
    caseStudyCards[i].style.height = '250px';
    caseStudyCards[i].style.width = '400px';
    caseStudyCards[i].style.padding = '24px';
    caseStudyCards[i].style.borderRadius = '10px';
    caseStudyCards[i].style.display = 'flex';
    caseStudyCards[i].style.flexDirection = 'column';
    caseStudyCards[i].style.justifyContent = 'flex-end'; // Pushes children to the bottom
    caseStudyCards[i].style.alignItems = 'flex-end';   // Aligns children to the left
    caseStudyCards[i].style.gap = '8px';
    
    // Base styles & smooth transitions
    caseStudyCards[i].style.backgroundColor = 'rgb(10, 10, 10)';
    caseStudyCards[i].style.border = '1px solid rgba(255, 255, 255, 0.05)';
    caseStudyCards[i].style.transition = 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';

    // 2. Style title (Top text inside bottom group)
    const caseStudyCardTitle = caseStudyCards[i].children[0];
    caseStudyCardTitle.style.fontSize = '18px';
    caseStudyCardTitle.style.fontWeight = '600';
    caseStudyCardTitle.style.color = 'white';

    // 3. Style description (Bottom text inside bottom group)
    const caseStudyCardDesc = caseStudyCards[i].children[1];
    caseStudyCardDesc.style.fontSize = '13px';
    caseStudyCardDesc.style.color = 'gray';
    caseStudyCardDesc.style.lineHeight = '1.5';

    // 4. Hover Listeners
    caseStudyCards[i].addEventListener('mouseenter', () => {
        caseStudyCards[i].style.transform = 'scale(1.03)';
        caseStudyCards[i].style.backgroundColor = 'rgb(20, 20, 20)';
        caseStudyCards[i].style.borderColor = 'skyBlue';
        caseStudyCards[i].style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.5)';
    });

    caseStudyCards[i].addEventListener('mouseleave', () => {
        caseStudyCards[i].style.transform = 'scale(1)';
        caseStudyCards[i].style.backgroundColor = 'rgb(10, 10, 10)'; 
        caseStudyCards[i].style.borderColor = 'rgba(255, 255, 255, 0.05)';
        caseStudyCards[i].style.boxShadow = 'none';
    });
};
