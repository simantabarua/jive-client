import useAuth from "../../hooks/useAuth";

const Avatar = () => {
  const { logOut, user } = useAuth();
  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64"
        >
          <div className="text-center p-4">
            <h2 className="font-semibold">{user?.displayName}</h2>
            <p>{user?.email}</p>
          </div>
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={handleLogOut}> logout</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Avatar;
