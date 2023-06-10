import { createBrowserRouter } from "react-router-dom";
// Layouts
import MainLayout from "../layout/MainLayout";
import Dashboard from "../layout/Dashboard";

// Pages
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Payment from "../pages/Payment/Payment";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

// Dashboard Components
import AdminDashboard from "../dashboard/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../dashboard/InstructorDashboard/InstructorDashboard";
import StudentDashboard from "../dashboard/StudentDashboard/StudentDashboard";

// Admin Dashboard
import ManageClasses from "../dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../dashboard/AdminDashboard/ManageUsers";

// Instructor Dashboard
import AddClass from "../dashboard/InstructorDashboard/AddClass";
import MyClasses from "../dashboard/InstructorDashboard/MyClasses";

// Student Dashboard
import MySelectedClasses from "../dashboard/StudentDashboard/MySelectedClasses";
import MyEnrolledClasses from "../dashboard/StudentDashboard/MyEnrolledClasses";

// Route Components
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },

      {
        path: "/payment",
        element: <Payment />,
      },

      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin-dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "instructor-dashboard",
        element: (
          <InstructorRoute>
            <InstructorDashboard />
          </InstructorRoute>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },

      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "student-dashboard",
        element: (
          <StudentRoute>
            <StudentDashboard />
          </StudentRoute>
        ),
      },
      {
        path: "my-selected-classes",
        element: (
          <StudentRoute>
            <MySelectedClasses />
          </StudentRoute>
        ),
      },
      {
        path: "my-enrolled-classes",
        element: (
          <StudentRoute>
            <MyEnrolledClasses />
          </StudentRoute>
        ),
      },
    ],
  },
]);
