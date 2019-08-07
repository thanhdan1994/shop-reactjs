import React from 'react';
import Slider from "react-slick";

function SliderProducts(props) {
    return (
        <Slider {...props.settings} className="row">
            <div className="col">
                <div className="product-grid3">
                    <div className="product-image3">
                        <a href="detail-product.html">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg" />
                        </a>
                        <span className="product-new-label">New</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Men's Blazer</a></h3>
                        <div className="price">
                            $63.50
            <span>$75.00</span>
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
            <div className="col">
                <div className="product-grid3">
                    <div className="product-image3">
                        <a href="detail-product.html">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-3.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-4.jpg" />
                        </a>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Women's Designer Top</a></h3>
                        <div className="price">
                            $43.50
        </div>
                        <ul className="rating">
                            <li className="fa fa-star" />
                            <li className="fa fa-star" />
                            <li className="fa fa-star" />
                            <li className="fa fa-star" />
                            <li className="fa fa-star" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="product-grid3">
                    <div className="product-image3">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-5.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-6.jpg" />
                        </a>
                        <span className="product-new-label">New</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Men's Blazer</a></h3>
                        <div className="price">
                            $63.50
            <span>$75.00</span>
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
            <div className="col">
                <div className="product-grid3">
                    <div className="product-image3">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-7.jpg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-8.jpg" />
                        </a>
                        <span className="product-new-label">New</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Men's Blazer</a></h3>
                        <div className="price">
                            $63.50
            <span>$75.00</span>
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
        </Slider>
    )
}
export default SliderProducts