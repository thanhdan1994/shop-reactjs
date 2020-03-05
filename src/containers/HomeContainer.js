import React, { useEffect, useState } from 'react';
import { ChangeToSlug } from './../common/Helpers';
import axios from 'axios';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function HomeContainer() {
    const [data, setData] = useState({ products: {watch: [], smartphone: []} });

    useEffect(() => {
        console.log('useEffect');
        async function fetchData() {
            const watch = {
                data : [
                    {
                        _id: 1,
                        name: 'CLASSIC PETITE MELROSE',
                        image: 'https://danielwellington.shop/wp-content/uploads/2017/09/petit-melrose-white.jpg',
                        price: 3200000,
                        priceCurrent: 2575000
                    },
                    {
                        _id: 2,
                        name: 'CLASSIC BLACK READING',
                        image: 'https://danielwellington.shop/wp-content/uploads/2017/09/dw-classic-black-reading-40rg.jpg',
                        price: 3800000,
                        priceCurrent: 3500000
                    },
                    {
                        _id: 3,
                        name: 'CLASSIC PETITE BLACK ST MAWES',
                        image: 'https://danielwellington.shop/wp-content/uploads/2017/09/dw-petite-28-st-mawes-black-rg-cat.jpg',
                        price: 2900000,
                        priceCurrent: 2600000
                    }
                ]
            }, smartphone = {
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
            setData({ products: { watch: watch.data, smartphone: smartphone.data }});
        }
        fetchData();
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    console.log('return');
    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div className="sugguest-item-text">
                <span>Đồng hồ dw xách tay</span>
            </div>
            <Slider {...settings}>
                {data.products.watch.map((product) => {
                    return (
                        <div className="col" key={product._id}>
                            <div className="product-grid3">
                                <div className="product-image3">
                                    <Link to={`/${ChangeToSlug(product.name)}-p-${product._id}`}>
                                        <img className="pic-1" src={product.image || <Skeleton />} />
                                        <img className="pic-2" src={product.image || <Skeleton />} />
                                    </Link>
                                </div>
                                <div className="product-content">
                                    <h3 className="title">
                                        <Link to={`/${ChangeToSlug(product.name)}-p-${product._id}`}>
                                            {product.name || <Skeleton />}
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        ${product.priceCurrency || <Skeleton />}
                                        <span>${product.price || <Skeleton />}</span>
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
                    )
                })}
            </Slider>
            <div className="sugguest-item-text">
                <span>Điện thoại chính hãng</span>
            </div>
            <Slider {...settings}>
                {data.products.smartphone.map((product) => {
                    return (
                        <div className="col" key={product._id}>
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
                                        ${product.price}
                                        <span>${product.priceCurrency}</span>
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
                    )
                })}
            </Slider>
        </div>
    );
}

export default HomeContainer