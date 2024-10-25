import React, { useContext } from 'react';
import './css/ShopCategery.css';
import dropdown_icon from '../Compenents/Assets/dropdown_icon.png';
import { ShopContext } from '../context/ShopContext';
import Item from '../Compenents/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    console.log('Category:', props.category);

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort"> 
                <p>
                    <span>showing 1-12</span> out of {all_product.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
            {all_product.map((item, i) => {
                    if (props.category === item.category || props.category === `${item.category}s`) {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null;
})}


            </div>
            <div className="shopcategory-loadmore">
                explore more ...
            </div>

        </div>
    );
};

export default ShopCategory;



