import React, {Component} from 'react';
import '../css/stock.css';
import { NavLink } from "react-router-dom";
import { cryptoarray } from "../js/cryptoarray";
import Product from "../component/Product";

class Crypto extends Component {
    constructor()
    {
      super()
      this.state = {
        'cryptoarray': cryptoarray
      }
    }

    componentDidMount(){
        //
    }

    render() {
        const product = this.state.cryptoarray.map((data) =>{
            return (
                <Product key={data.id} name={data.name} path={data.path} imgLink={data.imgLink}/>
            )
        });

        return (
            <>
                <section className="stock_bg">
                    <div className='content'>
                        <div className=''>
                            <p className='title text-white'>CRYPTO STOCKS</p>
                            <NavLink className='mt-4 px-5 mx-4 btn btn-warning btn-lg' style={{borderRadius: '25px'}} to="/stock"> Back </NavLink>
                        </div>
                    </div>
                </section>
                <div className='bg-dark pt-3 pb-5'>
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

export default Crypto;
