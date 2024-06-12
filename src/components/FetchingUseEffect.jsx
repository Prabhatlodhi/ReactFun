import { useEffect, useState } from "react";

// BASE URL = https://dummyjson.com
const API = "https://dummyjson.com/products";

const FetchingUseEffect = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const finalData = await response.json();
        console.log(finalData, "<========finalData");
        setApiData(finalData?.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>FetchingUseEffect</h1>
      {apiData?.map((product) => {
        {
          /* console.log(product, "<===product"); */
        }
        const { id, title, description, category, rating } = product;
        return (
          <div
            key={id}
            style={{
              border: "1px solid red",
              width: "200px",
              backgroundColor: "pink",
            }}
          >
            <h4>{title}</h4>
            <p> {description} </p>
            <em> {category} </em>
            <h2> {rating} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default FetchingUseEffect;
