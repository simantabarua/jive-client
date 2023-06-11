import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const classData = useLoaderData();
  const { _id, className, availableSeats, image, price } = classData.data;

  const { user } = useAuth();
  const axiosSecure = useAxios();
  const handleUpdateClasses = (data) => {
    const { className, availableSeats, image, price } = data;
    const newClassData = {
      className,
      image,
      availableSeats: parseFloat(availableSeats),
      price: parseFloat(price),
    };

    axiosSecure;
    axiosSecure
      .patch(`/update-class/${_id}`, newClassData)
      .then((response) => {
        console.log(response);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Class added successfully",
          });
          reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdateClasses)}>
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
              defaultValue={className}
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
              defaultValue={image}
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
              defaultValue={availableSeats}
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
              defaultValue={price}
            />
          </div>

          <button type="submit" className="btn btn-primary w-96 mx-auto">
            Update Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;
