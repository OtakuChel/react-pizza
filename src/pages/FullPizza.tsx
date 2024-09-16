import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://66d9f1944ad2f6b8ed5689b4.mockapi.io/items/" + id
        );
        console.log(data);
        setPizza(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <div className="container">"loading..."</div>;
  }
  return (
    <div className="container">
      <div>
        <img src={pizza.imageUrl} alt="" />
        <h2>{pizza.title}</h2>
        <h4>{[pizza.price]} Руб.</h4>
      </div>

      <div className="botton--container">
        <button className="button button--outline go-back-btn full-pizza-back-btn">
          <p>Вернуться назад</p>
        </button>
      </div>
    </div>
  );
};

export default FullPizza;
