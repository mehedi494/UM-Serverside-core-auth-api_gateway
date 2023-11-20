import express, { NextFunction, Request, Response } from 'express';
import { FileUploderHelper } from '../../../helpers/FileUploderHelper';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from './../../../enums/user';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploderHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body =JSON.parse(req.body.data);
    return UserController.createStudent(req, res, next);
  }
  //   UserController.createStudent
);

export const UserRoutes = router;
