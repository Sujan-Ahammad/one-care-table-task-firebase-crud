import React from "react";
import {collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc}from "firebase/firestore"
import {appDB} from "../firebase/firebase.config"


const Table = () => {


  const tableCollection= collection(appDB,"one-care-tables")
  console.log(tableCollection);

  return (
    <div>
      <div className="overflow-scroll">
        <table className="table success ">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <div className="flex items-center gap-2">
                  <p>Email</p>
                </div>
              </th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>Actions</th>
              {/* <th>Edit</th>
              <th>Delete</th>
              <th>View</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Red</td>
              <div className="flex p-4 justify-around">
                <button className="btn w-5/2 mx-auto bg-sky-400 rounded-lg px-5 py-1 ">Edit</button>
                <button className="btn w-5/2 mx-auto bg-red-400 rounded-lg px-5 py-1 ">Delete</button>
                <button className="btn w-5/2 mx-auto bg-green-400 rounded-lg px-5 py-1 ">Success</button>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
