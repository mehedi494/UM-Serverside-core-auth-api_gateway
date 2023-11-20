import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getSingle);
router.post('/', AcademicSemesterController.insertIntoDB);
router.patch('/:id', AcademicSemesterController.updateOneIntoDb);

export const academicSemesterRoutes = router;
