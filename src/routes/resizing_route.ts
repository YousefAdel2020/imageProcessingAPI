import express from 'express';
import { transform, middle } from '../processing_func';
import path from 'path';
const route = express.Router();

route.get(
  '/api/images',
  middle,
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const filename: unknown = req.query.filename;
      const width: unknown = req.query.width;
      const height: unknown = req.query.height;
      if (isNaN(width as number) || isNaN(height as number)) {
        res.status(404).send('the value of width or height is NaN');
      } else {
        if (parseInt(width as string) > 0 && parseInt(height as string) > 0) {
          const x = await transform(
            filename as string,
            parseInt(width as string),
            parseInt(height as string)
          );
          console.log(x);
          res.sendFile(
            `${path.resolve('./')}/thumbnil/${filename}&${width}&${height}.jpg`
          );
        } else {
          res.status(404).send('you put invalid width or height');
        }
      }
    } catch (err) {
      res.send('the filename is wrong');
    }
  }
);

export default route;
