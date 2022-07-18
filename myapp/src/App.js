
import React from "react";

import Data from './data.json'
import Card from './Components/Card'
import User from './Components/User';
import Info from './Components/Info';
function App(){
  console.log(Data);
  let items = [];
  // for(let x = 0;x<Data.length;x++){
  //     items.push(<Card titleText = {Data[x].title} desc = {Data[0].desc} />);
  // }
  items = Data.map((item,index)=> <Card key={index}  titleText = {item.title} desc = {item.desc} />)
  return (
    <div>
      <User />
      <Info descript="This is info" />
      
    </div>
  )


}


export default App ;