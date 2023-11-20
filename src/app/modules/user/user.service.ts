import { Request } from 'express';
import { FileUploderHelper } from '../../../helpers/FileUploderHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploderHelper.uploadToClouinary(file);
  console.log(uploadedImage);
  if (uploadedImage) {
    req.body.student.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;
  // console.log(academicDepartment);
  /**----------- academicDepartment */
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  /**---------- academicFaculty*/
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }
  // /**-----------academicSemester */
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const createFaculty = async (req: Request) => {
  const file = req?.file as IUploadFile;
  // console.log(file);
  if (file) {
    const uploadedImage = await FileUploderHelper?.uploadToClouinary(file);
    if (uploadedImage) {
      req.body.faculty.profileImage = uploadedImage.secure_url;
    }
  }
 
  const { academicDepartment, academicFaculty } = req.body.faculty;
 
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  /**---------- academicFaculty*/
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }



  const response: IGenericResponse = await AuthService.post('/users/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  console.log(response);
  return response;
};
export const UsersService = {
  createStudent,
  createFaculty
};
