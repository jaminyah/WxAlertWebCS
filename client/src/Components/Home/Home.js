import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import {
    Toolbar, Search, Current, Forecast, Diamond, TempRed, TempGreen, TempErr
} from '../../assets/images/home';

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
                    Four tabs are available to navigate through various app features such as search, forecast, settings, 
                    and user guide. Figure 1 - App Toolbar shows each tab icon. 

                <ul>
                    <li>City Search: Current weather and forecast data begins by searching for a city location.</li> 
                    <li>Weather Forecast: Weather forecast data for several days may include current alerts.</li> 
                    <li>App Settings: Allows for selection of a previously searched city.</li> 
                    <li>User Guide: Provides a descripton of various app features.</li>
                </ul>
                <blockquote>
                    <p>
                        At first launch, only the City Search tab is enabled. When the first city search is performed, all other 
                        tabs become enabled.
                    </p>
                </blockquote>
                <img className={styles.wximage} src={Toolbar} alt="toolbar" />
                <figcaption className={styles.figcaption}>Figure 1 - App Toolbar</figcaption>

                <h2>City Search View</h2>
                <p>
                    Current, forecast and alert weather information begins with a city location. Users can chose to "Allow WxAlert
                    to access your location while using the app." or manually enter a search location. On entering the 
                    first three characters of a city name will generate a list of city and state matches from a local database. 
                    Current weather conditions are fetched from the weather server and displayed when a city location is selected.
                </p>
                <img className={styles.wximage} src={Search} alt="toolbar" />
                <figcaption className={styles.figcaption}>Figure 2 - City Search</figcaption>

                <h3>Location Data Privacy</h3>
                <p>
                    Location data is only used when permission is granted. In this case location data is sent to the weather server 
                    to obtain current weather, forecast and alert information for the local area. 
                </p>

                <blockquote>
                    <p>
                        No location data is shared with third party entities for the purpose of analytics or advertisement generation.
                    </p>
                </blockquote>
                <p>
                    No ads or third party marketing schemes are displayed or generated by this app. For more information see the 
                    <Link to="/legal"> Privacy Policy.</Link>
                </p>

                <h2>Current Weather</h2>
                <p>
                    On selecting a city in the city search view, the current weather view is displayed. Weather elements displayed 
                    are sky condition, temperature (degrees Fahrenheit), wind direction, wind speed, wind gust, relative humidity, 
                    and visibility.
                </p>
                <blockquote>
                    <p>
                        Only weather data for the last search city appears in the Current Weather View.
                    </p>
                </blockquote>
                <img className={styles.wximage} src={Current} alt="current weather" />
                <figcaption className={styles.figcaption}>Figure 3 - Current Weather</figcaption>

                <h2>Update Frequency</h2>
                <p>
                Updated current weather data from the weather server is generally only available every 2 hours. If the app 
                is placed in the background for more than two hours, on return to the foreground 
                it will send a request to the weather server to obtain an update. A stale temperature value 
                will appear enclosed in a red ring. Once the stale data is updated with current temperature data that is less than 
                2 hours old, the temperature is highlighted with a green ring.             
                </p>

                <h2>American Standard</h2>
                <blockquote>
                    <p>
                        The app uses American Standard units of measure. There is no option, at this time, to change to metric units.
                    </p>
                </blockquote>
                <ul>
                    <li> Temperature: Fahrenheit (&#176;F)</li>
                    <li>Wind speed: Miles Per Hour (mph)</li>
                    <li>Wind gust: Miles Per Hour (mph)</li>
                    <li>Visibility: Miles</li>
                </ul>
    
    
                <h2>Forecast View</h2>
                    Forecast View consist of several data sections integrated into one display view.
                <ul>
                    <li>Scrollable Alert List</li>
                    <li>Search City Name</li>
                    <li>Scrollable Forecast list</li>
                    <li>Detailed Alert Icon</li>
                    <li>Current Temperature</li>
                </ul>
                <img className={styles.wximage} src={Forecast} alt="forecast weather" />
                <figcaption className={styles.figcaption}>Figure 4 - Forecast View</figcaption> 
        
                <h3>Scrollable Alert List</h3>
                <p>
                    Scrollable alert list consists of icons representing all currently posted weather alerts.
                </p>
                <h3>Search City Name</h3>
                <p>
                    The search city name is presented as the full city name and two character state identifier. 
                    This is also the name displayed when a different city is selected in the app settings.
                </p>
                <h3>Scrollable Forecast</h3>
                <p>
                    Weather Forecast information is generally updated two (2) times each day. Once in the morning and once
                    in the evening. Typical update times are 6:30 am and 6:30 pm local time. Forecast includes sky condition,
                    wind direction and wind speed. Also included are expected high and low temperatures.
                </p>

                <h3>Detailed Alert Icon</h3>
                <p>
                    Embedded in the Scrollable Forecast is a Detailed Alert Icon. This icon is displayed when one or more
                    weather alert is posted. The Detailed Alert Icon is always the latest alert in the list. Tapping the alert detail 
                    presents an alert detail page. Swiping on the presented page shows additional details if more that one icon appears in the 
                    Alert List. The Alert List is shown at the top of the Forecast View.
                </p>
                <img className={styles.wximage} src={Diamond} alt="alert detail" />
                <figcaption className={styles.figcaption}>Figure 5 - Alert Detail</figcaption> 
    
                <h3>Current Temperature</h3>
                <p>
                    The current temperature, that is displayed in the Current Weather View, is also displayed in the Forecast
                    View. It is displayed in two (2) formats. Expired, shown encircled in red, and current, shown encircled
                    in green.
                </p>
                <img className={styles.wximage} src={TempRed} alt="temperature red" />
                <figcaption className={styles.figcaption}>Figure 6 - Expired Temperature</figcaption> 
        
                <img className={styles.wximage} src={TempGreen} alt="temperature green" />
                <figcaption className={styles.figcaption}>Figure 7 - Current Temperature</figcaption> 
    
                <h3>Weather Station Offline</h3>
                <p>
                    Occasionally, a weather station will be partially in service or may not be in service. 
                    When this occurs, a temperature reading of --- may be presented. 
                    A possible solution to this issue is to select an active weather station from the list of stations shown in the 
                    Station Picker View. Station Picker View can be selected using the Set Weather Station option from the Settings tab. 
                    See <Link to="/solve">Solve </Link> for further detailed troubleshooting.
                </p>
                <img className={styles.wximage} src={TempErr} alt="temperature error" />
                <figcaption className={styles.figcaption}>Figure 8 - No Temperature Data</figcaption> 
    
                <br/>
                <br/>
            </div>
            <Footer />
        </div>
    ); 
}

export default Home;