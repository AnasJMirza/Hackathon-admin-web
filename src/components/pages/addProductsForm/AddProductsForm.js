import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addProducts } from '../../../store/actions/ItemsAction';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';
import {PuffLoader} from 'react-spinner'
import './AddProductsForm.css'
import { storage } from '../../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


const AddProductsForm = () => {

    const [loader, setLoader] = useState(false)

    

    const dispatch = useDispatch()

    let productTitle = "";
    let productPrice = "";
    let productDescription = "";
    let productCatagory = "";
    let smallProductDescription = "";
    let file = "";
    let url = "";
    

    const titleGetter = (e) => {
        productTitle = e.target.value
    }

    const priceGetter = (e) => {
        productPrice = e.target.value
    }

    const catagoryGetter = (e) => {
        productCatagory = e.target.value
    }

    const descriptionGetter = (e) => {
        productDescription = e.target.value
    }

    const fileGetter = (e) => {
        file = e.target.files[0]
        console.log(file);
    }

    const truncate = (productDescription)=>{
        return productDescription?.length > 150? productDescription.substr(0, 150) + '...' : productDescription;
    }


    const fileUpload = ()=>{
        const storageRef =  ref(storage, `images/${file.name}`);
        const uploadTask =  uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
       (snapshot) => {
          const progress = 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then( (downloadURL) => {
            console.log('you can find the file here ', downloadURL);
            alert("Imaeg uploaded")
            url = downloadURL
        });
        }
      );
    }

    
    const submitHandler = () => {

        if(productTitle.length <= 0 || productPrice.length <= 0 || productDescription.length <= 0 || productCatagory.length <= 0){
            // toast.error("Pleas fill all inputs")
            alert("Pleas fill all inputs")
        }else{
            smallProductDescription = truncate(productDescription)    
            dispatch(addProducts(productTitle, productPrice, productCatagory,smallProductDescription ,url,  setLoader))
        }
        
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
            {/* <ToastContainer
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
            <ToastContainer /> */}

            <form action='#' className='form'>
                <p className='product-information'>Prodcut Information</p>
                <div className='hr'/>

                <div className='input-feilds'>
                    <input  onChange={(e)=>titleGetter(e)} type="text" placeholder='Prodcut Title'  className='input' required / >
                    <input  onChange={(e)=>priceGetter(e)} type="number" placeholder='Product Price' className='input' required/>
                    <input  onChange={(e)=>descriptionGetter(e)} type="string" placeholder='Description' className='input' required />
                    <input  onChange={(e)=>fileGetter(e)} type="file" className='input' required />
                    <button onClick={fileUpload}>Upload File</button>

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