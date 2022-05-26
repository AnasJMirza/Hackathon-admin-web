import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";



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