import Loading from "../../components/Common/Loading";
import useClasses from "../../hooks/useClasses";

const ManageClasses = () => {
  const { isLoading, classes } = useClasses();
  if (isLoading) {
    return <Loading />;
  }
  console.log(classes[1]);
  
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
  {classes.map(({ className, instructor, email, availableSeats, price, classStatus }, index) => (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </td>
      <td>{className}</td>
      <td>{instructor}</td>
      <td>{email}</td>
      <td>{availableSeats}</td>
      <td>{price}</td>
      <td>{classStatus}</td>
      <td className="space-x-2">
        <button className="btn btn-sm btn-primary">Approve</button>
        <button className="btn btn-sm btn-danger">Deny</button>
        <button className="btn btn-sm btn-warning">Send Feedback</button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </>
  );
};

export default ManageClasses;
