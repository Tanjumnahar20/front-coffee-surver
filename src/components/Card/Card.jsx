/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({coffee}) => {
    const {name,details,category,quantity,photo,_id} = coffee;

   const handleDelete = _id =>{
    console.log(_id)

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
        
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:'DELETE',
          
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
          if(data.deletedCount >0){
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          }
        })
      }
    });
     

   }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-36 pl-4' src={photo} alt="Movie"/></figure>
  <div className=" mt-4 flex justify-between w-full pl-4 pr-4">
   <div>
   <h2 className="card-title">{name}</h2>
    <p>Details:{details}</p>
    <p>Category:{category}</p>
    <p>Available quantity:{quantity}</p>
   </div>
   <div className='card-actions  justify-end'>
   <div className="join join-vertical space-y-2">
  <button className="btn btn-active">view</button>

  <Link to={`updateCoffee/${_id}`}>
  <button className="btn btn-info mt-2">edit</button>

  </Link>

  <button onClick={()=> handleDelete(_id)}
   className="btn btn-success">x</button>
</div>
   </div>
   
  </div>
</div>
    );
};

export default Card;