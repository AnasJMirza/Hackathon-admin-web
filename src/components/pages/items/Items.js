import React, { useState } from 'react';
import { fetchProducts } from '../../../store/actions/ItemsAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Items.css'
import Button from '../../button/Button';
import { ToastContainer } from 'react-toastify';
import { PuffLoader } from 'react-spinners';
import { deleteItem } from '../../../store/actions/ItemsAction';

const Items = () => {

    const [loader, setLoader] = useState(false)

    const dispatch = useDispatch()

    const deleteItems = (item) => {
        dispatch(deleteItem(setLoader, item))
    }

    


    useEffect(() => {
        console.log("Fetch Products use Effect run");
        dispatch(fetchProducts(setLoader))
    }, [])

    const allProducts = useSelector((Store) => Store.ItemReducer.products)
    console.log("All Products in Items page", allProducts);


    if(loader){
        return <div className='items-body'>
            <div className='loading-screen'>
                <PuffLoader color={"crimson"}  size={60} />
            </div>
        </div>
    }
    
    


    return (

        <div className='items-body'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <ToastContainer />
            <table border="1" className='table'>
                <tr>
                    <th>SR#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Catagory</th>
                    <th>Action</th>
                </tr>

                {allProducts?.map((item, index)=>{
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td> ${item.price}</td>
                        <td> {item.catagory}</td>
                        <td className='actions'> <button onClick={()=>deleteItems(item)}><Button title="Delete" width="6vw"/></button></td>
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