import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addProducts } from '../../../store/actions/ItemsAction';
import Button from '../../button/Button';
import './AddProductsForm.css'

const AddProductsForm = () => {

    const [loader, setLoader] = useState(false)

    

    const dispatch = useDispatch()

    let productTitle = "";
    let productPrice = "";

    const titleGetter = (e) => {
        productTitle = e.target.value
    }

    const priceGetter = (e) => {
        productPrice = e.target.value
    }


    const submitHandler = () => {
        dispatch(addProducts(productTitle, productPrice, setLoader))
    }

    if(loader){
        return <div className='form-body'>
            <h1>Loading...</h1>
        </div>
    }

    return (
        <div className='form-body'>
            <form action='#'>
                <input  onChange={(e)=>titleGetter(e)} type="text" placeholder='Prodcut Title' />
                <input  onChange={(e)=>priceGetter(e)} type="number" placeholder='Product Price' />
                <div onClick={submitHandler}>
                    <Button title="Submit" width="10vw" />
                </div>
            </form>
        </div>
    );
};

export default AddProductsForm;