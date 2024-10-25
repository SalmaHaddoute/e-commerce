// Product.js
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Compenents/Breadcrums/Breadcrum';
import DescreptionBox from '../Compenents/DescreptionBox/DescreptionBox';
import RealtedProducts from '../Compenents/RelatedProducts/RealtedProducts';
import ProductDisplay from '../Compenents/ProductDisplay/ProductDisplay';
const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    const product = all_product.find((e) => e.id === Number(productId));


    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescreptionBox product={product} />
            <RealtedProducts  />


        </div>
    );
};

export default Product;

