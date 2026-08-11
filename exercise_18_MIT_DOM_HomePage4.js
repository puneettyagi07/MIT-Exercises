const body = document.body.children;

// ******************** Navigation Section ********************
const nav = document.getElementsByTagName('nav')[0];
nav.style.display = 'flex';
nav.style.justifyContent = 'space-around';
nav.style.alignItems = 'center';
nav.style.padding = '10px 0';
// console.log(nav);

const logo = document.getElementsByClassName('logo')[0];
logo.style.fontSize = '22px';
logo.style.fontWeight = '900';
// console.log(logo);

const menuSection = document.getElementsByClassName('menuSection')[0].firstElementChild;
menuSection.style.display = 'flex';
menuSection.style.listStyle = 'none';
menuSection.style.gap = '50px';
menuSection.style.fontSize = '14px';
menuSection.style.fontWeight = '600';
// console.log(menuSection);

// ******************** Vibrant Color Section ********************
const vibrantColorSection = document.getElementById(`vibrant_color`);
vibrantColorSection.style.height = `fit-content`;
vibrantColorSection.style.width = `100%`;
vibrantColorSection.style.display = `flex`;
vibrantColorSection.style.gap = `30px`;
vibrantColorSection.style.alignItems = `center`;
vibrantColorSection.style.justifyContent = `space-around`;
vibrantColorSection.style.padding = `100px 50px 50px 50px`;
vibrantColorSection.style.backgroundImage = "linear-gradient(to top, rgb(255, 253, 208, 0.3), rgb(245, 245, 220, 0.3))";

const section_1_leftSide = document.querySelector('.section_1_left');
section_1_leftSide.style.display = `flex`;
section_1_leftSide.style.flexDirection = `column`;
section_1_leftSide.style.alignItems = `flex-start`;
section_1_leftSide.style.gap = `20px`;

const section_1_left_h1 = document.getElementsByClassName('Heading_H1')[0];
section_1_left_h1.style.fontSize = `42px`;
section_1_left_h1.style.fontWeight = `600`;
section_1_left_h1.style.width = `292px`;

const span = document.getElementsByTagName('span');
for (let i = 0; i < span.length; i++) {
  span[i].style.color = "rgb(231, 84, 128)";
}

// Applying Font size for all subPara elements
const subPara = document.querySelectorAll('.sub_para');
for (let i = 0; i < subPara.length; i++) {
  subPara[i].style.fontSize = '12px';
}

const section_1_left_para = document.getElementsByClassName('sub_para')[0];
section_1_left_para.style.width = '415px';
section_1_left_para.style.lineHeight = '20px';

const green_buttons = document.getElementsByClassName('green_btn');
for (let i = 0; i < green_buttons.length; i++) {
  green_buttons[i].style.padding = '8px 18px';
  green_buttons[i].style.border = 'none';
  green_buttons[i].style.borderRadius = '24px';
  green_buttons[i].style.backgroundColor = 'green';
  green_buttons[i].style.color = 'white';
  green_buttons[i].style.cursor = 'pointer';
}

const section_1_right_img = document.getElementsByTagName('img')[0];
section_1_right_img.style.border = 'none';
section_1_right_img.style.borderRadius = '16px';
section_1_right_img.style.boxShadow = "10px 10px 0px 0px yellow";
section_1_right_img.style.height = '400px';
section_1_right_img.style.width = '700px';

// ******************** Our Services Section ********************
const serviceSection = document.getElementById("services");
serviceSection.style.height = 'fit-content';
serviceSection.style.width = '100%';
serviceSection.style.padding = '60px 25px';
serviceSection.style.display = 'flex';
serviceSection.style.flexDirection = 'column';
serviceSection.style.alignItems = 'center';
serviceSection.style.textAlign = 'center';
serviceSection.style.gap = '30px';

const serviceHeadingSection = document.querySelector('.service_heading');
serviceHeadingSection.style.display = 'flex';
serviceHeadingSection.style.flexDirection = 'column';
serviceHeadingSection.style.gap = '15px';

const h3 = document.querySelectorAll('.Heading_H3');
h3.forEach(element => {
    element.style.fontSize = '22px';
    element.style.fontWeight = '600';
});

const serviceContentSection = document.querySelector('.service_content');
serviceContentSection.style.display = 'flex';
serviceContentSection.style.maxWidth = '1000px';
serviceContentSection.style.gap = '20px';
serviceContentSection.style.justifyContent = 'flex-start';
serviceContentSection.style.alignItems = 'center';
serviceContentSection.style.flexWrap = 'wrap';

const serviceCards = document.querySelectorAll('.card');
serviceCards.forEach((value) => {
    value.style.height = '200px';
    value.style.width = '300px';
    value.style.backgroundColor = 'rgb(208, 225, 233, 0.2)';
    value.style.borderRadius = '12px';
    value.style.padding = '30px 20px';
    value.style.display = 'flex';
    value.style.flexDirection = 'column';
    value.style.gap = '10px';
    value.style.alignItems = 'center';
});

const serviceCardsIcon = document.querySelectorAll('.icon');
const bgColors = ['blue', 'green', 'pink', 'yellow'];

serviceCardsIcon.forEach((value, index) => {
    value.style.height = '70px';
    value.style.width = '70px';
    value.style.padding = '8px 8px';
    value.style.borderRadius = '8px';
    value.style.display = 'flex';
    value.style.alignItems = 'center';
    value.style.justifyContent = 'center';
    value.style.color = 'white';
    
    if (index === 3) {
        value.style.color = 'black';
    }

    if (bgColors[index]) {
        value.style.backgroundColor = bgColors[index];
    }
});

const h5Color = document.getElementsByTagName('h5');
const h5Colors = ['#0284c7', '#16a34a', '#db2777', '#ca8a04']; 

for (let i = 0; i < h5Color.length; i++) {
    h5Color[i].style.fontSize = '14px';
    h5Color[i].style.color = h5Colors[i % h5Colors.length];
}

// ******************** Imagination Section ********************
const imaginationSection = document.getElementById("imagination");
imaginationSection.style.height = 'fit-content';
imaginationSection.style.width = '100%';
imaginationSection.style.padding = '100px 50px';
imaginationSection.style.display = 'flex';
imaginationSection.style.alignItems = 'center';
imaginationSection.style.justifyContent = 'center';
imaginationSection.style.gap = '50px';

const imaginationImg = document.getElementsByTagName('img')[1];
imaginationImg.style.height = '250px';
imaginationImg.style.width = '500px';
imaginationImg.style.border = 'none';
imaginationImg.style.borderRadius = '16px';
imaginationImg.style.boxShadow = "-10px 10px 0px 0px blue";

const imaginationRight = document.getElementsByClassName("imaginationRight")[0];
imaginationRight.style.display = 'flex';
imaginationRight.style.flexDirection = 'column';
imaginationRight.style.gap = '20px';
imaginationRight.style.alignItems = 'flex-start';

const imaginationHeading = document.getElementsByClassName('imaginationHeading')[0];
imaginationHeading.style.display = 'flex';
imaginationHeading.style.flexDirection = 'column';
imaginationHeading.style.gap = '10px';
imaginationHeading.style.width = '350px';

const h2 = document.getElementsByTagName('h2');
for (let i = 0; i < h2.length; i++) {
    h2[i].style.fontSize = '32px';
    h2[i].style.fontWeight = '600';
}

const black_Button = document.getElementsByClassName('black-btn')[0];
black_Button.style.padding = '6px 14px';
black_Button.style.border = 'none';
black_Button.style.borderRadius = '24px';
black_Button.style.backgroundColor = 'black';
black_Button.style.color = 'white';

// ******************** Projects Section ********************
const projectSection = document.getElementById('projects');
projectSection.style.height = 'fit-content';
projectSection.style.width = '100%';
projectSection.style.display = 'flex';
projectSection.style.flexDirection = 'column';
projectSection.style.alignItems = 'center';
projectSection.style.gap = '30px';
projectSection.style.padding = '30px 0px';

const photoSection = document.getElementsByClassName('photoSection')[0];
photoSection.style.display = 'flex';
photoSection.style.flexDirection = 'column';
photoSection.style.alignItems = 'flex-start';

const upperPhoto = document.getElementsByClassName('upperPhotos')[0];
upperPhoto.style.display = 'flex';
upperPhoto.style.gap = '10px';

const leftImg = document.getElementsByClassName('leftImg')[0];
leftImg.style.borderRadius = '12px';

const rightImgSection = document.getElementsByClassName('rightImgSection')[0];
rightImgSection.style.display = 'flex';
rightImgSection.style.flexDirection = 'column';
rightImgSection.style.gap = '10px';

const rightImg = document.getElementsByClassName('rightImg');
for (let i = 0; i < rightImg.length; i++) {
    rightImg[i].style.height = '285px';
    rightImg[i].style.width = '290px';
    rightImg[i].style.borderRadius = '10px';
}

const lowerPhotoSec = document.getElementsByClassName('lowerPhotoSection')[0];
lowerPhotoSec.style.display = 'flex';
lowerPhotoSec.style.gap = '10px';

const lowerImg = document.getElementsByClassName('lowerPhoto');
for (let i = 0; i < lowerImg.length; i++) {
    lowerImg[i].style.height = '285px';
    lowerImg[i].style.width = '285px';
    lowerImg[i].style.borderRadius = '10px';
}

// ******************** Numbers Section ********************
const numberSection = document.getElementById('numbers');
numberSection.style.height = 'fit-content';
numberSection.style.width = '100%';
numberSection.style.display = 'flex';
numberSection.style.flexDirection = 'column';
numberSection.style.gap = '10px';
numberSection.style.alignItems = 'center';
numberSection.style.padding = '30px 0';

const blue = document.getElementsByClassName('blueBG')[0];
blue.style.height = 'fit-content';
blue.style.width = '100%';
blue.style.padding = '30px 50px';
blue.style.display = 'flex';
blue.style.gap = '150px';
blue.style.backgroundColor = 'blue';
blue.style.color = 'white';
blue.style.alignItems = 'center';
blue.style.justifyContent = 'center';

const number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].style.display = 'flex';
    number[i].style.flexDirection = 'column';
    number[i].style.gap = '8px';
    number[i].style.alignItems = 'center';

    for (let j = 0; j < number[i].children.length; j++) {
        const child = number[i].children[j];
        if (j === 0) {
            child.style.fontSize = '32px';
            child.style.fontWeight = '600';
        } else {
            child.style.fontSize = '16px';
            child.style.fontWeight = '300';
        }
    }
}

// ******************** Client & Card Section ********************
const client = document.getElementsByClassName('client')[0];
client.style.display = 'flex';
client.style.flexDirection = 'column';
client.style.gap = '40px';
client.style.alignItems = 'center';
client.style.height = 'fit-content';
client.style.width = '100%';
client.style.padding = '30px 0px';
client.style.marginTop = '50px';
client.style.backgroundColor = 'rgba(238, 238, 238, 0.5)';

const cardSection = document.getElementsByClassName('clientCardSection')[0];
cardSection.style.display = 'flex';
cardSection.style.gap = '20px';

const clientCards = document.querySelectorAll('.clientCard');
clientCards.forEach((card) => {
    card.style.width = '400px';
    card.style.height = 'fit-content';
    card.style.backgroundColor = 'white';
    card.style.borderRadius = '12px';
    card.style.padding = '20px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '15px';

    const profileSection = card.querySelector('.cardProfileSection');
    profileSection.style.display = 'flex';
    profileSection.style.gap = '12px';
    profileSection.style.alignItems = 'center';

    const profileImgContainer = card.querySelector('.profileImg');
    profileImgContainer.style.height = '50px';
    profileImgContainer.style.width = '50px';
    profileImgContainer.style.borderRadius = '50%';
    profileImgContainer.style.overflow = 'hidden';

    const profileImg = profileImgContainer.children[0];
    profileImg.style.width = '100%';
    profileImg.style.height = '100%';
    profileImg.style.objectFit = 'cover';

    const profileAbout = card.querySelector('.profileAbout');
    const profileAboutChildren = profileAbout.children;
    for (let i = 0; i < profileAboutChildren.length; i++) {
        const child = profileAboutChildren[i];
        child.style.fontSize = (i === 0) ? '16px' : '12px';
        child.style.margin = '0';
    }
});

// ******************** Footer Section ********************
const footerSection = document.getElementsByTagName('footer')[0];
footerSection.style.backgroundColor = 'rgb(7, 15, 69)';
footerSection.style.color = 'white';
footerSection.style.padding = '60px 20px 30px 20px';
footerSection.style.display = 'flex';
footerSection.style.flexDirection = 'column';
footerSection.style.gap = '20px';
footerSection.style.alignItems = 'center';
footerSection.style.textAlign = 'center';

const paraColor = document.getElementsByTagName('footer')[0].children[1];
paraColor.style.color = '#9ca3af';
// console.log(paraColor);

const socialLinkList = footerSection.querySelector('.socialLink ul');
socialLinkList.style.display = 'flex';
socialLinkList.style.gap = '20px';
socialLinkList.style.listStyle = 'none';
socialLinkList.style.padding = '0';

const socialAnchors = footerSection.querySelectorAll('.socialLink a');
socialAnchors.forEach((anchor) => {
    anchor.style.color = 'white';
    anchor.style.textDecoration = 'none';
    anchor.style.fontSize = '14px';
});

const hrLine = footerSection.querySelector('hr');
hrLine.style.width = '80%';
hrLine.style.border = 'none';
hrLine.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
hrLine.style.margin = '10px 0';

const copyRight = footerSection.querySelector('.copyRight');
copyRight.style.color = '#9ca3af';
copyRight.style.fontSize = '12px';


// ******************** Using Attribute Method To add or remove items ********************

// ******************** Annoucement Banner Section ********************

//Create the banner element
const banner = document.createElement('p');
banner.innerHTML = '&#127881; <strong>Special Update :  </strong> We just won the 2026 Awwwards Site of the Year!';

//Apply positioning and styling
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.left = '0';
banner.style.width = '100%';
banner.style.display = 'flex';
banner.style.alignItems = 'center';
banner.style.justifyContent = 'center';
banner.style.padding = '10px';
banner.style.backgroundColor = 'rgb(7, 15, 69)';
banner.style.color = 'yellow';
banner.style.fontSize = '14px';
banner.style.zIndex = '1'; 

//Prepend the element and passing the variable (banner), not string ('banner')
document.body.prepend(banner);

//Push document body down so the navbar remains fully visible right below the banner
const bannerHeight = banner.offsetHeight;
document.body.style.paddingTop = `${bannerHeight}px`;

// ******************** Vibrant Colors Section ********************

const buttonStyle = document.getElementById('vibrant_color').firstElementChild.lastElementChild;
buttonStyle.textContent = 'View Our Work';
buttonStyle.style.backgroundColor = 'rgb(231, 84, 128)';
// console.log(buttonStyle);

// ******************** Computer Img Section ********************

const heroImg = document.querySelector('.section_1_right img'); //Select the hero <img> element inside .section_1_right

const currentSrc = heroImg.getAttribute('src'); // Retrieve current src URL using getAttribute
// console.log('Original Hero Image URL:', currentSrc);

//Updating the src attribute to the retro setup image
// const newImgUrl = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop';
// heroImg.setAttribute('src', newImgUrl);  
//Either we can use the above method which is pro and clean(In this method, we placed this link into a variable and can use it multiple time anywhere if needed also no confusion of quotes or anything else), or we can use second method below...

heroImg.setAttribute('src', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop');

//Update the alt attribute to describe the new hero image
heroImg.setAttribute('alt', 'Retro Electronics & Computer Setup');

// console.log('Updated Hero Image URL:', heroImg.getAttribute('src'));

// ******************** Our Services Section ********************

const trending = document.createElement('p')
trending.innerHTML = '&#128293; Trending';

// SET: Add ID, class, and inline CSS attributes from this method
// trending.setAttribute('id', 'trendingBadge');
// trending.setAttribute('class', 'badge-highlight');
// Note: Use standard CSS syntax (kebab-case) inside the style attribute string
trending.setAttribute('style', 'font-size: 10px; color: #e11d48; font-weight: bold; margin-bottom: 4px;');

// Insert the badge before the Web Development heading
const trendingAdd = document.getElementById('trending');
trendingAdd.before(trending);

// console.log(trending);

//Increasing the card height and using setAttribute
serviceCards.forEach((card) => {
    card.setAttribute('style', 'height: 250px; width: 300px; background-color: rgba(208, 225, 233, 0.2); border-radius: 12px; padding: 30px 20px; display: flex; flex-direction: column; gap: 10px; align-items: center;');
});

// ******************** Question #3 Using setAttribute ********************

// 1. Create the new card element
const newCard = document.createElement('div');
newCard.classList.add('card');

// 2. Insert the HTML structure
newCard.innerHTML = `
  <div class="icon">3D</div>
  <h5>3D Modeling</h5>
  <p class="sub_para">Immersive 3D graphics and custom web-based configurators.</p>
`;

// 3. Apply inline CSS using setAttribute
newCard.setAttribute(
  'style',
  'height: 200px; width: 300px; background-color: rgba(208, 225, 233, 0.2); border-radius: 12px; padding: 30px 20px; display: flex; flex-direction: column; gap: 10px; align-items: center;'
);

// 4. Style the icon inside the card using setAttribute
const newIcon = newCard.querySelector('.icon');
newIcon.setAttribute(
  'style',
  'height: 70px; width: 70px; padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background-color: yellow; color: black;'
);

// 5. Style the heading inside the card using setAttribute
const newHeading = newCard.querySelector('h5');
newHeading.setAttribute('style', 'font-size: 14px; color: #ca8a04;');

// 6. Append the finished card to the container
const serviceContent = document.querySelector('.service_content');
serviceContent.append(newCard);

// const 

