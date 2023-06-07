import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Payment from "../pages/Payment/Payment";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import Registration from "../pages/Registration/Registration";
import InstructorDashboard from "../pages/InstructorDashboard/InstructorDashboard";
import Login from "../pages/Login/Login";

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
        path: "/dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/instructor-dashboard",
        element: <InstructorDashboard />,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
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
]);
