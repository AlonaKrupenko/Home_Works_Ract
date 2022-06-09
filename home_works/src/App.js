import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <Alert text="What is love?" />
      <Alert type="warning" text="Oh baby, don't hurt me" />
      <Alert type="info" text="Don't hurt me" />
      <Alert type="dark" text="No more" />
    </div>
  );
}

export default App;
