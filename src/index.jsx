import "./App.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";





function App()  {
return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Becca te da la bienvenida"}/>
        <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log("cantidad agregada" , quantity)}/>
        </div>
    );
}
export default App;