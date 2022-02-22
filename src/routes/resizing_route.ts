import express from 'express';
import { transform, middle } from '../processing_func';
import path from 'path';
const route = express.Router();

route.get('/api/images', middle, async (req, res) => {
  try {
    const filename: unknown = req.query.filename;
    const width: unknown = req.query.width;
    const height: unknown = req.query.height;

    const x = await transform(
      filename as string,
      parseInt(width as string),
      parseInt(height as string)
    );
    console.log(x)
    res.sendFile(
      `${path.resolve('./')}/thumbnil/${filename}&${width}&${height}.jpg`
    );
  } catch (err) {
    res.send('the filename is wrong');
  }
});

export default route;
