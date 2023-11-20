import express from 'express';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();
router.post('/', academicDepartmentController.insertIntoDB);
router.get('/', academicDepartmentController.getAllFromDB);
router.get('/:id', academicDepartmentController.getSingle);
router.patch('/:id', academicDepartmentController.updateSingle);
router.delete('/:id', academicDepartmentController.deleteSingle);

export const academicDepartmentRoutes = router;
