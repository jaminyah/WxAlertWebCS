import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';
import {
    Err999, AlertSchedule, WxStation
} from '../../assets/images/solve';


function Solve() {
    return (
        <div>
        <div className={styles.container}>

            <h1>Solution Guide</h1>
            <p>
                This guide provides solutions to correct an invalid temperature value of 999&#176;F and to 
                manually schedule weather alert updates.
            </p>
            <p>
                <h2>Issue: Temperature displayed is 999&#176;F</h2>
                From time to time, weather stations may not be active. This is evident as an invalid current temperature value of
                999 &#176;F displayed on the Current Weather view. Invalid temperature readings appear on
                the Forecast View as 999&#176;.
            </p>
            <p>
                <h3>Solution: Select a different weather station</h3> 
                Figure 1 - Troubleshooting, shows the steps to selecting a different weather station and obtaining a valid
                temperature reading.
            </p>
            <img className={styles.wximage} src={Err999} alt="troubleshooting" />
            <figcaption className={styles.figcaption}>Figure 1 - Troubleshooting</figcaption>
            <br/>
           
            <h4>Station Selection Steps</h4>
            <p>
                The steps described will follow the sequence outlined in Figure 1 - Troubleshooting.
                <br/>
                <br/>
                <strong>Step 1. </strong>
                Erroneous weather data is identified in the Current Weather View or Forecast View.
                <br/>
                <br/>
                <strong>Step 2. </strong>
                Select the app Settings tab to access the Settings View.
                <br/>
                <br/>
                <strong>Step 3. </strong>
                Identify the Current Weather Source section and select Set Weather Station.
                <br/>
                <br/>
                <strong>Step 4. </strong>
                Scroll up in the list of weather stations and make a new selection.
                <br/>
                <br/>
                <img className={styles.wximage} src={WxStation} alt="weather station" />
                <figcaption className={styles.figcaption}>Figure 2 - Selection</figcaption>
                <br/>
                <strong>Step 5. </strong>
                Select the Forecast View tab.
                <br/>
                <br/>
                <strong>Step 6. </strong>
                Tap the current temperature icon.
                <br/>
                <br/>
                <strong>Step 7. </strong>
                A corrected temperature value should now be shown. If the selected weather station does not provide a 
                valid temperature value, repeat the steps to select a different station.
            </p>
            <p>
                <h2>Issue: Change Alert Schedule</h2>
                By default the alert update schedule is set to Auto. Auto sets the alert update schedule based on the 
                severity of the forecast weather condition. For example a severe thunderstorm forecast sets the alert update
                schedule to 1 hour. This means that if Cellular or WiFi connection is available, when the app is active it 
                will automatically connect to the weather server and check for an alert update every hour.

                <h3>Manually Set Schedule</h3>
                Weather alert can be set to update manually by selecting one of the following values:
                <ul>
                    <li>1 hour</li>
                    <li>2 hours</li>
                    <li>4 hours</li>
                    <li>8 hours</li>
                    <li>12 hours</li>
                </ul>
            </p>
            <img className={styles.wximage} src={AlertSchedule} alt="set schedule" />
            <figcaption className={styles.figcaption}>Figure 3 - Alert Scheduling</figcaption>
            <br/>
        </div>
        <Footer />
        </div>
    ); 
}
export default Solve;