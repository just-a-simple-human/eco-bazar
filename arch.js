const fs = require( "fs/promises")
const path = require( "path")

const srcPath = path.resolve("./src")

async function logFile (p) {
    const dir = await fs.readdir(p, {withFileTypes: true})
    for (let d of dir) {
        if (d.isDirectory()) {
            logFile(path.join(p, d.name))
        }
        if (d.isFile() && d.name.endsWith(".style.js")) {
            const file = await fs.readFile(path.join(p, d.name), {encoding: "utf8"})
            if (file === "") {
                console.log(d.name)
            }
        }
    }
 
}

logFile(srcPath)