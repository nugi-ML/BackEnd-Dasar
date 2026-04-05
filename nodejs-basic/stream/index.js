/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

import fs from "fs";

const readableStream = fs.createReadStream("./stream/input.txt");
const writableStream = fs.createWriteStream("./stream/output.txt");

readableStream.on("data", (chunk) => {
    writableStream.write(chunk + "\n");
});

readableStream.on("end", () => {
    console.log("Berhasil membaca dan menulis file menggunakan stream");
});