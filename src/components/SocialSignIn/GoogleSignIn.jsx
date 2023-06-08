import useAuth from "../../hooks/useAuth";

const GoogleSignIn = () => {
  const {googleSignIn} = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  return (
    <>
      <button onClick={handleGoogleSignIn} className="btn btn-outline  w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          className="w-6 h-6 mx-2"
        />
        Login With Google
      </button>
    </>
  );
};

export default GoogleSignIn;
