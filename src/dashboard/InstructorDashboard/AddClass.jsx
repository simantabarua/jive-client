import { useForm } from "react-hook-form";

const AddClass = () => {
  const { register, handleSubmit } = useForm();

  const handleAddClasses = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleAddClasses)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full md:max-w-7xl mx-auto px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Course Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor</span>
            </label>
            <input
              type="text"
              {...register("instructor")}
              placeholder="Instructor Name"
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description")}
              placeholder="Course Description"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input
              type="text"
              {...register("duration")}
              placeholder="Duration"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Start Date</span>
            </label>
            <input
              type="date"
              {...register("startDate")}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">End Date</span>
            </label>
            <input
              type="date"
              {...register("endDate")}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location")}
              placeholder="Location"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              {...register("category")}
              placeholder="Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Prerequisites</span>
            </label>
            <textarea
              {...register("prerequisites")}
              placeholder="Prerequisites (separated by commas)"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button type="submit" className="btn btn-primary w-96">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
