import React from "react";
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi';

const PageNextAndBack = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props 

    return(
        <div className="container-pagination">
            <div><button onClick={onLeftClick}><HiArrowSmLeft/></button></div>
            <div>{page} de {totalPages}</div>
            <div><button onClick={onRightClick}><HiArrowSmRight/></button></div>
        </div>
    )
}

export default PageNextAndBack;