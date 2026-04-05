import fs from "fs";

const data = fs.readFileSync("./filesystem/note.txt", "utf8");
console.log(data);