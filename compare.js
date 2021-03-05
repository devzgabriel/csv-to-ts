const fs = require("fs")
const Papa = require("papaparse")

const newWordsPath = "./csv/dictionary31.csv"
const okWordsPath = "./csv/dictionary1.csv"
const newWords = fs.readFileSync(newWordsPath, "utf8")
const okWords = fs.readFileSync(okWordsPath, "utf8")

function loadData(csvFile) {
  const csvFileParsed = {}

  Papa.parse(csvFile, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      csvFileParsed.data = results.data
      csvFileParsed.errors = results.errors
      csvFileParsed.meta = results.meta
    },
  })

  return csvFileParsed
}

okfileParsed = loadData(okWords).data
newfileParsed = loadData(newWords).data
// console.log(okfileParsed.data)

newfileParsed.forEach((newWord) => {
  okfileParsed.forEach((okWord) => {
    if (String(newWord.name).toUpperCase() == String(okWord.name).toUpperCase())
      console.log(newWord.name)
  })
})
