import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinAnalysis";
import { ConsoleReport } from "./reportTarget/ConsoleReport";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTarget/HtmlReport";
// Create an object that satisifies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')


// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Newcastle')

matchReader.load();
summary.buildAndPrintReport(matchReader.matches)


