import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useRoleChecker from "../hooks/useRoleChecker";
import Loading from "../components/Common/Loading";
import useAuth from "../hooks/useAuth";
const MainLayout = () => {
  const { isLoading } = useRoleChecker();
  const {loading} = useAuth()
  if (isLoading || loading ) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
