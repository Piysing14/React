import { useState } from "react";
import Child from "../Child";
function Parent({data}) {
    const [info,setInfo]=useState("1,2,3....")
    setTimeout(() => {
        setInfo("4,5,6...")
    }, 4000);
  return (
    <>
    
      <div>I am Parent component</div>
      <p>data:{data}</p>
      <p>{info}</p>
      <Child message={data}/>
    </>
  );
}

export default Parent;
