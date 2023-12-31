import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const handleAddClasses = (data) => {
    const { className, availableSeats, price, image } = data;
    const classData = {
      className,
      instructor: user.displayName,
      instructorEmail: user.email,
      image,
      availableSeats: parseFloat(availableSeats),
      price: parseFloat(price),
      classStatus: "pending",
      feedback: "",
      totalEnroll: 0,
    };

    axiosSecure
      .post("/add-class", classData)
      .then((response) => {
        if (response.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Class added successfully",
          });
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleAddClasses)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:max-w-7xl mx-auto px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor</span>
            </label>
            <input
              type="text"
              {...register("instructor")}
              placeholder="Instructor Name"
              className="input input-bordered"
              value={user?.displayName}
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Instructor email"
              className="input input-bordered"
              value={user?.email}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              {...register("className")}
              placeholder="Class Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              {...register("image")}
              placeholder="Image URL"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              {...register("availableSeats")}
              placeholder="Available Seats"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              {...register("price")}
              placeholder="Price"
              className="input input-bordered"
            />
          </div>

          <button type="submit" className="btn btn-primary w-96">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
