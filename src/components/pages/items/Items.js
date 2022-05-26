import React from 'react';
import { fetchProducts } from '../../../store/actions/ItemsAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Items.css'

const Items = () => {

    const dispatch = useDispatch()

    const allProducts = useSelector((Store) => Store.ItemReducer.products)
    console.log("All Products in Items page", allProducts);


    useEffect(() => {
        console.log("Fetch Products use Effect run");
        dispatch(fetchProducts())
    }, [])


    
    


    return (
        <div className='items-body'>
            <table border="1">
                <tr>
                    <th>SR#</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>

                {allProducts.map((item, index)=>{
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                })}
            </table>
        </div>
    );
};

export default Items;