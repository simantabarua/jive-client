import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const {error} = useRouteError();
  console.log(error);
  
  return <div>
    

    <h2 className="text-7xl">Not found</h2>
  </div>;
};

export default NotFound;
