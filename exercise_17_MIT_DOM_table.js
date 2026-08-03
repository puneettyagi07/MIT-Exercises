// const heading = document.getElementsByClassName('heading');
// heading[0].children[0].innerHTML = 'Updted Global Employee Directory 2026';
// heading[0].children[0].style.color = 'blue';
// heading[0].children[0].style.letterSpacing = '0px';
// // console.log(heading);

// const statusBgCOlor = document.getElementsByClassName('status')[0];
// statusBgCOlor.style.backgroundColor = 'rgb(234, 237, 235)';
// statusBgCOlor.style.borderColor = 'rgb(12, 148, 55)';
// // console.log(statusBgCOlor);

// const status = document.getElementsByClassName('status')[0];
// status.children[0].innerHTML = '<strong>System Status : </strong> Live and Updated (Pullled from HR)';
// // console.log(status);

// const note = document.getElementsByClassName('note')[0];
// note.style.width = '100%';
// note.style.height = 'fit-content';
// note.style.padding = '12px';
// note.style.backgroundColor = 'yellow';
// note.style.borderRadius = '8px';
// // console.log(note);

// // Note Section is not created by JS only designed by JS

// const table = document.getElementsByClassName('table')[0];
// table.innerHTML = `<table>
// <thead>
// <tr>
// <th>Name</th> <th>Role</th>
// </tr>
// <tr>
// <th>Sarah Lee (New Manager)</th> <th> Management</th>
// <tr>
// </thead>
// <tbody>
// <tr>
// <td>Aice Johnson</td> <td>Designer</td>
// </tr>
// <tr>
// <td>Bob Smith</td> <td>Developer</td>
// </tr>
// </tbody>
// <tfoot>
// <tr>
// <td>Tom Baker (Intern)</td> <td>Support</td>
// </tr>
// </tfoot>`;

// console.log(table);

const heading = document.getElementsByClassName('heading');
heading[0].children[0].innerHTML = 'Updated Global Employee Directory 2026';
heading[0].children[0].style.color = 'blue';
heading[0].children[0].style.letterSpacing = '0px';

const statusBgCOlor = document.getElementsByClassName('status')[0];
statusBgCOlor.style.backgroundColor = 'rgb(234, 237, 235)';
statusBgCOlor.style.borderColor = 'rgb(12, 148, 55)';

const status = document.getElementsByClassName('status')[0];
status.children[0].innerHTML = '<strong>System Status : </strong> Live and Updated (Pulled from HR)';

const note = document.getElementsByClassName('note')[0];
note.style.width = '100%';
note.style.height = 'fit-content';
note.style.padding = '12px';
note.style.backgroundColor = 'yellow';
note.style.borderRadius = '8px';

// ******************** Table Generation via innerHTML ********************
const table = document.getElementsByClassName('table')[0];

table.innerHTML = `<table>
  <thead>
    <!-- 1st row: Light Gray background -->
    <tr style="background-color: #e5e7eb;">
      <th>Name</th> 
      <th>Role</th>
    </tr>
    <!-- 2nd row: Light Blue background -->
    <tr style="background-color: #dbeafe;">
      <th>Sarah Lee (New Manager)</th> 
      <th>Management</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Johnson</td> 
      <td>Designer</td>
    </tr>
    <tr>
      <td>Bob Smith</td> 
      <td>Developer</td>
    </tr>
  </tbody>
  <!-- tfoot: Bold text & Light Gray background -->
  <tfoot style="background-color: #e5e7eb; font-weight: bold;">
    <tr>
      <td>Tom Baker (Intern)</td> 
      <td>Support</td>
    </tr>
  </tfoot>
</table>`;

console.log(table);