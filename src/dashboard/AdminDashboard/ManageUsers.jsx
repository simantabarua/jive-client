
const ManageUsers = () => {
  return (
    <>
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
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
            <div>
              <div className="font-bold">John Doe</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>john.doe@example.com</td>
        <td>Student</td>
        <td>
          <button className="button button-primary">Make Instructor</button>
          <button className="button button-primary">Make Admin</button>
        </td>
      </tr>
      {/* Add more rows for other users */}
    </tbody>
  </table>
</div>

    </>
  );
};

export default ManageUsers;
