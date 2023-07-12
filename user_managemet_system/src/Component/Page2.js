import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const API_URL='http://localhost:5000/';
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  let queryType = searchParams.get("type");
  let querySource = searchParams.get("source");
  const navigate = useNavigate();

  useEffect(() => {
    if (queryType === 'edit') {
      getid();
    }
  }, []);

  const getid = async () => {
    let result = await fetch(API_URL+`list/${querySource}`);
    result = await result.json();
    setName(result.name);
    setEmail(result.email);
    setPhone(result.phone);
  };

  const Submit = async () => {
    if (queryType == "new") {
      let data = await fetch(API_URL+"add-list", {
        method: "post",
        body: JSON.stringify({ name, email, phone }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = await data.json();
    } else {
      let result = await fetch(API_URL+`lists/${querySource}`, {
        method: "put",
        body: JSON.stringify({ name, email, phone }),
        headers: {
          "Content-type": "application/json",
        },
      });
      result = await result.json();
    }
    navigate("/");
  };

  return (
    <div className="pageDiv">
    <label>Your Name:  </label>
    <input className="inp" onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter your Name"></input>
    <br></br>
    <label>Your Email:  </label>
    <input className="inp" onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Enter your Email"></input>
    <br></br>
    <label>Your Mob.No: </label>
    <input className="inp" onChange={(e)=>setPhone(e.target.value)} value={phone} type="text" placeholder="Enter Your Phone Number"></input>
    <br></br>
    <button className="button" onClick={()=>Submit()}>Submit</button>
  </div>
  );
};
export default Page2;