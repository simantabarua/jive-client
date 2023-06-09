
const MySelectedClasses = () => {
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
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Class Name</td>
        <td>Instructor Name</td>
        <td>Available Seats</td>
        <td>Price</td>
        <td>
          <button className="button button-danger">Delete</button>
          <button className="button button-primary">Pay</button>
        </td>
      </tr>
      {/* Add more rows for other selected classes */}
    </tbody>
  </table>
</div>

    </>
  );
};

export default MySelectedClasses;
