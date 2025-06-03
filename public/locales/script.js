import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const enPath = path.join(__dirname, "en", "translation.json");
const arPath = path.join(__dirname, "ar", "translation.json");

const enData = JSON.parse(fs.readFileSync(enPath, "utf-8"));
let arData = {};
if (fs.existsSync(arPath)) {
  arData = JSON.parse(fs.readFileSync(arPath, "utf-8"));
}

function mergeKeys(enObj, arObj) {
  if (Array.isArray(enObj)) {
    return Array.isArray(arObj) ? arObj : enObj.map(() => "");
  }
  if (typeof enObj === "object" && enObj !== null) {
    const result = { ...arObj };
    for (const key in enObj) {
      result[key] = mergeKeys(enObj[key], arObj?.[key]);
    }
    return result;
  }
  return arObj !== undefined ? arObj : "";
}

const mergedTranslation = mergeKeys(enData, arData);

fs.writeFileSync(arPath, JSON.stringify(mergedTranslation, null, 2), "utf-8");

console.log(
  "Arabic translation.json updated without overwriting existing values."
);
