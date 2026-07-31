const heading = document.getElementsByClassName('heading')[0];
heading.outerHTML =  `<section class = "heading"><h1> Mind In Tech</h1> </section>`;

const con_heading = document.getElementsByClassName('con-heading')[0];
con_heading.outerHTML = `<section class = "con-heading><span class = "blueText">Updated</span> Curriculum </section>`;
con_heading.children[0].style.display = 'flex';
con_heading.children[0].style.alignItems = 'center';
con_heading.style.color = 'blue';
// console.log(con_heading);

// agr mai con_heading.children[0] laga tha to 1st ko replace kr k ye text aa tha h but second text nhi ja rha h but iss menthod se dono text ja rhe h but styling nhi ho rhi h

const card = document.getElementsByClassName('card')[0];
card.children[1].innerHTML = `<p> Full-Stack MERN & Next.js architectures.</p>`;
// console.log(card);  
// inn sb me style kese lagane h vo btao

const card2 = document.getElementsByClassName('card')[1];
card2.children[1].innerHTML = `<p> Advanced Figma prototyping and design systems.</p>`;

const card3 = document.getElementsByClassName('card')[2];
card3.children[0].innerHTML = `<h5>Mind in Tech Junior</h5>`;
card3.children[1].innerHTML = `<p>A specialized 6-month program building basic computer coordination and creativity.</p>`;
card3.style.border = '2px dashed blue';
card3.style.backgroundColor = 'rgb(131, 162, 190, 0.2)';
// console.log(card3);