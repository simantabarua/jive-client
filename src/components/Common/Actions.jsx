import {  FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Actions = () => {
  return (
    <div className="space-x-2">
      <div
        className="tooltip hover:tooltip-open tooltip-top "
        data-tip="View Detail"
      >
        <Link to={`/`}>
          <button className="btn btn-circle bg-green-500 border-0">
            <FaEye />
          </button>
        </Link>
      </div>
      <div className="tooltip hover:tooltip-open tooltip-top" data-tip="Update">
        <Link to={`/`}>
          <button className="btn btn-circle bg-yellow-500 border-0">
            <FaEdit />
          </button>
        </Link>
      </div>
      <div className="tooltip hover:tooltip-open tooltip-top" data-tip="Delete">
        <button
          //   onClick={() => {
          //     handleDelete(_id);
          //   }}
          className="btn btn-circle bg-red-500 border-0"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Actions;
