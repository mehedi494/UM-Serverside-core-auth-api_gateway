import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { academicDepartmentService } from './academicDepartment.service';


const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartmentService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartmentService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartmentService.getSingle(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartmentService.updateSingle(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartmentService.deleteSingle(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const academicDepartmentController = {
  insertIntoDB,
  getAllFromDB,
  getSingle,
  updateSingle,
  deleteSingle
};
