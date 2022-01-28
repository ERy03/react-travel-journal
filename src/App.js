import React from "react";
import destinationsData from "./data";
import Header from "./components/Header";
import Card from "./components/Card";


function App() {
  const destinationElements = destinationsData.map(item => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    );
  });
  return (
    <div>
      <Header />
      <div className="card-container">
        {destinationElements}
      </div>
    </div>
  );
}

export default App;
