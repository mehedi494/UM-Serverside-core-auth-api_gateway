import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { FacultyService } from './faculty.service';

const updateIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const FacultyController = {
  updateIntoDb
};
