import React from 'react'
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

  const navigate = useNavigate()

  const { photoUrl, name, supplier, details, taste, chef, price, _id } = useLoaderData();

  const handleUpdateCoffee = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const UpdatedData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(UpdatedData)
    })
      .then(res => res.json())
      .then(data => {
        if (data?._id) {
          Swal.fire({
            title: "Coffee Updated Successfully ☕",
            icon: "success",
            draggable: true
          });
          navigate('/')
        }
      });

  };

  return (
    <div >
      <div className='px-20 text-center'>

        <h1 className='text-4xl'>Update Coffee</h1>
        <p className='text-gray-500 py-2'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      </div>
      {/* this is form  */}

      <form onSubmit={handleUpdateCoffee} className="space-y-6">
        {/* 2 Rows × 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Row 1 */}
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name='name'
              defaultValue={name}
              placeholder="Coffee Name"
              className="w-full input"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Chef</label>
            <input
              type="text"
              name='chef'
              defaultValue={chef}
              placeholder="Chef Name"
              className="w-full input"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Price</label>
            <input
              type='number'
              name='price'
              defaultValue={price}
              placeholder="price"
              className="w-full input"
            />
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-sm font-semibold mb-1">Supplier</label>
            <input
              type="text"
              name='supplier'
              defaultValue={supplier}
              placeholder="Supplier"
              className="w-full input"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Taste</label>
            <input
              type="text"
              name='taste'
              defaultValue={taste}
              placeholder="Taste"
              className="w-full input"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Details</label>
            <input
              type="text"
              name='details'
              defaultValue={details}
              placeholder="Details"
              className="w-full input"
            />
          </div>
        </div>

        {/* Photo URL - Full Width */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Photo URL
          </label>
          <input
            type="text"
            name='photoUrl'
            defaultValue={photoUrl}
            placeholder="Photo URL"
            className="w-full input"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#6f4e37] hover:bg-[#5a3e2b] text-white font-bold py-3 rounded-md transition"
        >
          Update Coffee
        </button>
      </form>
    </div>)
}

export default UpdateCoffee