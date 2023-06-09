import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
  // const [classes, setClasses] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const {
    isLoading,
    data: classes = [],
    refetch,
  } = useQuery(("selectedClasses", user?.email), () => {
    return axiosSecure.get(`/selected-class?email=${user?.email}`);
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selected-class/${id}`).then((response) => {
          console.log(response);

          if (response?.data?.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  console.log(classes);

  if (isLoading) {
    return <Loading />;
  }

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
            {classes?.data.map(
              ({ _id, name, instructor, availableSeats, price }, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{name}</td>
                  <td>{instructor}</td>
                  <td>{availableSeats}</td>
                  <td>{price}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => {
                        handleDelete(_id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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

