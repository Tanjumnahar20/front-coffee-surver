import React from 'react';
import swal from 'sweetalert2'

const AddCoffee = () => {

    const handleCoffeeSubmit=event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newCoffee ={name,supplier,quantity,details,taste,category,photo};
        console.log(newCoffee)

        // send data to server
       fetch('http://localhost:5000/coffee',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(newCoffee)
       })
       .then(res=>res.json())
       .then(data=>{console.log(data)
        if(data.insertedId){
            swal.fire({
                title: "success!",
                text: "You clicked the button!",
                icon: "success",
              });
        }
    })
    }

    return (
        <div className='bg-slate-300 p-24'>
            <h3 className='text-3xl font-extrabold'>add a coffee</h3>
            <form onSubmit={handleCoffeeSubmit}>
                {/* form row */}
                <div className='md:flex mb-4 ' >
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' placeholder='Coffee name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text '>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='supplier' placeholder='Supplier name' className='input input-bordered w-full' />
                        </label>
                    </div>
                  

                </div>
                {/* form row */}
                <div className='md:flex mb-4' >
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available quantity</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='quantity' placeholder='Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>

                    <div className='form-control w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text '>Details</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='details' placeholder='Details' className='input input-bordered w-full' />
                        </label>
                    </div>
                   </div>
                   {/* form row */}
               
                <div className='md:flex mb-4' >
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='category' placeholder='Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>

                    <div className='form-control w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text '>Taste</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='taste' placeholder='Details' className='input input-bordered w-full' />
                        </label>
                    </div>
                   </div>

                <div className='mb-4 ' >
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Photo url</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='photo' placeholder='Photo' className='input input-bordered w-full' />
                        </label>
                    </div>
                     </div>
                     <input type="submit" value="Add coffee" className='btn btn-block ' />
            </form>
        </div>
    );
};

export default AddCoffee;