import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import RelaredProduct from './../components/detail-product/RelatedProduct';
import { DataContext } from '../reducers/DataProvider';

function ProductDetailContainer({ match }) {
    const [data, setData] = useState({ detail: {}, products: [] });
    const { dispatch } = useContext(DataContext)
    useEffect(() => {
        async function fetchData() {
            const detail = await axios('http://localhost:3000/products/' + match.params.id);
            const smartphone = await axios(`http://localhost:3000/products?productType=${detail.data.productType._id}&size=10&exclude=${detail.data._id}`);
            setData({ detail: detail.data, products: smartphone.data });
        }
        fetchData();
    }, [match]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    function handleAddToCart() {
        dispatch({type: 'ADD_TO_CART', product: data.detail, quantity: 1});
    }
    const { name, priceCurrency, brand, images } = data.detail;
    return (
        <React.Fragment>
            <Slider {...settings} className="slick-list-image">
                {(typeof images === 'object') ? images.map((image, index) => (
                    <div className="outer-element" key={index}>
                        <div className="inner-element">
                            <img src={image} />
                        </div>
                    </div>
                )): ''}
            </Slider>
            <div className="box-info-product">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan={2}>Thông tin sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>Thương hiệu</th>
                            <td>{brand}</td>
                        </tr>
                        <tr>
                            <th>Giá sản phẩm</th>
                            <td>{priceCurrency}</td>
                        </tr>
                        <tr>
                            <th>...</th>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="suggest-products-box">
                <h3 className="simple-box-heading"><span>Sản phẩm cùng thương hiệu</span></h3>
                <RelaredProduct products={data.products} />
            </div>
            <div className="fixed-bottom" style={{ backgroundColor: '#fff' }}>
                <button className="col-12 btn btn-outline-info" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
            </div>
        </React.Fragment>

    )
}
export default ProductDetailContainer