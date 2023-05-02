import { useState } from "react";
import Header from "./Component/Header/Header";
import Content from "./Component/Contenet/Content";
import Summary from "./Component/Summary/Summary";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('myGroceryList')));
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleDelete = (id, name) => {
    const changeItem = items.filter((item) => item.id !== id && item.name !== name )
    setItems(changeItem) 
    localStorage.setItem('myGroceryList', JSON.stringify(changeItem))
  }

  const addNewItem = () => {
    let addedItem, newId, newQuantity, pusheItem;
    newId = items.length > 0 ? items[items.length - 1].id + 1 : 1 ;
    // for(let i = 0; i < items.length; i++) {

    // }
    newQuantity = quantity === '' || quantity <= 0 ? 1 : quantity;
    addedItem = {id: newId, name: newItem, price: newPrice, quantity: newQuantity}
    pusheItem = [...items, addedItem]
    setItems(pusheItem)
    localStorage.setItem('myGroceryList', JSON.stringify(pusheItem))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewItem()
    setNewItem('')
    setNewPrice('')
    setQuantity('')
  }

  return (
    <div className="App">
      <Header heading={"Grocery List"} />
      <Content 
        items={items}
        newItem={newItem}
        newPrice={newPrice}
        quantity={quantity}
        setNewItem={setNewItem}
        setNewPrice={setNewPrice}
        setQuantity={setQuantity}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        search={search}
        setSearch={setSearch}
      />
      <Summary 
        items={items}
      />
    </div>
  );
}

export default App;
