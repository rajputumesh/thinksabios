import React, {Component} from 'react';
import '../css/stock.css';
import { NavLink } from "react-router-dom";
import { optionarray } from "../js/optionarray";
import Product from "../component/Product";

class Option extends Component {
    constructor()
    {
      super()
      this.state = {
        'optionarray': optionarray
      }
    }

    componentDidMount(){
        //
    }

    render() {
        const product = this.state.optionarray.map((data) =>{
            return (
                <Product key={data.id} name={data.name} path={data.path} imgLink={data.imgLink}/>
            )
        });

        return (
            <>
                <section className="stock_bg">
                    <div className='content'>
                        <div className=''>
                            <p className='title text-white'>OPTIONS MAIN GROUP</p>
                            <NavLink className='mt-4 px-5 mx-4 btn btn-warning btn-lg' style={{borderRadius: '25px'}} to="/"> Back </NavLink>
                        </div>
                    </div>
                </section>
                <div className='bgdark pt-3 pb-5'>
                    <div className='container'>
                        <div className='flex row pb-5 justify-content-center'>
                            {product}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Option;
