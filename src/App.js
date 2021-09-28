import Header from "./components/Header";
import Todolist from "./components/Todolist";
import useFetch from "./hooks/FetchData";
function App() {
  const { data, isPending, error, refresh } = useFetch(
    "http://localhost:8000/items?_sort=status&_order=asc"
  );
  return (
    <div className="App">
      <Header refresh={refresh} />
      <Todolist
        data={data}
        isPending={isPending}
        error={error}
        refresh={refresh}
      />
    </div>
  );
}

export default App;
