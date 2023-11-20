import { Request } from 'express';
import {  CoreService } from '../../../shared/axios';
import { IGenericResponse } from './../../../interfaces/common';

const baseUrl = '/academic-faculties';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.post(baseUrl, req.body, {
    headers: { Authorization: req.headers.authorization }
  });

  return result;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get(baseUrl, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};
const getSingle = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get(`/academic-faculties/${req.params.id}`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};
const updateSingle = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.patch(
    `/academic-faculties/${req.params.id}`,
    req.body,
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};
const deleteSingle = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.delete(
    `/academic-faculties/${req.params.id}`,

    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const academicFacultyService = {
  insertIntoDB,
  getAllFromDB,
  getSingle,
  updateSingle,
  deleteSingle
};
