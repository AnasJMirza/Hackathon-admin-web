import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const ADD_ITEMS = "ADD_ITEMS";
export const DEL_ITEMS = "DEL_ITEMS"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"


// const addItems = () => async (dispatch) => {
//     try {

//         await addDoc(collection(db, "products"), )
        
//     } catch (error) {
//         console.error(error)
//     }
// }


export const fetchProducts = (setLoader) => async (dispatch) => {
    setLoader(true)
    try {

        console.log("Fetch Products Action Run");

        const products = []
        const productsFromFirebase = await getDocs(collection(db, "products"))
        

        productsFromFirebase.docs.map((item)=>{
            products.push({...item.data(), id : item.id})
        })
        console.log(products);

        dispatch({
            type : FETCH_PRODUCTS,
            payload : products
        })

        
    } catch (error) {
        alert(error.message)
    }
    finally{
        setLoader(false)
    }
}


export const addProducts = (productTitle, productPrice, productCatagory, setLoader) => async (dispatch) => {
    setLoader(true)
    try {

        
        await addDoc(collection(db, "products"), {title : productTitle, price : productPrice, catagory : productCatagory,  description : 'Apple M1 chip with 8-core CPU, 8‑core GPU, and 16‑core Neural Engine; 8GB unified memory; 256GB SSD storage; 13-inch Retina display with True Tone ...'})

        toast.success("Cha Gye ho Bhai 🔥")

        
    } catch (error) {
        alert(error.message)
    }
    finally{
        setLoader(false)
    }
}