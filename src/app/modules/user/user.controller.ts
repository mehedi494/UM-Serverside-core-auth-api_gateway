import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { UsersService } from './user.service';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(req.file);
    const result = await UsersService.createStudent(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  createStudent
};
