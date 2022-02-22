import express from 'express'
import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';



 export const check = async (
  filename: string,
  width: number,
  height: number
) :Promise<boolean>=> {
  const Files = await fsPromises.readdir(`${path.resolve('./')}/thumbnil`);
  Files.forEach((file) => {
    if (file === `${filename}&${width}&${height}.jpg`) {
      return true;
    }
  });
  return false;
};

export const transform = async (
  filename: string,
  width: number,
  height: number
) => {
    const data = await sharp(`${path.resolve('./')}/images/${filename}.jpg`)
      .resize({ width, height })
      .toFile(
        `${path.resolve('./')}/thumbnil/${filename}&${width}&${height}.jpg`
      );
    return data;
 
};


export const middle= async(req: express.Request,res: express.Response,next: express.NextFunction):Promise<void>=>{
    
    const b= await check((req.query.filename as string),(req.query.width as unknown) as number,(req.query.height as unknown)as number)
     if(b===true)
     {
        res.sendFile(`${path.resolve('./')}/thumbnil/${req.query.filename as string}&${(req.query.width as unknown) as number}&${(req.query.height as unknown)as number}.jpg`);
     }
     else{
        next();
     }
    
}