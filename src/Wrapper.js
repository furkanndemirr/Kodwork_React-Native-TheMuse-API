import React from "react";
import FavProvider from "./context/FavProvider/FavProvider";
import App from "./App";

export default () => {
    return (
      
            <FavProvider>
            <App />
            </FavProvider>
        
    )
}