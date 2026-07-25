// Body setup
const body = document.body;
body.style.backgroundColor = "rgb(252, 252, 252)";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.paddingTop = "40px";
body.style.color = "rgb(51, 51, 51)";
// console.log(body);

// Main Container
const container = body.children[0];
container.style.width = "600px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "14px";
// console.log(constainer);

// Main Heading (H1)
const mainHeading = container.children[0];
mainHeading.style.color = "rgb(30, 80, 205)";
mainHeading.style.fontSize = "22px";
mainHeading.style.fontWeight = "700";
// console.log(mainHeading);

// Subtitle Paragraph
const subtitle = container.children[1];
subtitle.style.fontSize = "12px";
subtitle.style.color = "rgb(85, 85, 85)";
subtitle.style.marginBottom = "6px";
// console.log(subtitle);

// Green Status Box
const statusBox = container.children[2];
statusBox.style.backgroundColor = "rgb(232, 248, 240)";
statusBox.style.border = "1px solid rgb(115, 209, 159)";
statusBox.style.borderRadius = "6px";
statusBox.style.padding = "14px 16px";
statusBox.style.fontSize = "13px";
statusBox.style.color = "rgb(45, 87, 60)";
// console.log(statusBox);

// Yellow Note Box
const noteBox = container.children[3];
noteBox.style.backgroundColor = "rgb(255, 243, 168)";
noteBox.style.borderRadius = "6px";
noteBox.style.padding = "10px 14px";
noteBox.style.fontSize = "13px";
noteBox.style.color = "rgb(68, 68, 68)";
// console.log(noteBox);

// Table
const table = container.children[4];
table.style.width = "100%";
table.style.border = "1px solid rgb(224, 224, 224)";
table.style.borderCollapse = "collapse";
// console.log(table);

// Table Header
const thead = table.children[0];
// console.log(thead);

const headerRow = thead.children[0];
headerRow.style.backgroundColor = "rgb(227, 235, 243)";
// console.log(headerRow);

const headers = headerRow.children;
for (let i = 0; i < headers.length; i++) {
    headers[i].style.textAlign = "left";
    headers[i].style.padding = "10px 14px";
    headers[i].style.fontSize = "13px";
    headers[i].style.fontWeight = "700";
    headers[i].style.color = "rgb(51, 51, 51)";
    headers[i].style.border = "1px solid rgb(208, 215, 222)";
};
// console.log(headers);

// Table Rows (Tbody)
const tbody = table.children[1];
// console.log(tbody);

const rows = tbody.children;
console.log(rows);
for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].children;
    console.log(cells);
    
    // Highlight first row (Sarah Lee) with a light blue background as shown in image
    if (i === 0) {
        rows[i].style.backgroundColor = "rgb(226, 241, 253)";
    } else {
        rows[i].style.backgroundColor = "rgb(255, 255, 255)";
    }

    for (let j = 0; j < cells.length; j++) {
        cells[j].style.padding = "10px 14px";
        cells[j].style.fontSize = "12px";
        cells[j].style.color = "rgb(68, 68, 68)";
        cells[j].style.border = "1px solid rgb(232, 232, 232)";
        
        // Bold specific highlighted name
        if (i === 0 && j === 0) {
            cells[j].style.fontWeight = "600";
        }
    }
};
const lastRow = tbody.children[3];
lastRow.style.backgroundColor = "rgb(161, 173, 173)"
lastRow.style.fontWeight = "700"

// Footer Text
const footerText = container.children[5];
footerText.style.fontSize = "11px";
footerText.style.color = "rgb(102, 102, 102)";
footerText.style.marginTop = "4px";
console.log(footerText);
