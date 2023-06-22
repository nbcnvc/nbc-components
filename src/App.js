import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Select from "./components/Select/Select";

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

      <br />
      <br />
      <h2>Select</h2>
      <div style={{ overflow: 'hidden', height: "150px", border: "2px solid lightgray" }}>
        <Select />
      </div>
      <div style={{ height: "150px", border: "2px solid lightgray" }}>
        <Select />
      </div>
    </>
  );
}

export default App;
