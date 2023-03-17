import { RequestHandler } from 'express';
import multer, { Multer, diskStorage } from 'multer';

const MulterConfig: Multer = multer({
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

const uploadSingleImage = (reqName: string): RequestHandler =>
  MulterConfig.single(reqName);

export { uploadSingleImage };
