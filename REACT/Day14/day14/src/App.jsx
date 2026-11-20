import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";

const App = () => {
  return (
    <div className="p-5 space-y-8">
      <section>
        <h1>Task 1</h1>
        <Task1 />
      </section>

      <section>
        <h1>Task 2</h1>
        <Task2 />
      </section>

      <section>
        <h1>Task 3</h1>
        <Task3 />
      </section>
    </div>
  );
};

export default App;