import React from 'react';
import './Footer.css';
import styles from '../Component.module.css';


const today = new Date();

function Footer() {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                    <h6 class="text-uppercase font-weight-bold">Version Information</h6>
                    <p>Latest app version: 2.0.1<br/>    
                    Latest build number: 378
                    </p>                   
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h6 class="text-uppercase font-weight-bold">Contact</h6>
                        <p>
                            patrick dot allison.us at icloud dot com
                        </p>
                    </div>
                </div>
                <hr className={styles.wxhrfooter}/>
                <div class="footer-copyright text-center"><span>&#169;</span> {today.getFullYear()} WxAlert</div> 
            </div>
        </div>
    );
}

export default Footer;
