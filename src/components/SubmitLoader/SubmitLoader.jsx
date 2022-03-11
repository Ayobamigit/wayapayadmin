import React from 'react';
import './loader.scss'

const SubmitLoader = (props) => {
    return (
        <div className={`${props.className ? props.className: null} ldsellipsis`}><div></div><div></div><div></div><div></div></div>
    )
}

export default SubmitLoader
