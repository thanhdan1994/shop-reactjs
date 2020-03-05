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
            const detail = {
                data : {
                    name: 'Apple iPhone 11 1 Sim 64GB',
                    priceCurrency: 15575000,
                    brand: 'Apple',
                    images: 'https://stcv4.hnammobile.com//uploads/products/colors/2/apple-iphone-11-1-sim-64gb-01573206008.jpg'
                }
            };
            const smartphone = {
                data: [
                    {
                        _id: 4,
                        name: 'Apple iPhone 11 1 Sim 64GB',
                        image: 'https://stcv4.hnammobile.com//uploads/products/colors/2/apple-iphone-11-1-sim-64gb-01573206008.jpg',
                        price: 18200000,
                        priceCurrent: 15575000
                    },
                    {
                        _id: 5,
                        name: 'GUESS GLITTER COLLECTION IPHONE 11 CASE',
                        image: 'https://www.mytrendyphone.eu/images/Guess-Glitter-Collection-Case-for-iPhone-11-Gold-3700740461884-30092019-01-p.jpg',
                        price: 3200000,
                        priceCurrent: 2575000
                    },
                    {
                        _id: 6,
                        name: 'iPhone 11 Pro Max',
                        image: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro-Max/Midnight-Green/Apple-iPhone-11-Pro-Max-Midnight-Green-frontimage.jpg',
                        price: 15000000,
                        priceCurrent: 12900000
                    },
                ]
            };
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