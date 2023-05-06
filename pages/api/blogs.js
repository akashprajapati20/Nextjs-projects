// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';
import { parse } from 'node:path';



  export default async function handler(req, res) {
    console.log(req.query.count);
    let data= await fs.promises.readdir("blogdata");
    data = data.slice(0,parseInt(req.query.count));
    let myFile;
    let allblogs=[];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        // console.log(item);
        myFile= await fs.promises.readFile(("blogdata/"+item),'utf-8');
        allblogs.push(JSON.parse(myFile));
        
    }
    res.status(200).json(allblogs);
    }
    