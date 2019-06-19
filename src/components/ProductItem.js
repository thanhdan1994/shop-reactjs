import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToCart } from './../actions/index';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    handleAddToCart() {
        this.props.onAddToCart(this.props.product);
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid4">
                    <div className="product-image4">
                        <a href="javascript:void(0)">
                            <img alt="hihi hihi" className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg" />
                            <img alt="hihi hihi" className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-2.jpg" />
                        </a>
                        <ul className="social">
                            <li><a href="javascript:void(0)" data-tip="Quick View"><i className="fa fa-eye" /></a></li>
                            <li><a href="javascript:void(0)" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                            <li><a href="javascript:void(0)" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                        <span className="product-new-label">New</span>
                        <span className="product-discount-label">-10%</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="javascript:void(0)">{this.props.product.title}</a></h3>
                        <div className="price">
                            $ {this.props.product.price}
                            <span>$16.00</span>
                        </div>
                        <a href="javascript:void(0)" className="add-to-cart" onClick={this.handleAddToCart} data-toggle="modal" data-target="#modalAbandonedCart">ADD TO CART</a>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispathToProps = (dispath, props) => {
    return {
        onAddToCart: (product) => {
            dispath(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductItem)