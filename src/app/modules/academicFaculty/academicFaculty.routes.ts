import express from 'express';
import { academicFacultiesController } from './academicFaculty.controller';

const router = express.Router();
router.post('/', academicFacultiesController.insertIntoDB);
router.get('/', academicFacultiesController.getAllFromDB);
router.get('/:id', academicFacultiesController.getSingle);
router.patch('/:id', academicFacultiesController.updateSingle);
router.delete('/:id', academicFacultiesController.deleteSingle);

export const academicFacultiesRoutes = router;
