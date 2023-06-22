import { useState } from "react";
import Button from "../Button/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  const changeNameHandler = (e) => {
    setFormData((prevState) => {
      return {
        name: e.target.value,
        price: prevState.price,
      };
    });
  };

  const changePriceHandler = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = Number(rawValue).toLocaleString();

    setFormData((prevState) => {
      return {
        name: prevState.name,
        price: formattedValue,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const plainPrice = formData.price.replace(/,/g, "");

    alert(JSON.stringify({ name: formData.name, price: plainPrice }));
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">이름</label>
      <input
        id="name"
        type="text"
        onChange={changeNameHandler}
        value={formData.name}
      />
      <label htmlFor="price">가격</label>
      <input
        id="price"
        type="text"
        onChange={changePriceHandler}
        value={formData.price}
      />
      <Button color="skyblue" size="small">
        저장
      </Button>
    </form>
  );
};

export default Form;
