import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { actRemoveProductInCart } from '../actions/index';

const BtnViewCart = () => {
    return (
        <button>
            <Link to="/cart">Xem gio hang<i className="fa fa-shopping-cart"> {this.props.countCart}</i></Link>
        </button>
    )
}

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleSearchProduct = this.handleSearchProduct.bind(this)
        this.handleOnmouseEnterCart = this.handleOnmouseEnterCart.bind(this)
        this.handleOnmouseLeaveCart = this.handleOnmouseLeaveCart.bind(this)
    }
    handleOnmouseEnterCart(itemInCart) {
        const cart = document.createElement('div');
        cart.className = 'shop-drawer___contents';
        const title = document.createElement('h4');
        title.className = 'title-cart';
        title.innerText = 'San pham moi them';
        cart.appendChild(title);
        if (itemInCart) {
            itemInCart.map(item => {
                const tagItem = document.createElement('div');
                tagItem.className = 'shop-drawer___item';
                tagItem.innerHTML = `<div class="shop-drawer___item-image" style="background-image: url(http://lorempixel.com/50/50);"></div>
                            <div class="shop-drawer___item-title">
                                <div class="v-center">
                                    <div class="Oo4LQk">
                                        ${item.product.title} 1 2312 3123 123 123 123123 1231 23
                                    </div>
                                    <div class="_1kIptg v-center"><div class="_2W2Ge6">₫11.690.000</div></div>
                                </div>
                            </div>`;
                cart.appendChild(tagItem);
                tagItem.addEventListener('click', () => {
                    this.props.onRemoveProductInCart(item.product);
                    tagItem.parentNode.removeChild(tagItem);
                })
            })
        }
        const btnViewCart = document.createElement('button');
        btnViewCart.className = 'btn btn-danger shop-viewcart';
        btnViewCart.innerHTML = `Xem gio hang`;
        cart.appendChild(btnViewCart);
        const lastNav = document.querySelector('.nav-item:last-child')
        lastNav.appendChild(cart);
    }

    handleOnmouseLeaveCart() {
        const viewItemInCart = document.getElementsByClassName('shop-drawer___contents')[0];
        viewItemInCart.parentNode.removeChild(viewItemInCart);
    }
    handleSearchProduct(e) {
        let value = e.target.value;
        axios.get('http://api.tvmaze.com/search/shows?q=' + value)
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/detail-product" className="nav-link">Ecommerce</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                        <li className="nav-item" onMouseEnter={e => this.handleOnmouseEnterCart(this.props.cart)} onMouseLeave={this.handleOnmouseLeaveCart}>
                            <Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart"> {this.props.countCart}</i></Link>
                        </li>

                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" onChange={this.handleSearchProduct} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <style>{`
                .shop-drawer___contents {
                    background-color: #ffc107;
                    position: absolute;
                    float: left;
                    min-width: 300px;
                }

.Oo4LQk {
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 50%;
}
._1kIptg {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 2.5rem;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -moz-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}
._2W2Ge6 {
    color: #ee4d2d;
}
                .shop-drawer___contents .shop-viewcart {
                    float: right;
                    margin: 15px 10px;
                }
                .shop-drawer___item {
                    position: relative;
                    padding: 10px;
                }
                .shop-drawer___item-image {
                    display: inline-block;
                    background-position: 50%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 2.5rem;
                    height: 2.5rem;
                    border: 1px solid rgba(0,0,0,.09);
                    -webkit-flex-shrink: 0;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                }
                .shop-drawer___item-title {
                    display: inline-block;
                    position: absolute;
                    margin-left: 10px;
                    overflow: hidden;
                }
                .navbar-nav .nav-item {
                    position: relative;
                }
                .navbar-nav .nav-item::after {
                    border: .625rem solid transparent;
                    border-bottom-color: #fff;
                    content: "";
                    display: inline-block;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    /* -webkit-transform: translateX(-50%); */
                    transform: translateX(-50%);
                    border-left-width: .875rem;
                    border-right-width: .875rem;
                    visibility: hidden;
                    z-index: 400;
                }
                `}</style>
            </nav>
        )
    }
}
const mapStateToProps = state => {
    return {
        countCart: state.cart.length,
        cart: state.cart
    }
}

const mapDispathToProps = (dispath, props) => {
    return {
        onRemoveProductInCart: (product) => {
            dispath(actRemoveProductInCart(product))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);