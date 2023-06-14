import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { image, userName, email, numberOfClasses, totalStudents } = instructor;

  return (
    <div
      className="card  w-full h-full  md:w-96 md:h-[29rem] bg-base-300 shadow-xl rounded-xl px-2 md:p-4 "
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <figure>
        <img
          className="h-64 w-full object-left-top object-cover  md:w-96 rounded-lg"
          src={image}
          loading="lazy"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{userName}</h2>
        <p>{email}</p>

        <span>Number of Classes: {numberOfClasses}</span>
        <span> Total Students: {totalStudents}</span>

        <div className="card-actions">
          <Link to="">
            <button className="btn btn-sm btn-primary border-0">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
