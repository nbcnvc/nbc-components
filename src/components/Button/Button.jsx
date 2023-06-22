import { styled } from "styled-components";

const NbcButton = styled.button`
  border: ${(props) => (props.primary ? `2px solid ${props.color}` : "none")};
  border-radius: 8px;
  background: ${(props) => (props.primary ? "transparent" : props.color)};
  padding: ${(props) => btnSizes[props.size].padding};
  font-size: ${(props) => btnSizes[props.size]["font-size"]};
  margin-right: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const btnSizes = {
  small: {
    padding: "8px 12px",
    "font-size": "10px",
  },
  big: {
    padding: "10px 30px",
    "font-size": "14px",
  },
};

const Button = (props) => {
  const { size, color, children, primary } = props;
  return (
    <>
      <NbcButton color={color} size={size} primary={primary}>
        {children}
      </NbcButton>
    </>
  );
};

export default Button;
