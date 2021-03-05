const Papa = require("papaparse");
const fs = require("fs");

const csvFilePath = "./csv/dictionary22.csv";
const jsonFilePath = "./scripts/exportDictionary.ts";
const csvFile = fs.readFileSync(csvFilePath, "utf8");
// console.log(csvFile);

function loadData(csvFile) {
  const csvFileParsed = {};

  Papa.parse(csvFile, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      csvFileParsed.data = results.data;
      csvFileParsed.errors = results.errors;
      csvFileParsed.meta = results.meta;
    },
  });

  return csvFileParsed;
}

function writeData(fileParsed) {
  const scriptData =
    "export default function Dictionary() { return" +
    JSON.stringify(fileParsed) +
    "}";

  fs.writeFileSync(jsonFilePath, scriptData);
}

fileParsed = loadData(csvFile);
writeData(fileParsed);
console.log(fileParsed);

// fileParsed.data.map((word) => {
//   const {
//     id,
//     name,
//     syllabicdivision,
//     primarymeaning,
//     primaryexample,
//     primaryreference,
//   } = word;
// });
