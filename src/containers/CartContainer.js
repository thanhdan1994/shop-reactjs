import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChangeQuantity, actRemoveProductInCart } from '../actions/index';
import Item from '../components/checkout/Item';

class CartContainer extends Component {
    constructor(props) {
        super(props)
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
        this.handleRemoveProductInCart = this.handleRemoveProductInCart.bind(this)
        this.handleCheckVoucher = this.handleCheckVoucher.bind(this)
        this.handleChangeCode = this.handleChangeCode.bind(this)
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

    handleChangeCode(e) {
        this.setState({code: e.target.value});
    }

    handleCheckVoucher(total, e) {
        if (this.state.code === 'rightcode') {
            total -= 500;
            console.log(total);
        }
    }
    render() {
        var total = 0;
        return (
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <a className="btn btn-outline-info btn-sm pull-right">Continiu shopping</a>
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
                    <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={this.handleChangeCode} className="form-control" placeholder="cupone code" />
                            </div>
                            <div className="col-6">
                                <input type="submit" onClick={(e) => this.handleCheckVoucher(total, e)} className="btn btn-default" defaultValue="Use cupone" />
                            </div>
                        </div>
                    </div>
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