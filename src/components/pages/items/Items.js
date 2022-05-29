import React, { useState } from 'react';
import { fetchProducts } from '../../../store/actions/ItemsAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Items.css'
import Button from '../../button/Button';

const Items = () => {

    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch()

    


    useEffect(() => {
        console.log("Fetch Products use Effect run");
        dispatch(fetchProducts(setLoader))
    }, [])

    const allProducts = useSelector((Store) => Store.ItemReducer.products)
    console.log("All Products in Items page", allProducts);


    if(loader){
        return <div className='items-body'>
            <h1>Loading...</h1>
        </div>
    }
    
    


    return (
        <div className='items-body'>
            <table border="1" className='table'>
                <tr>
                    <th>SR#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>

                {allProducts?.map((item, index)=>{
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td> ${item.price}</td>
                        <td className='actions'> <button ><Button title="Delete" width="6vw"/></button></td>
                    </tr>
                })}

            </table>

            <Link to="/add-products-form" className='buttons' >
                <Button title="Add Products" width="100vw"/>
            </Link>

            
        </div>
    );
};

export default Items;