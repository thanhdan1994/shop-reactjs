import React, { Component } from 'react';
import ListProductItem from '../components/ListProductItem';
import ProductItem from '../components/ProductItem';
import CarouselHome from './../components/home/Carousel';
import axios from 'axios';

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduct: []
        }
    }
    componentDidMount() {
        axios.get('http://cmcuoi.tuoitre.local/')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        axios.get('http://api.tuoitrecuoi.local/site1?type=feature&slug=ttc-home&region=1', {
            headers: {
                'Req-From': 'frontend',
            }
        }).then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        this.setState({
            listProduct: [
                { id: 1, title: 'Iphone 6 plus', desc: 'mô tả sản phẩm iphone 6 plus', price: 500 },
                { id: 2, title: 'Iphone 7 plus', desc: 'mô tả sản phẩm iphone 7 plus', price: 600 },
            ]
        })
    }
    render() {
        return (
            <React.Fragment>
                <CarouselHome />
                <div className="products">
                    <h3>shopping Demo-4 </h3>
                    <ListProductItem>
                        {this.state.listProduct.map((product, index) => (
                            <ProductItem product={product} key={index} />
                        ))}
                    </ListProductItem>
                </div>
            </React.Fragment>
        )
    }
}

export default HomeContainer