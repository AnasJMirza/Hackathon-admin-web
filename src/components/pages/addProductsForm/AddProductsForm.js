import React from 'react';
import Button from '../../button/Button';
import './AddProductsForm.css'

const AddProductsForm = () => {

    let productTitle = "";
    let productPrice = "";

    const titleGetter = (e) => {
        productTitle = e.target.value
    }

    const priceGetter = (e) => {
        productPrice = e.target.value
    }


    return (
        <div className='form-body'>
            <form action='#'>
                <input  onChange={(e)=>titleGetter(e)} type="text" placeholder='Prodcut Title' />
                <input  onChange={(e)=>priceGetter(e)} type="number" placeholder='Product Price' />
                <div>
                    <Button title="Submit" width="10vw" />
                </div>
            </form>
        </div>
    );
};

export default AddProductsForm;