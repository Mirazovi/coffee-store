import React from 'react'
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,coffees, setCoffees}) => {
  const { photoUrl, name, supplier, details, taste, chef, price, _id } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            // ✅ CONDITION CHECK
            if (data?.success) {
              Swal.fire(
                "Deleted!",
                "Coffee has been deleted successfully.",
                "success"
              );
              // remove the coffee from the state 
              const remainingCoffees = coffees.filter(cof => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          })
      }
    });
  };



  return (
    <div >

      <div className="border rounded-lg shadow-sm overflow-hidden flex items-center justify-between ">
        {/* Photo */}
        <img
          src={photoUrl}
          alt={coffee}
          className="w-48 h-48 object-cover "
        />

        {/* Content */}
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">💲 Price: {price}</p>
          <p className="text-gray-600">📦 Details: {details}</p>
          <h2 className="text-xl font-semibold"> Taste: {taste}</h2>
          <p className="text-gray-600">💲 Supplier: {supplier}</p>
          <p className="text-gray-600">📦 Chef Name: {chef}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 p-4 pt-0">
          <Link to={`/updateCoffee/${_id}`}>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Update
            </button>
          </Link>


          <Link to={`/coffees/${_id}`}>  <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            View
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>

    </div>
  )
}

export default CoffeeCard