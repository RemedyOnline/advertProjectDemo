import React, { useState } from 'react'
import { apiGetProducts } from '../../services/products';
import { toast } from 'react-toastify';

const Products = async () => {
    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        try {
            const products = await apiGetProducts();
            console.log('Products', products);
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    };

    fetchData();

    return (
        <div>
            Products
        </div>
    )
}

export default Products;