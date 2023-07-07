import React,{useState,useEffect} from 'react'
import { getAllProducts } from "../utils/queries1";
import {client,urlFor} from '../utils/client1'

const Electonics = () => {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
    const fetchElectronicProductData = async () => {
      const data=await client.fetch(getAllProducts());
      console.log(data);
      setProducts(data);
    }
    fetchElectronicProductData();
  },[])

  return (
    <div className='electronic-products flex items-center flex-wrap'>
        {products.map((value) => {
          return (
            <div className='e-items w-[250px]'>
              {console.log(urlFor(value.imgUrl).url())}
              {/* <img src={urlFor(value.imgUrl[0]).url()} alt={value.title} className=''/> */}
              <h1>{value.product_name}</h1>
              <h1>{value.discription}</h1>
              <h1>{value.price}</h1>
              <h1>{value.categories.category_name}</h1>
            </div>
          )
       })}
    </div>
  )
}

export default Electonics