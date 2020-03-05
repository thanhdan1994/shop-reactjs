import React, { useEffect, useState } from 'react';
import { ChangeToSlug } from './../common/Helpers';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

function ProductTypeContainer({ match }) {
    const [data, setData] = useState({ products: [] });
    useEffect(() => {
        async function fetchData() {
            const products = {
                data: [
                    {
                        _id: 1,
                        name: 'CLASSIC PETITE MELROSE',
                        image: 'https://danielwellington.shop/wp-content/uploads/2017/09/petit-melrose-white.jpg',
                        price: 3200000,
                        priceCurrent: 2575000
                    },
                    {
                        _id: 3,
                        name: 'CLASSIC PETITE BLACK ST MAWES',
                        image: 'https://danielwellington.shop/wp-content/uploads/2017/09/dw-petite-28-st-mawes-black-rg-cat.jpg',
                        price: 2900000,
                        priceCurrent: 2600000
                    },
                    {
                        _id: 5,
                        name: 'GUESS GLITTER COLLECTION IPHONE 11 CASE',
                        image: 'https://www.mytrendyphone.eu/images/Guess-Glitter-Collection-Case-for-iPhone-11-Gold-3700740461884-30092019-01-p.jpg',
                        price: 3200000,
                        priceCurrent: 2575000
                    },
                ]
            };
            setData({ products: products.data });
        }
        fetchData();
    }, [match]);
    return (
        <div className="container row" style={{ marginTop: '20px' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Trang theo loại sản phẩm {match.params.id}</title>
                <link rel="canonical" href={window.location.href} />
                <meta name="description" content="Hàng trăm dòng Máy Tính Để Bàn, Laptop, Phụ Kiện Máy Tính, Thiết Bị Mạng chính hãng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!" data-rh="true"></meta>
                <meta property="og:description" content="Hàng trăm dòng Máy Tính Để Bàn, Laptop, Phụ Kiện Máy Tính, Thiết Bị Mạng chính hãng, giá ưu đãi. Shopee Đảm Bảo Nhận Hàng, Giao Hàng Miễn Phí. MUA NGAY!" data-rh="true"></meta>
                <meta property="og:image" content="https://cf.shopee.vn/file/d27fe0a0e035eada610093492d928119" data-rh="true"></meta>
            </Helmet>
            {data.products.map(product => (
                <div className="col-6" key={product._id}>
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
export default ProductTypeContainer