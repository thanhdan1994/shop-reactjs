import React, { useEffect, useContext, useState } from 'react';
import { DataContext } from '../reducers/DataProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { ChangeToSlug } from './../common/Helpers';

function CartCheckoutContainer() {
    const [data, setData] = useState({ products: [], isCheckout: false });
    const { cart, dispatch } = useContext(DataContext);
    useEffect(() => {
        async function fetchData() {
            const products = await axios(`http://localhost:3000/products?size=4`);
            setData({ ...data, products: products.data });
        }
        fetchData();
    }, [])
    function getTotal(cart) {
        var total = 0;
        cart.map(item => {
            total += item.product.priceCurrency * item.quantity;
        })
        return total;
    }

    function handleDecreaseQuantity(e, item) {
        const target = e.target;
        const quantity = --item.quantity
        if (quantity > 0) {
            target.nextSibling.value = quantity;
            dispatch({ type: 'CHANGE_QUANTITY', product: item.product, quantity: quantity })
        } else {
            var r = confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!");
            if (r == true) {
                dispatch({ type: 'REMOVE_PRODUCT_IN_CART', product: item.product })
            }
        }
    }

    function handleIncreaseQuantity(e, item) {
        const target = e.target;
        const quantity = ++item.quantity
        target.previousSibling.value = quantity;
        dispatch({ type: 'CHANGE_QUANTITY', product: item.product, quantity: quantity })
    }

    function handleUpdateQuantity(e, item) {
        const target = e.target;
        const quantity = target.value;
        if (quantity !== '') {
            dispatch({ type: 'CHANGE_QUANTITY', product: item.product, quantity: quantity })
        }
    }

    function handleCheckout() {
        if (data.isCheckout) {
            console.log('đặt hàng thành công');
            document.getElementsByClassName('checkout-block')[0].style.display = 'none';
            setData({ ...data, isCheckout: false })
        } else {
            document.getElementsByClassName('checkout-block')[0].style.display = 'block';
            setData({ ...data, isCheckout: true })
        }
    }

    return (
        <div className="container-fluid" style={{ marginTop: '50px' }}>
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>
            {cart.map((item) => {
                const { _id, name, image, priceCurrency } = item.product;
                return <div className="item-in-cart" key={_id}>
                    <div className="icon" style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <div className="content">
                        <div className="line--first">
                            {name}
                        </div>
                        <div className="line--second">
                            <div className="item-quantity-minus clickable_area" onClick={e => handleDecreaseQuantity(e, item)}>-</div>
                            <input className="input--quantity" type="number" defaultValue={item.quantity} onChange={e => handleUpdateQuantity(e, item)} />
                            <div className="item-quantity-plus clickable_area" onClick={e => handleIncreaseQuantity(e, item)}>+</div>
                        </div>
                        <div className="line--third">
                            {priceCurrency}đ
                                </div>
                    </div>
                </div>
            })}
            <div className="sugguest-item-text">
                <span>Sản phẩm bán nhiều nhất</span>
            </div>
            <div className="row">
                {data.products.map(product => (
                    <div className="col-6" key={product._id}>
                        <div className="product-grid3">
                            <div className="product-image3">
                                <Link to={`/${ChangeToSlug(product.name)}-p-${product._id}`}>
                                    <img className="pic-1" src={product.image} />
                                    <img className="pic-2" src={product.image} />
                                </Link>
                            </div>
                            <div className="product-content">
                                <h3 className="title">
                                    <Link to={`/${ChangeToSlug(product.name)}-p-${product._id}`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                <div className="price">
                                    ${product.priceCurrency}
                                    <span>${product.price}</span>
                                </div>
                                <ul className="rating">
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star" />
                                    <li className="fa fa-star disable" />
                                    <li className="fa fa-star disable" />
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed-bottom" style={{ backgroundColor: '#fff' }}>
                <div className="checkout-block" style={{ display: 'none', paddingTop: '10px', borderTop: '1px solid #17a2b8' }} role="alert">
                    <form>
                        <div className="form-group row">
                            <div className="col-10 pr-4">
                                Thông tin của bạn
          </div>
                            <button type="button" className="close">×</button>
                        </div>
                        <hr />
                        <div className="form-group row">
                            <div className="col-12 pr-4">
                                <input type="text" className="form-control" placeholder="Nhập địa chỉ giao hàng" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Tên: </label>
                            <div className="col-10 pr-4">
                                <input type="text" className="form-control" placeholder="Nhập tên của bạn" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Email: </label>
                            <div className="col-10 pr-4">
                                <input type="email" className="form-control" placeholder="Nhập email của bạn" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Ghi chú: </label>
                            <div className="col-10 pr-4">
                                <textarea className="form-control" rows={2} placeholder="Nhập ghi chú" defaultValue={""} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="subtotal float-right">
                    Tổng tiền: <span style={{ color: '#17a2b8' }}> {getTotal(cart)}đ</span>
                    <button className="btn btn-outline-info mr-4" onClick={handleCheckout}>Đặt hàng</button>
                </div>
            </div>
        </div>
    )
}
export default CartCheckoutContainer
