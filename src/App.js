import { useState } from 'react';
import Recommended from './Recommended/Recommended';
import Sidebar from './Side-bar/Side-bar';
import Navigation from './navigation/nav';
import Products from './data_base/data';
import Card from "./components/card";
import Product from './Products/Product';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = Products.filter(
    (Products) => Products.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
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
      ({ category, company, newPrice, name }) =>
        category === selected ||
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

const result = filteredData(Product, selectedCategory, query);

return (
  <>
    <Sidebar handleChange={handleChange} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Products result={result} />
  </>
);
}




export default App;
