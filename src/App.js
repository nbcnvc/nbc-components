import Button from "./components/Button/Button";

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
    </>
  );
}

export default App;
