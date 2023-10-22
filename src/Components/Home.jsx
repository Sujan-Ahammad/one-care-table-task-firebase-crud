import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <h1 className="text-4xl font-semibold">Product List</h1>
            <div className="divider success">Table </div>
      <div className="flex justify-between py-4">
        <div className="flex w-1/3 relative items-center">
          <input
            className=" input success"
            placeholder="Search By Name or Email"
          />
          <button className="absolute right-5  solid info">Search</button>
        </div>
        <Link to='/add-new'><button className="btn solid info"> Add New </button> </Link>
        
        
      </div>
      <Table />
    </div>
  );
};

export default Home;
