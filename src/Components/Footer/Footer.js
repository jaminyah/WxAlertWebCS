import React from 'react';
import './Footer.css';

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
                        <br/>patrick dot allison dot us at icloud dot com
                        </p>
                    </div>
                </div>
                <div class="footer-copyright text-center">© 2020 WxAlert</div> 
            </div>
 
        </div>
    );
}

export default Footer;
