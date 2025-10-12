import fs from 'fs'
import path from 'path'

type Locales = "ar" | "en"
export function getDictionary(locale: Locales) {
  const filePath = path.join(process.cwd(), "locales", `${locale}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}