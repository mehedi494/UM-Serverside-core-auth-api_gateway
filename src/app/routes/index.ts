import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultiesRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { managementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { adminRoutes } from '../modules/admin/admin.routes';

const routes = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: authRoutes
  },
  {
    path: '/users',
    routes: UserRoutes
  },
  {
    path: '/faculties',
    routes: facultyRoutes
  },
  {
    path: '/academic-faculties',
    routes: academicFacultiesRoutes
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  },
  {
    path: '/management-departments',
    routes: managementDepartmentRoutes
  },
  {
    path: '/admins',
    routes: adminRoutes
  }
];

moduleRoutes.forEach((route) => {
  routes.use(route.path, route.routes);
});

export default routes;
