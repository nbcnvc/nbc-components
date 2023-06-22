import { useState } from "react";
import { styled } from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  margin-right: 50px;
`;

const DropdownHeader = styled.div`
  padding: 5px 15px;
  border: 2px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const DropdownList = styled.div`
  position: absolute;
  border: 2px solid black;
  top: 120%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.div`
  width: 150px;
  padding: 8px 5px;
  box-sizing: border-box;

  &:hover {
    background: lightgray;
  }
`;

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const itemList = ["react", "python", "js", "java", "ruby", "rust"];

  const toggleOpenHandler = () => setIsOpen(!isOpen);

  const selectOptionHandler = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper onClick={toggleOpenHandler}>
      <DropdownHeader>
        <div>{selectedOption || "plz select"}</div>
        <div>▼</div>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {itemList.map((option) => (
            <DropdownItem onClick={selectOptionHandler(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Select;
