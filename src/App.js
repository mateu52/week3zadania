import React from "react";
import Button from "./components/Button";
import { Input, Textarea } from "./components/Form";
import Card from "./components/Form/Card";
import Menu from "./components/Menu/index";
import MenuLink from "./components/Menu/MenuLink";
import Employees from "./components/Employees";
import data from "./data";

function App() { 
  return (
    <div>
      <Card
        title="Shrim and Chorizo Paella" 
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." 
        showMore="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...." 
      />
  
        <Menu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/contact" isActive>Contact</MenuLink>
          <MenuLink to="/posts">Posts</MenuLink>
        </Menu>
        <Button />

        <Employees data={data} />
    </div>
  );
}

export default App;
