const body = document.body.children;
// console.log(body);

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

const section_1_left_h1 = document.getElementsByClassName('Heading_H1');
section_1_left_h1.style.fontSize = `42px`;
section_1_left_h1.style.fontWeight = `600`;
section_1_left_h1.style.width = `292px`;

const section_1_left_span = document.getElementsByTagName('span')[0];
section_1_left_span.style.color = "rgb(231, 84, 128)";

const subPara = document.querySelectorAll('.sub_para');
for(let i = 0; i<section_1_Left_subPara.length; i++){
subPara[i].style.fontSize = '12px';
}

const section_1_left_para = document.getElementsByClassName('sub_para');
section_1_left_para.style.width = '415px';
section_1_left_para.style.lineHeight = '20px';
console.log(section_1_left_para);

const section_1_left_btn = document.getElementsByClassName('green_btn')[0];
section_1_left_btn.style.padding = '6px 14px';
section_1_left_btn.style.border = 'none';
section_1_left_btn.style.borderRadius = '24px';
section_1_left_btn.style.backgroundColor = 'green';
section_1_left_btn.style.color = 'white';

const section_1_right_img = document.getElementsByTagName('img')[0];
section_1_right_img.style.border = 'none';
section_1_right_img.style.borderRadius = '16px';
section_1_right_img.style.boxShadow = "10px 10px 0px 0px yellow";
section_1_right_img.style.height = '400px';
section_1_right_img.style.width = '700px';

const serviceSection = document.getElementById("services");
serviceSection.style.height = 'fit-content';
serviceSection.style.width = '100%';
serviceSection.style.padding = '50px 25px';
serviceSection.style.display = 'flex';
serviceSection.style.flexDirection = 'column';
serviceSection.style.alignItems = 'center';
serviceSection.style.textAlign = 'center';
serviceSection.style.gap = '30px';

const serviceHeadingSection = document.querySelector('service_heading')[0];
// serviceHeadingSection.style.fontSize = '22px'; //Not Working

const serviceHeadingH3 = document.querySelectorAll('h3');
serviceHeadingH3.style.fontSize = '16px';

const serviceSubPara = document.querySelectorAll('sub_para');

