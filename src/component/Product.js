import React from 'react';
import { NavLink } from "react-router-dom";

const Product = ({name,path,imgLink}) =>{
    return (
        <div className='col-md-3 col-sm-6'>
            <div className='text-center bg-light pb-4'>
                <img className='w-100' src={imgLink} alt="" />
                <div className='px-lg-4 mx-3 px-sm-5 py-3'>
                    <p className='h3'>{name}</p>
                </div>
                <div>
                    <NavLink className='mt-1 px-5 mx-4 btn btn-primary btn-lg text-white' style={{borderRadius: '25px',fontWeight:600}} to={path}> Learn More </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Product;
