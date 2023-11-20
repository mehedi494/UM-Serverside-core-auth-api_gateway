import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'duayv8nof',
  api_key: '455451472644929',
  api_secret: 'Lwh3ViUopEio-4Tksz0kxtxRprc'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToClouinary = async (file: IUploadFile): Promise<ICloudinaryResponse | null> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploderHelper = { uploadToClouinary, upload };
