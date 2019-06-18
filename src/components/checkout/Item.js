import React, { Component } from 'react';

class Item extends Component {

    render() {
        const {title, desc, price, id} = this.props.item.product, {quantity} = this.props.item;
        function handleChangeValue(event) {
            const target = event.target;
            const quantity = Number(document.getElementsByName("inpQuantity")[0].value);
            if (target.name === 'inpCong') {
                document.getElementsByName("inpQuantity")[0].value = quantity + 1;
            } else {
                document.getElementsByName("inpQuantity")[0].value = quantity - 1;
            }
        }

        return (
            <div className="row" style={{ paddingTop: 10 }}>
                <div className="col-12 col-sm-12 col-md-2 text-center">
                    <img className="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width={120} height={80} />
                </div>
                <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                    <h4 className="product-name"><strong>{title}</strong></h4>
                    <h4>
                        <small>{desc}</small>
                    </h4>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                    <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                        <h6><strong>{price} <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="quantity">
                            <input type="button" name="inpCong" onClick={this.props.onChangeQuantity} defaultValue="+" className="plus" />
                            <input type="text" id={`quantity_${id}`} onChange={this.props.onChangeQuantity} defaultValue={quantity} className="qty" size={4} />
                            <input type="button" name="inpTru" onClick={this.props.onChangeQuantity} defaultValue="-" className="minus" />
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 text-right">
                        <button onClick={this.props.onDeleteItem} type="button" className="btn btn-outline-danger btn-xs">
                            <i className="fa fa-trash" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item