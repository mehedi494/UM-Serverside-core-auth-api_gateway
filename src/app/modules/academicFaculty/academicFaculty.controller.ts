import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { academicFacultyService } from './academicFaculty.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.getSingle(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.updateSingle(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.deleteSingle(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const academicFacultiesController = {
  insertIntoDB,
  getAllFromDB,
  getSingle,
  updateSingle,
  deleteSingle
};
