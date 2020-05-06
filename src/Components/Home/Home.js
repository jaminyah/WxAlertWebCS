import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import toolbar from '../../assets/wxtoolbar.png';

function Home() {
    return (
        <div>
            <div className={styles.container}>
            <h1>User Guide</h1>
            <p>
                WxAlert (hereby known as the app) is a mobile application that displays current, forecast and alert weather
                information for more than 20,000 cities acrosss the continental United States and its territories. 

                Current, forecast and alert information are displayed using various  weather and alert icons. A description
                of each weather icon is available at <Link to="/wxicons">weather icons</Link>. 
                General description of alert icons is available at <Link to="/alert">alert icons</Link> and 
                <Link to="/caution"> caution icons</Link> links.
            </p>

            <blockquote>
                <p>
                    Cellular or WiFi network is required to fetch and update weather data.
                </p>
            </blockquote>

            <h2>Forecast Update</h2>
            <p>
                Forecast data from the weather server is generally updated twice daily. As a result the app forecast data is 
                generally updated two times each 24 hour period. Typical local weather forecast update is available at 6:30 am
                and 6:30 pm each day.
                <br/>
                <br/>
                Current weather data such as sky condition, temperature, wind speed, humidity and visibility are generally valid 
                for two hours. Updates to current weather data is therefore performed every two hours.
            </p>
 
            <blockquote>
                <p>
                    Manual options are provided for updating current weather data at anytime.
                </p>
            </blockquote>

            <h2>Battery Life</h2>
            <p>
                Fetching data only when necessary has the advantage of extending device battery life. The app uses local database 
                storage to reduce the need to fetch data from the network each time the app comes to the foreground. No data
                update is performed while the app is in the background.
            </p>

            <h2>User Interface</h2>
            <p>
                Four tabs are available to navigate through various app features such as search, forecast, settings, 
                and user guide. Figure 1 - App Toolbar shows each tab icon. 

                <ul>
                    <li>City Search: Current weather and forecast data begins by searching for a city location.</li> 
                    <li>Weather Forecast: Weather forecast data for several days may include current alerts.</li> 
                    <li>App Settings: Allows for selection of a previously searched city.</li> 
                    <li>User Guide: Provides a descripton of various app features.</li>
                </ul>
            </p>
            <blockquote>
                <p>
                    At first launch, only the City Search tab is enabled. When the first city search is performed, all other 
                    tabs become enabled.
                </p>
            </blockquote>
            <img className={styles.wximage} src={toolbar} alt="toolbar" />


            
            </div>
            <Footer />
        </div>
    ); 
}

export default Home;