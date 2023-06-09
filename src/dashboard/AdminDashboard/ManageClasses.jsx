

const ManageClasses = () => {
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
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>Class Name</td>
        <td>Instructor Name</td>
        <td>Instructor Email</td>
        <td>Available Seats</td>
        <td>Price</td>
        <td>Status</td>
        <th>
          <button className="button button-primary">Approve</button>
          <button className="button button-danger">Deny</button>
          <button className="button">Send Feedback</button>
        </th>
      </tr>
    </tbody>
 
  </table>
</div>

    </>
  );
};

export default ManageClasses;
