import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actChangeQuantity, actRemoveProductInCart } from '../actions/index';
import Item from '../components/cart/Item';

class CartContainer extends Component {
    constructor(props) {
        super(props)
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
        this.handleRemoveProductInCart = this.handleRemoveProductInCart.bind(this)
        this.state = {
            code: '',
        }
    }
    handleChangeQuantity(product, e) {
        const target = e.target;
        const id = 'quantity_' + product.id
        const quantityBefore = Number(document.getElementById(id).value);
        if (target.name === 'inpCong') {
            document.getElementById(id).value = quantityBefore + 1;
        }
        if (target.name === 'inpTru') {
            const quantity1 = quantityBefore - 1;
            if (quantity1 < 1) {
                var r = confirm("bạn có muốn xoá sản phẩm này khỏi giỏ hàng!");
                if (r == true) {
                    this.props.onRemoveProductInCart(product)
                }
            } else {
                document.getElementById(id).value = quantity1;
            }
        }
        const quantityAfter = Number(document.getElementById(id).value);
        this.props.onChangeQuantity(product, quantityAfter)
    }

    handleRemoveProductInCart(product, e) {
        var r = confirm("bạn có muốn xoá sản phẩm này khỏi giỏ hàng!");
        if (r == true) {
            this.props.onRemoveProductInCart(product)
        }
    }

    render() {
        var total = 0;
        var countProductInCart = this.props.cart.length;
        if (countProductInCart < 1) {
            return <h1>giỏ hàng trống trơn</h1>
        }
        return (
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <Link to="/" className="btn btn-outline-info btn-sm pull-right">Continiu shopping</Link>
                    <div className="clearfix" />
                </div>
                <div className="card-body">
                    {this.props.cart.map(item => {
                        total += item.product.price * item.quantity;
                        return <Item onDeleteItem={(e) => this.handleRemoveProductInCart(item.product, e)}
                            onChangeQuantity={(e) => this.handleChangeQuantity(item.product, e)}
                            item={item} key={item.product.id} />
                    })}
                </div>
                <div className="card-footer">
                    <div className="pull-right" style={{ margin: '10px' }}>
                        <a className="btn btn-outline-primary pull-right">Checkout</a>
                        <div className="pull-right" style={{ margin: '5px' }}>
                            Total price: <b>{total} $</b>
                        </div>
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
        onChangeQuantity: (product, quantity) => {
            dispath(actChangeQuantity(product, quantity))
        },
        onRemoveProductInCart: (product) => {
            dispath(actRemoveProductInCart(product))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(CartContainer)