import React, { useEffect, useState } from 'react';
import { ChangeToSlug } from './../common/Helpers';
import axios from 'axios';
import Slider from "react-slick";
import {Link} from 'react-router-dom';

function HomeContainer() {
    const [data, setData] = useState({ products: {watch: [], smartphone: []} });

    useEffect(() => {
        async function fetchData() {
            const watch = await axios('http://localhost:3000/products?productType=5d38817847e17012e4c12962&size=10');
            const smartphone = await axios('http://localhost:3000/products?productType=5d387d0067840603942c25f4&size=10');
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