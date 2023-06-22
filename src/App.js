import Button from "./components/Button/Button";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
