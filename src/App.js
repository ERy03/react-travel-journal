import React from "react";
import destinationsData from "./data";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const destinationElements = destinationsData.map(item => {
    return (
      console.log(item.imageUrl),
      <Card
      key={item.id}
      item={item}
      />
    );
  });
  return (
    <div>
      <Header />
      {destinationElements}
    </div>
  );
}

export default App;
