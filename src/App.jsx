import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Productos"} />
      <ItemCountContainer />
    </>
  );
}

export default App;
