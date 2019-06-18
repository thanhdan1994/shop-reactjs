import React, { Component } from 'react';
import ListProductItem from './../components/ListProductItem';
import ProductItem from '../components/ProductItem';

class ProductContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduct: []
        }
    }
    componentDidMount() {
        this.setState({
            listProduct: [
                { id: 1, title: 'Iphone 6 plus', desc: 'mô tả sản phẩm iphone 6 plus', price: 500 },
                { id: 2, title: 'Iphone 7 plus', desc: 'mô tả sản phẩm iphone 7 plus', price: 600 },
            ]
        })
    }
    render() {
        return (
            <div className="products">
                <h3 className="h3">shopping Demo-4 </h3>
                <ListProductItem>
                    {this.state.listProduct.map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))}
                </ListProductItem>
            </div>
        )
    }
}

export default ProductContainer