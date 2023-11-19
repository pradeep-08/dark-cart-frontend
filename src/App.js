import { useState } from "react";
import Recommended from './Recommended/Recommended';
import Sidebar from './Side-bar/Side-bar';
import Navigation from './navigation/nav';
import products from "./data_base/data";
import Card from "./components/card";
import Product from "./Products/Product";
import "./index.css";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (products) => products.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, name }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          name === selected
      );
    }

    return filteredProducts.map(
      ({ image, name, stars,  prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          image={image}
          name={name}
          stars={stars}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}





export default App;
