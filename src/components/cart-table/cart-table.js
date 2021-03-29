import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux'
import {deleteCartForm} from '../../actions'

const CartTable = ({items,deleteCartForm}) => {
    console.log(items)
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item =>{
                        const {title,price,url,id} = item
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className='cart__item-img' alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={()=>deleteCartForm(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }              
            </div>
        </>
    );
};
const mapStateToprops=({items})=>{
    return {
        items
    }
}
const mapDispatchToProps ={
    deleteCartForm
}
export default connect(mapStateToprops,mapDispatchToProps)(CartTable);