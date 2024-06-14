import { useNavigate } from "react-router-dom";

const RandomPage = () => {
  const navigate = useNavigate();

  //   const goToHome = () => {
  //     navigate("/");
  //   };

  return (
    <div>
      <h1>Random Page</h1>
      <button onClick={() => navigate("/")}>Go To Home</button>
    </div>
  );
};

export default RandomPage;
