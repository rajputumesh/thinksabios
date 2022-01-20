import React from 'react';
import '../css/home.css';
import video from '../images/video.mp4';
import { NavLink } from "react-router-dom";

const Home = () =>{
    return (
        <div style={{background:"black"}}>
            <div bg="dark" className='flex-center w-100'>
            <video className='myVideo' loop muted autoPlay>
                <source src={video} type="video/mp4"/>
            </video>
            </div>
            <div className='text-center py-5'>
                <nav className='flex flex-wrap py-5'>
                    <NavLink className='px-5 mx-4 btn btn-outline-light btn-lg' style={{borderRadius: '25px'}} to="/stock"> Stock </NavLink>
                    <NavLink className='px-5 mx-4 btn btn-outline-light btn-lg' style={{borderRadius: '25px'}} to="/option"> Options </NavLink>
                    <NavLink className='px-5 mx-4 btn btn-outline-light btn-lg' style={{borderRadius: '25px'}} to="/crypto"> Crypto </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Home;
