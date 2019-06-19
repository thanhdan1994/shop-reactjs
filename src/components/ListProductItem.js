import React from 'react';
import './../assets/css/list-item.css'

function ListProductItem(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}
export default ListProductItem