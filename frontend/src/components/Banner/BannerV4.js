import React, { useEffect, useRef } from 'react';
import '../../App.css';
import {
    withRouter
  } from "react-router-dom"; 
import '../../Styles/BannerV4.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function BannerV4(props) {

    const location = props.history.location.pathname
    const locationText = location.slice(1);

    const bannerRef = useRef()
    useEffect(()=>{
        const coordinate = bannerRef.current.getBoundingClientRect()
        if (coordinate.y !== 0) {
            window.scrollTo(0,0);
        }
    }, [])

    return(
        <div className="BannerV4" ref={bannerRef}>
            <div className="bannerv4-title">
                {props.collectionTitle}
            </div> 
            <div className="newsbanner-breadcrumb flex-center">
                <div>Home</div>
                <FontAwesomeIcon icon={faAngleRight} className="cart-icon" style={{margin: '0 10px'}}/>
                <div style={{textTransform: 'capitalize'}}>{locationText}</div>
            </div>
        </div>
    )
}

export default withRouter(BannerV4);