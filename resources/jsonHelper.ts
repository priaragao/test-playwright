import fs from "fs";
import path from "path";

export function pegarValorJson(caso: number, variavel: string) {
  const jsonPath = path.resolve(__dirname, "../testdata/massa.json");
  const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

  return jsonData[caso][variavel];
}
