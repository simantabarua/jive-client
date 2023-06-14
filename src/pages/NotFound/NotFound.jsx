import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
  const { error, status, statusText } = useRouteError();
  useTitle("Error");
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-500 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center">
        <img className="absolute -top-2 h-72" src="https://i.ibb.co/41rDDPm/notfound.gif" alt="" />
        <div className="text-center">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300 ">
            {status}
          </p>
          <p className="text-2xl md:text-3xl lg:text-6xl font-bold tracking-wider  mt-4">
            {statusText}
          </p>
          <p className=" mt-4 pb-4 text-center">{error?.message}</p>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
