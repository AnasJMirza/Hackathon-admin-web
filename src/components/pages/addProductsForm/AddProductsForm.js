import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addProducts } from '../../../store/actions/ItemsAction';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';
import {PuffLoader} from 'react-spinner'
import './AddProductsForm.css'

const AddProductsForm = () => {

    const [loader, setLoader] = useState(false)

    

    const dispatch = useDispatch()

    let productTitle = "";
    let productPrice = "";
    let productCatagory = "";

    const titleGetter = (e) => {
        productTitle = e.target.value
    }

    const priceGetter = (e) => {
        productPrice = e.target.value
    }

    const catagoryGetter = (e) => {
        productCatagory = e.target.value
    }


    const submitHandler = () => {
        dispatch(addProducts(productTitle, productPrice, productCatagory, setLoader))
    }

    if(loader){
        return <div className='form-body'>
            <div className='loading-screen'>
                <PuffLoader color="crimson" size={60}/>
            </div>
        </div>
    }

    return (
        <div className='form-body'>
            <form action='#'>
                <input  onChange={(e)=>titleGetter(e)} type="text" placeholder='Prodcut Title' />
                <input  onChange={(e)=>priceGetter(e)} type="number" placeholder='Product Price' />
                {/* <input  onChange={(e)=>catagoryGetter(e)} type="string" placeholder='Product Catagory' /> */}

                <select onChange={(e)=>catagoryGetter(e)}>
                    <option value="catagory">catagory</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                    <option value="accessories">Accessories</option>
                </select>

                <div onClick={submitHandler}>
                    <Link to="/items"><Button title="Submit" width="10vw" /></Link>
                </div>
            </form>
        </div>
    );
};

export default AddProductsForm;