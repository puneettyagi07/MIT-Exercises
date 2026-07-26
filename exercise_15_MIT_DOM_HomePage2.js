const body = document.body.children;
console.log(body);

const vibrantColorSection = document.getElementById(`vibrant_color`);
vibrantColorSection.style.height = `fit-content`;
vibrantColorSection.style.width = `100%`;
vibrantColorSection.style.display = `flex`;
vibrantColorSection.style.gap = `30px`;
vibrantColorSection.style.alignItems = `center`;
vibrantColorSection.style.padding = `100px 50px 50px 50px`;
vibrantColorSection.style.backgroundImage = "linear-gradient(to top, rgb(255, 253, 208, 0.3), rgb(245, 245, 220, 0.3))";

const section_1_leftSide = document.getElementsByClassName('section_1_left');
section_1_leftSide.style.display = `flex`;
section_1_leftSide.style.flexDirection = `column`;
section_1_leftSide.style.gap = `120px`;

