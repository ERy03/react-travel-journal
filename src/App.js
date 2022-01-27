import React from "react";
import destinationsData from "./data";
import Header from "./components/Header";


function App() {
  // const destinationElements = destinationsData.map(item => {
  //   return (
  //     <Card
  //     key={item.id}
  //     item={item}
  //     />
  //   );
  // });
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
