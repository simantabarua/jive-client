import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleSignIn = () => {
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((data) => {
        const newUser = {
          userName: data.user.displayName,
          email: data.user.email,
          role: "student",
        };
        
        axios
          .post("/users", newUser)
          .then((response) => {
            if (response.data.acknowledged) {
              Swal.fire({
                icon: "success",
                title: "Sign in success",
              });
              navigate(from, { replace: true });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<span style="color:red">${error.message}</span>`,
        });
      });
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
