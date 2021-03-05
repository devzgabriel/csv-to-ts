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

const okfileParsed = loadData(okWords)
const newfileParsed = loadData(newWords)

const newDataParsed = newfileParsed.data
const okDataParsed = okfileParsed.data

let allWords = []

newDataParsed.forEach((newWord) => {
  allWords.push(newWord.name + "\n")
})
okDataParsed.forEach((okWord) => {
  allWords.push(okWord.name + "\n")
})

allWords.sort()

fs.writeFileSync("./ordem.txt", allWords.toString())

console.log(allWords.toString())
