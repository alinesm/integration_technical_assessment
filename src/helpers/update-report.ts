import fs from "fs";
import path from "path";

const reportFilePath = path.join(
  __dirname,
  "..",
  "..",
  "application-report.txt"
);

type LogLevel = "info" | "warn" | "error";

function formatLogMessage(level: LogLevel, message: string): string {
  const date = new Date();
  const formattedDate =
    [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2),
      ("0" + date.getDate()).slice(-2),
    ].join("-") +
    " " +
    [
      ("0" + date.getHours()).slice(-2),
      ("0" + date.getMinutes()).slice(-2),
      ("0" + date.getSeconds()).slice(-2),
    ].join(":");

  return `[${formattedDate}] [${level.toUpperCase()}] ${message}`;
}

// export function updateReport(content: string) {
//   const timestamp = new Date().toISOString();
//   fs.appendFileSync(reportFilePath, `${timestamp} - ${content}\n`);
// }

export function updateReport(level: LogLevel, content: string) {
  const formattedMessage = formatLogMessage(level, content);
  fs.appendFileSync(reportFilePath, `${formattedMessage}\n`);
}

// function formatLogMessage(level: string, message: string): string {
//   const date = new Date();
//   const formattedDate = [
//       date.getFullYear(),
//       ('0' + (date.getMonth() + 1)).slice(-2),
//       ('0' + date.getDate()).slice(-2),
//   ].join('-') + ' ' + [
//       ('0' + date.getHours()).slice(-2),
//       ('0' + date.getMinutes()).slice(-2),
//       ('0' + date.getSeconds()).slice(-2),
//   ].join(':');

//   return `[${formattedDate}] [${level.toUpperCase()}] ${message}`;
// }

// Example Usage:
// const logMessage = formatLogMessage("INFO", "This is a log message");
// console.log(logMessage);
