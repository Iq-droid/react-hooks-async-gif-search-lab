import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="container mt-4">
        <GifListContainer />
      </div>
    </div>
  );
}

export default App;
