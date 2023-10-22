import React from "react";
import { toast } from "react-toastify";
// import { appDB } from "../firebase/firebase.config";



// Create a Table to add, edit and view User data such as Name, Email, Age, Gender, City

const AddNew = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append("name", e.target.name.value);
    data.append("email", e.target.email.value);
    const formValues = Object.fromEntries(data.entries());
    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.age ||
      !formValues.gender ||
      !formValues.city
    ) {
      return toast.error("Please Provide the value in each input field");
    } else {
      
      // appDB.child('members').push(formValues, (err)=>{
      //       if(err){
      //           toast.error(err)
      //       } else{
      //           toast.success('Member Added Successfully')
      //       }
      //   })

    }


    console.log(formValues);
  };

  return (
    <div>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
              Add New Member
            </h2>
          </div>

          <div class="relative max-w-md mx-auto mt-8 md:mt-16">
            <div class="overflow-hidden bg-white rounded-md shadow-md">
              <div class="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={onSubmit} action="#" method="POST">
                  <div class="space-y-5">
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Name
                      </label>
                      <div class="mt-2.5  text-gray-400 focus-within:text-gray-600">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          class="block w-full py-2 pl-3 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Emai Address
                      </label>
                      <div class="mt-2.5  text-gray-400 focus-within:text-gray-600">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your full name"
                          class="block w-full py-2 pl-3 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Age
                      </label>
                      <div class="mt-2.5  text-gray-400 focus-within:text-gray-600">
                        <input
                          type="number"
                          name="age"
                          placeholder="Enter your full name"
                          class="block w-full py-2 pl-3 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        Gender
                      </label>
                      <div class="mt-2.5  text-gray-400 focus-within:text-gray-600">
                        <input
                          type="text"
                          name="gender"
                          placeholder="Enter your full name"
                          class="block w-full py-2 pl-3 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        City Name
                      </label>
                      <div class="mt-2.5  text-gray-400 focus-within:text-gray-600">
                        <input
                          type="text"
                          name="city"
                          placeholder="Enter your full name"
                          class="block w-full py-2 pl-3 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Add New Member
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddNew;
