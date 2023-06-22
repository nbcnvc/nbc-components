import { useState } from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import { Modal1, Modal2, Overlay } from "./components/Modal/Modal";
import Select from "./components/Select/Select";

function App() {
  const [isFirstModal, setIsFirstModal] = useState(false);
  const [isSecondModal, setIsSecondModal] = useState(false);

  const toggleFirstHandler = () => {
    setIsFirstModal((state) => !state);
  };
  const toggleSecondHandler = () => {
    setIsSecondModal((state) => !state);
  };

  return (
    <>
      {isFirstModal && (
        <div >
          <Modal1 clickHandler={toggleFirstHandler}/>
        </div>
      )}
      {isSecondModal && (
        <div >
          <Modal2 clickHandler={toggleSecondHandler}/>
        </div>
      )}
      <h2>Button</h2>
      <Button color="green" size="big" primary>
        Large primary Button
      </Button>
      <Button color="green" size="big">
        Big
      </Button>
      <Button color="green" size="small">
        Small
      </Button>

      <br />
      <br />
      <Button color="red" size="big" primary>
        Large primary Button
      </Button>
      <Button color="red" size="big">
        Big
      </Button>
      <Button color="red" size="small">
        Small
      </Button>

      <br />
      <br />
      <h2>Input</h2>
      <Form />

      <br />
      <br />
      <h2>Select</h2>
      <div style={{ display: "flex" }}>
        <div
          style={{
            overflow: "hidden",
            height: "150px",
            border: "2px solid lightgray",
          }}
        >
          <Select />
        </div>
        <div style={{ height: "150px", border: "2px solid lightgray" }}>
          <Select />
        </div>
      </div>

      <br />
      <br />
      <h2>Modal</h2>
      <Button color="green" size="big" onClick={toggleFirstHandler}>
        modal 1
      </Button>
      <Button color="red" size="big" onClick={toggleSecondHandler}>
        modal 2
      </Button>
    </>
  );
}

export default App;
