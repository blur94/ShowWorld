import "./styles.css";
import Button from "./templates/Gilead/Button";
import Table from "./templates/Gilead/Table";

export default function App() {
  return (
    <div className="App">
      <Table />
      <Button title={'Submit'} />
    </div>
  );
}
