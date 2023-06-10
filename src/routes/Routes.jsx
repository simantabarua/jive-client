import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Payment from "../pages/Payment/Payment";
import AdminDashboard from "../dashboard/AdminDashboard/AdminDashboard";
import Registration from "../pages/Registration/Registration";
import InstructorDashboard from "../dashboard/InstructorDashboard/InstructorDashboard";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import AddClass from "../dashboard/InstructorDashboard/AddClass";
import MyClasses from "../dashboard/InstructorDashboard/MyClasses";
import MySelectedClasses from "../dashboard/StudentDashboard/MySelectedClasses";
import MyEnrolledClasses from "../dashboard/StudentDashboard/MyEnrolledClasses";
import ManageClasses from "../dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../dashboard/AdminDashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import StudentDashboard from "../dashboard/StudentDashboard/StudentDashboard";

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
        element: <AdminDashboard />,
      },
      {
        path: "instructor-dashboard",
        element: <InstructorDashboard />,
      },
      {
        path: "student-dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "manage-classes",
        element: <ManageClasses />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "my-classes",
        element: <MyClasses />,
      },
      {
        path: "my-selected-classes",
        element: <MySelectedClasses />,
      },
      {
        path: "my-enrolled-classes",
        element: <MyEnrolledClasses />,
      },
    ],
  },
]);
