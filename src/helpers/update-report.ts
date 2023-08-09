import fs from "fs";
import path from "path";

const reportFilePath = path.join(
  __dirname,
  "..",
  "..",
  "application-report.txt"
);

export function updateReport(content: string) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(reportFilePath, `${timestamp} - ${content}\n`);
}
