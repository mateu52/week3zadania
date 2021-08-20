import React from "react";
//import Button from "./components/Button";
import { Input, Textarea } from "./components/Form";
import Card from "./components/Form/Card";

function App() {
  return (
    <div>
      <Card
        title="Shrim and Chorizo Paella" 
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." 
        showMore="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...." 
      />
    </div>
  );
}

export default App;
