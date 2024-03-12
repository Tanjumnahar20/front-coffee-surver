/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {name,details,category,quantity,photo,_id,supplier,taste} = coffee;

    const handleUpdateCoffee=event =>{
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
    }


    return (
        <div className='bg-slate-300 p-24'>
            <h3 className='text-3xl font-extrabold'>update  a coffee</h3>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className='md:flex mb-4 ' >
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' defaultValue={name} placeholder='Coffee name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text '>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder='Supplier name' className='input input-bordered w-full' />
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
                            <input type="text" name='quantity' defaultValue={quantity} placeholder='Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>

                    <div className='form-control w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text '>Details</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='details'defaultValue={details} placeholder='Details' className='input input-bordered w-full' />
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
                            <input type="text" name='category' defaultValue={category} placeholder='Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>

                    <div className='form-control w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text '>Taste</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='taste' defaultValue={taste} placeholder='Details' className='input input-bordered w-full' />
                        </label>
                    </div>
                   </div>

                <div className='mb-4 ' >
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Photo url</span>
                        </label>

                        <label className='input-group'>
                            <input type="text" name='photo' defaultValue={photo} placeholder='Photo' className='input input-bordered w-full' />
                        </label>
                    </div>
                     </div>
                     <input type="submit" value="Update coffee" className='btn btn-block ' />
            </form>
        </div>
    );
};

export default UpdateCoffee;
