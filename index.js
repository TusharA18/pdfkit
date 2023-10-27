const fs = require("fs");
const PDFDocument = require("pdfkit");
const PDFTable = require("voilab-pdf-table");

const doc = new PDFDocument({
   size: [595.28, 841.89], // A4 size in points
   margins: { top: 0, left: 25, right: 15, bottom: 50 },
});

const stream = fs.createWriteStream("table.pdf");
const pageSize = [595.28, 841.89]; // A4 size in points

const margin = 2; // Set the margin size
doc.pipe(stream);
doc.moveDown(3);
doc.rect(
   margin,
   margin,
   pageSize[0] - 2 * margin,
   pageSize[1] - 2 * margin
).stroke("#000");

doc.fontSize(20).font("Helvetica-Bold").text("Dispatch Advise", {
   align: "center",
});

const currentDate = new Date();
const monthNames = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

const formattedDate = `${currentDate.getDate()} ${
   monthNames[currentDate.getMonth()]
} ${currentDate.getFullYear()}`;

doc.moveDown(1);

doc.fontSize(11).font("Helvetica").text(`Customer Name: iqwjeoijqwoie`, 40);

doc.moveUp();

doc.fontSize(11).font("Helvetica").text(`Date: ${formattedDate}`, 335);

doc.moveDown(1);

doc.fontSize(11).font("Helvetica").text(`Material: ${"123123123123"}`, 40);

doc.moveUp();

doc.fontSize(11).font("Helvetica").text(`Grade Name: oowmwk`, 335);

doc.moveDown(1);

doc.fontSize(11).font("Helvetica").text(`Dispatch Qty: ${123123}`, 40);

doc.moveUp();

doc.fontSize(11).font("Helvetica").text(`Colour: ${123123123}`, 335);

doc.moveDown(1);

doc.fontSize(11).font("Helvetica").text(`Inspection Date: ${123123}`, 40);

doc.moveUp();

doc.fontSize(11).font("Helvetica").text(`Dispatch Date: ${123123123}`, 335);

doc.moveDown(1);

doc.fontSize(11).font("Helvetica").text(`Batch No: ${123123123}`, 40);

doc.moveDown(1);

doc.fontSize(11).font("Helvetica").text(`Process: ${123123123}`, 325);

doc.moveDown(1);

doc.fontSize(17).font("Helvetica").text(`Specimen Preparation`, 70);

doc.moveUp();

doc.fontSize(11).font("Helvetica").text(`Temperature Range: ${123123123}`, 325);

doc.moveDown(1);

doc.fontSize(11)
   .font("Helvetica")
   .text(`Specimen Condition: ${123123123}`, 325);

doc.moveDown(2);

doc.text("", 40);

doc.moveUp();

const table = new PDFTable(doc);

table.addPlugin(
   new (require("voilab-pdf-table/plugins/fitcolumn"))({
      column: "description",
   })
);
table.setColumnsDefaults({
   headerBorder: ["L", "T", "B", "R"],
   headerPadding: [5, 5, 5, 5],
   border: ["L", "T", "B", "R"],
   align: "center",
   padding: [5, 5, 5, 5],
   verticalAlign: "middle", // Center align vertically
});

// Define the table columns
table.addColumns([
   {
      id: "col1",
      header: "Paramters",
      width: 150,
      align: "center",
   },
   {
      id: "col2",
      header: "Method - (ASTM D)",
      width: 87,
      align: "center",
   },
   {
      id: "col3",
      header: "METHOD - (ISO)",
      width: 87,
      align: "center",
   },
   {
      id: "col4",
      header: "Unit",
      width: 60,
      align: "center",
   },
   {
      id: "col5",
      header: "Specifications",
      width: 80,
      align: "center",
   },
   {
      id: "col6",
      header: "Values",
      width: 50,
      align: "center",
   },
]);

const propertyValue = [
   {
      col1: "Specific gravity",
      col2: "D792 B",
      col3: "-",
      col4: "",
      col5: "0.90-0.93",
      col6: "0.916",
   },
   {
      col1: "Specific gravity",
      col2: "D792 B",
      col3: "-",
      col4: "",
      col5: "0.90-0.93",
      col6: "0.916",
   },
];

const mechanicalProperty = [
   {
      col1: "Specific gravity",
      col2: "D792 B",
      col3: "-",
      col4: "",
      col5: "0.90-0.93",
      col6: "0.916",
   },
   {
      col1: "Specific gravity",
      col2: "D792 B",
      col3: "-",
      col4: "",
      col5: "0.90-0.93",
      col6: "0.916",
   },
];

const thermalProperty = [
   {
      col1: "Specific gravity",
      col2: "D792 B",
      col3: "-",
      col4: "",
      col5: "0.90-0.93",
      col6: "0.916",
   },
   {
      col1: "Specific gravity",
      col2: "D792 B",
      col3: "-",
      col4: "",
      col5: "0.90-0.93",
      col6: "0.916",
   },
];

const data = [];

data.push({
   col1: "PROPERTIES:",
});

propertyValue.map((pv) => data.push(pv));

data.push({
   col1: "MECHANICAL PROPERTY:",
});

mechanicalProperty.map((mv) => data.push(mv));

data.push({
   col1: "THERMAL PROPERTIES:",
});

thermalProperty.map((tv) => data.push(tv));

table.addBody(data);

doc.moveDown(1);

doc.fontSize(15)
   .font("Helvetica")
   .text("PRE DESPATCH INSPECTION REPORT (DOCK AUDIT)", 120);

doc.moveDown(1);

doc.fontSize(10)
   .font("Helvetica")
   .text("Labelling/ Identification on condition", 40);

doc.moveDown(1);

doc.fontSize(10).font("Helvetica").text("Condition of Stiching", 40);

doc.moveDown(1);

doc.fontSize(10).font("Helvetica").text("Condition of Bags", 40);

doc.moveDown(1);

doc.fontSize(10).font("Helvetica").text("Wet Condition", 40);

doc.moveDown(1);

doc.fontSize(10)
   .font("Helvetica")
   .text("Visual (Black Dots Contamination, Foreign Material mix-up)", 40);

doc.moveDown(1);

doc.fontSize(15).font("Helvetica").text("Remarks:", 40);

doc.moveDown(1);

doc.fontSize(10)
   .font("Helvetica")
   .text(
      "1) Please dehumidify the material @ 80° C- 100° C for 2 hrs before molding.",
      40
   );

doc.moveDown(1);

doc.fontSize(10)
   .font("Helvetica")
   .text(
      "2) Test result are obtained from injection molded sample as per standard.",
      40
   );

doc.moveDown(1);

doc.fontSize(10)
   .font("Helvetica")
   .text(
      "3) We do not guarantee the same results from test performed on our product in other test lab.",
      40
   );

doc.end();

stream.on("finish", () => {
   console.log("Table PDF created and saved.");
});
