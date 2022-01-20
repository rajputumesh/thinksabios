import React, {Component} from 'react';
import '../css/stock.css';
import { NavLink } from "react-router-dom";
import { stockarray } from "../js/stockarray";
import Product from "../component/Product";

class Stock extends Component {
    constructor()
    {
      super()
      this.state = {
        'stockarray': stockarray
      }
    }

    componentDidMount(){
        //
    }

    render() {
        const product = this.state.stockarray.map((data) =>{
            return (
                <Product key={data.id} name={data.name} path={data.path} imgLink={data.imgLink}/>
            )
        });

        return (
            <>
                <section className="stock_bg">
                    <div className='content'>
                        <div className=''>
                            <p className='title text-white'>STOCK SIMPLIFIED</p>
                            <NavLink className='mt-4 px-5 mx-4 btn btn-warning btn-lg' style={{borderRadius: '25px'}} to="/"> Back </NavLink>
                        </div>
                    </div>
                </section>
                <div className='bgdark py-5'>
                    <div className='container'>
                        <div className='flex row py-5'>
                            {product}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Stock;
