import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const MySelectedClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxios();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/selected-class?email=${user?.email}`)
        .then((response) => {
          console.log(response.data);
          setClasses(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  console.log(classes);
  
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(
              (
                { name, instructor,  availableSeats, price },
                index
              ) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{name}</td>
                  <td>{instructor}</td>
                  <td>{availableSeats}</td>
                  <td>{price}</td>
                  <td className="space-x-2">
                    <button className="btn btn-danger">Delete</button>
                    <button className="btn btn-primary">Pay</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClasses;
