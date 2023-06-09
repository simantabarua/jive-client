import axios from "axios";

const Home = () => {
  const genToken = () => {
    axios
      .post("http://localhost:5000/jwt", { data: "hi" })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={genToken} className="btn btn-primary">
        gen
      </button>
    </div>
  );
};

export default Home;
