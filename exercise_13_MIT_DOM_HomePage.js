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
// console.log(mainContainer);

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
mitSectionPara.style.gap = '10px';
console.log(mitSectionPara);

const mitSectionParaFirstDiv = mitSectionPara.firstElementChild;
mitSectionParaFirstDiv.style.height = '122px';
mitSectionParaFirstDiv.style.width = '400px';
mitSectionParaFirstDiv.style.letterSpacing = '2px';
mitSectionParaFirstDiv.style.color = 'gray';
mitSectionParaFirstDiv.style.fontSize = '12px';
mitSectionParaFirstDiv.style.padding = '12px';

const mitSectionParaLastDiv = mitSectionPara.lastElementChild;
mitSectionParaLastDiv.style.height = '122px';
mitSectionParaLastDiv.style.width = '400px';
mitSectionParaLastDiv.style.letterSpacing = '2px';
mitSectionParaLastDiv.style.color = 'skyBlue';
mitSectionParaLastDiv.style.fontSize = '12px';
mitSectionParaLastDiv.style.padding = '12px';


