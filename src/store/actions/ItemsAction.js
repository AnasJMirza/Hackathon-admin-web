import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

export const ADD_ITEMS = "ADD_ITEMS";
export const DEL_ITEMS = "DEL_ITEMS";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// const addItems = () => async (dispatch) => {
//     try {

//         await addDoc(collection(db, "products"), )

//     } catch (error) {
//         console.error(error)
//     }
// }

export const fetchProducts = (setLoader) => async (dispatch) => {
  setLoader(true);
  try {
    console.log("Fetch Products Action Run");

    const products = [];
    const productsFromFirebase = await getDocs(collection(db, "products"));

    productsFromFirebase.docs.map((item) => {
      products.push({ ...item.data(), id: item.id });
    });
    console.log(products);

    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    alert(error.message);
  } finally {
    setLoader(false);
  }
};

export const addProducts =
  (
    productTitle,
    productPrice,
    productCatagory,
    smallProductDescription,
    file,
    setLoader
  ) =>
  async (dispatch) => {
    setLoader(true);
    try {

        let url = ''
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
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then( (downloadURL) => {
            console.log('you can find the file here ', downloadURL);
            alert("Imaeg uploaded")
            url = downloadURL
        });
        }
        
      );



        await addDoc(collection(db, "products"), {
        title: productTitle,
        price: productPrice,
        catagory: productCatagory,
        description: smallProductDescription,
        url : url
        });

        toast.success("Or Kuch Boss ? 🔥");

    } catch (error) {
      alert(error.message);
    } finally {
      setLoader(false);
    }
  };

export const deleteItem = (setLoader, item) => async (dispatch) => {
  setLoader(true);
  try {
    await deleteDoc(doc(db, "products", item.id));

    const products = [];
    const productsFromFirebase = await getDocs(collection(db, "products"));

    productsFromFirebase.docs.map((item) => {
      products.push({ ...item.data(), id: item.id });
    });

    dispatch({
      type: DEL_ITEMS,
      payload: products,
    });

    toast("Ura dya bro 🔥");
  } catch (error) {
  } finally {
    setLoader(false);
  }
};
