import React, { Suspense, lazy, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LazyLoading from "./Lazy/LazyLoading";
import NotPage from "./Comparents/Global/Notpage";
import ToolbarComparent from "./Comparents/Global/ToolbarComparent";
import SidebarComparent from "./Comparents/Global/SidebarComparent";
import "./index.css";


const StudentDashboard = lazy(() => import("./Comparents/StudentPages/StudentDashboard"));
const VeliDashboard = lazy(() => import("./Comparents/VeliPages/VeliDashboard"));
const Market = lazy(() => import("./Comparents/Market/Market"));
const Blog = lazy(() => import("./Comparents/Blog/Blog"));
const DashBoardLazy = lazy(() => import("./Comparents/Dashboard/AppDashboard"));
const Login = lazy(() => import("./Comparents/Login/Login"));
const ResetPassword = lazy(() => import("./Comparents/Login/ResetPassword"));
const TeacherPages = lazy(() =>
  import("./Comparents/TeacherPages/TeacherDashboard")
);
const CreateSchoolsForm = lazy(() =>
  import("./Comparents/CreateSchoolsForm/CreateSchoolsForm")
);

function App() {
  const [Sidebar, setSidebar] = useState(false);
  const CloseSidebar = useCallback(() => {
    setSidebar(!Sidebar);
    return Sidebar;
  }, [Sidebar]);

  return (
    <Suspense fallback={<LazyLoading />}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SidebarComparent Open={Sidebar} Close={CloseSidebar} />
                <ToolbarComparent SidebarOpenControl={(e) => setSidebar(e)} />
                <DashBoardLazy />
              </>
            }
          />
          <Route
            path="/teachersetting"
            element={
              <>
                <SidebarComparent Open={Sidebar} Close={CloseSidebar} />
                <ToolbarComparent SidebarOpenControl={(e) => setSidebar(e)} />
                <TeacherPages />
              </>
            }
          />

          <Route
            path="/studentsetting"
            element={
              <>
                <SidebarComparent Open={Sidebar} Close={CloseSidebar} />
                <ToolbarComparent SidebarOpenControl={(e) => setSidebar(e)} />
                <StudentDashboard />
              </>
            }
          />

          <Route
            path="/velisetting"
            element={
              <>
                <SidebarComparent Open={Sidebar} Close={CloseSidebar} />
                <ToolbarComparent SidebarOpenControl={(e) => setSidebar(e)} />
                <VeliDashboard />
              </>
            }
          />

          <Route
            path="/market"
            element={
              <>
                <SidebarComparent Open={Sidebar} Close={CloseSidebar} />
                <ToolbarComparent SidebarOpenControl={(e) => setSidebar(e)} />
                <Market />
              </>
            }
          />

          <Route
            path="/blog"
            element={
              <>
                <SidebarComparent Open={Sidebar} Close={CloseSidebar} />
                <ToolbarComparent SidebarOpenControl={(e) => setSidebar(e)} />
                <Blog />
              </>
            }
          />

          <Route path="/createschool" element={<CreateSchoolsForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<NotPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
