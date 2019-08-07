import React from 'react';
import {ChangeToSlug} from './../../common/Helpers';
import { Link } from 'react-router-dom';

function RelatedProduct(props) {
    return (
        <div className="box-related-product" style={{ overflowX: 'auto', flexWrap: 'nowrap', display: 'flex', background: '#fafafa' }}>
            {props.products.map((product) => (
                <div className="col-5" key={product._id}>
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
    )
}
export default RelatedProduct