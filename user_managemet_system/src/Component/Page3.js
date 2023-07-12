import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Page3=()=>{
  const [list,setList]=useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  let querySource = searchParams.get("source");
  console.log(querySource);
  useEffect(()=>{
    Perticularlist();
   },[])
  const Perticularlist=async ()=>{

    // let key=event.target.value;
    let result=await fetch(`http://localhost:5000/list/${querySource}`);
    // console.log(result);
    result=await result.json()
   
    if(result)
    {
        setList(result);
        console.log(list.name)
    }
   
}
    return (
      <div className="home_div1">
         <table className="table">
            <tr className="tr">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
           
               <tr className="tr">
                <td>{list._id}</td>
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td>{list.phone}</td>
             </tr>
           </table>
      </div>
    )
}
export default Page3;