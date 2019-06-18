import React from 'react';

function ListProductItem(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}
export default ListProductItem