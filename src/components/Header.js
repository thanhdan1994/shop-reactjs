import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleSearchProduct = this.handleSearchProduct.bind(this)
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
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart"> {this.props.countCart}</i></Link>
                        </li>

                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" onChange={this.handleSearchProduct} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = state => {
    return {
        countCart: state.cart.length
    }
}
export default connect(mapStateToProps, null)(Header);