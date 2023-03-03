import * as fs from "fs";

export default async function(req, res) {
    try {
        const {article} = req.query;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.write(fs.readFileSync(`http://localhost:3000/${article}.html`, "utf-8"));
        res.end();
    }
    catch (ex) {
        console.log(ex)
        res.send({error: ex.error})
    }
}