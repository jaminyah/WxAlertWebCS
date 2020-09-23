import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';

function Legal() {
    return (
        <div>
            <div  className={styles.container}>
                <h1 >Privacy Policy</h1>
                This document outlines the privacy policy of the WxAlert weather application, hereafter referred to 
                     "the app". During the development of the app, every effort was made to protect user data and respect 
                     the privacy of its users.
                    The following privacy issues are discussed:
                    <ol>
                        <li>Permissions Requested</li>
                        <li>Account Sign-in</li>
                        <li>Data Usage and Sharing</li>
                        <li>Data Collection and Storage</li>
                    </ol>
                <h2>Permissions Requested</h2>
                    <li>User Location</li>
                    <li>Local Notifications</li>
                    <h3>User Location</h3>
                <p>User permission is requested to fetch weather for the current location. Granting permission 
                    is optional and does not degrade the app or restrict its performance or features. If the user does 
                    not wish to automatically retreive current location, current location or any location can be physically 
                    entered in the City Search bar. 
                </p>
                <h3>Local Notifications</h3>
                <p>A feature of the app is to allow user to select specific weather conditions for which a notification 
                    can be generated while the app is in background mode. Enabling this feature is optional. 
                    If notifications for the app are not enabled, this feature cannot be used.
                </p>
                <h2>Account Sign-in</h2>
                <p>No sign-in is needed to use any app feature. There is no need for a username or password. 
                    As such, no private social media account information is collected or processed by the app.
                </p>
                <h2>Data Usage and Sharing</h2>
                <p>User's current location is used to fetch associated weather data if permission is granted. 
                    This information is sent to the National Weather Service (NWS) secure servers for processing using 
                    NWS provided APIs. NWS weather servers are the only source of external communication with the app. 
                    External communication is reduced to the minimum, by embedding a local database with more than 
                    20,000 U.S. cities from which city search matches are generated.
                </p>
                <h2>Data Collection and Storage</h2>
                <p>The app does not in any way, shape or form create a user profile, store cookies, or enable user tracking or
                    analytics based on app usage or search queries. It does not access Contact lists, Photo albums, device
                    phone number or any other metric.
                </p>

                <h2>Contact</h2>
                <p>Feel free to contact the developer at patrick dot allison.us at icloud dot com regarding privacy concerns.</p>
            </div>
            <Footer />
        </div>
    ); 
}
export default Legal;