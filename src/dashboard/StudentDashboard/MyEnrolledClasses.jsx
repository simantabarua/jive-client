const MyEnrolledClasses = () => {
  return <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Available Seats</th>
        <th>Price</th>
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
      </tr>
      {/* Add more rows for other enrolled classes */}
    </tbody>
  </table>
</div>
;
};

export default MyEnrolledClasses;
