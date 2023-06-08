import { Link } from "react-router-dom";

const ClassCard = ({classItem}) => {
  return (
    <div
      className="card  w-full h-full  md:w-96 md:h-[29rem] bg-base-300 shadow-xl rounded-xl px-2 md:p-4 "
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <figure>
        <img
          className="h-64 w-full object-left-top object-cover   md:w-96 rounded-lg"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">fgf</h2>
        <div className="badge badge-secondary">dfd</div>
        <div className="flex flex-col md:flex-row md:gap-20">
          <span> Price: $fdd</span>
          <span>Rating: fdf</span>
        </div>
        <div className="card-actions">
          <Link to="">
            <button className="btn btn-sm bg-pink-600 border-0">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
