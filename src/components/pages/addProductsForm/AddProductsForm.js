import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addProducts } from '../../../store/actions/ItemsAction';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';
import {PuffLoader} from 'react-spinner'
import './AddProductsForm.css'
import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../config/firebase';
import { onSnapshot } from 'firebase/firestore';

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
            

            <form action='#' className='form'>
                <p className='product-information'>Prodcut Information</p>
                <div className='hr'/>

                <div className='input-feilds'>
                    <input  onChange={(e)=>titleGetter(e)} type="text" placeholder='Prodcut Title'  className='input' / >
                    <input  onChange={(e)=>priceGetter(e)} type="number" placeholder='Product Price' className='input' />
                    {/* <input  onChange={(e)=>catagoryGetter(e)} type="string" placeholder='Product Catagory' /> */}

                    <select onChange={(e)=>catagoryGetter(e)} className='input'>
                        <option value="catagory">catagory</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>

                <div onClick={submitHandler} className="submit-button">
                    <Link to="/items"><Button title="Submit" width="10vw" /></Link>
                </div>
            </form>
        </div>
    );
};

export default AddProductsForm;