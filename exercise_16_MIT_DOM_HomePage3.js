// Changing Cards & content and style using 

const heading = document.getElementsByClassName('heading')[0];
heading.outerHTML = `<section class = "heading"><h1> Mind In Tech</h1> </section>`;
// console.log(heading);

const con_heading = document.getElementsByClassName('con-heading')[0];
con_heading.outerHTML='<section class="con-heading"><h3><span class="blueText">Updated </span> Curriculam </h3></section>'
// console.log(con_heading);

const card = document.getElementsByClassName('card')[0];
card.children[1].innerHTML = `Full-Stack MERN & Next.js architectures.`;
// console.log(card);  

const card2 = document.getElementsByClassName('card')[1];
card2.children[1].innerHTML = `Advanced Figma prototyping and design systems.`;
// console.log(card2);

const card3 = document.getElementsByClassName('card')[2];
card3.children[0].innerHTML = `Mind in Tech Junior`;
card3.children[1].innerHTML = `A specialized 6-month program building basic computer coordination and creativity.`;
card3.style.border = '2px dashed blue';
card3.style.backgroundColor = 'rgb(131, 162, 190, 0.2)';
console.log(card3);
