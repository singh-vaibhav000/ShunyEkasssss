import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
const Home=()=>{
  const navigate=useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("https://backends-ieng.onrender.com/lists");
    result = await result.json();
    // console.log(result);
    setProducts(result);
    
  };
  const page2=()=>{
   navigate('/page2?type=new')
  }
  const view=(item)=>{
    navigate('/page3/?source='+item)
  }
  const edit=(item)=>{
   
    navigate('/page2/?type=edit&&source='+item)
  }
  const del = async (id) => {
    console.log(id);
    let result = await fetch(`https://backends-ieng.onrender.com/list/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    } 
  };
    return(
        <div className="home_div">
           <h1>Add your details</h1>
          <button onClick={()=>page2()}>Add List</button>
          <div className="home_div1">
           <table className="table">
            <tr className="tr">
              <th>ID</th>
              <th>Name</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
           
             {
              products.map((item)=>(
               <tr className="tr">
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td><button onClick={()=>view(item._id)}>View</button></td>
                <td><button onClick={()=>edit(item._id)}>Edit</button></td>
                <td><button onClick={()=>del(item._id)}>Delete</button></td>
             </tr>
              ))
             }
       
           </table>
           </div>
        </div>
    )
}
export default Home;
