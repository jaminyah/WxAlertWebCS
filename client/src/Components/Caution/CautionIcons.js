import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';
import '../TableStyle.css';
import {
    DiaAdvisBlizz, DiaAdvisFlood, DiaAdvisSSurge, DiaAdvisory, DiaWarnIceStorm, DiaWarnRip, DiaWarnTropStorm,
    DiaWarn, DiaWatchFldLakeShore, DiaWatchFreeze, DiaWatchWndChill, DiaWatch, Badge
} from '../../assets/images/caution';
import {
    AdvisCFlood, AdvisTsra
} from '../../assets/images/alerts'

function Caution() {


    const header = [
        {id: 1, col1: 'Icon', col2: 'Description'}
    ];

    const headerFunction = h => 
        <tr key={h.id}>
            <th id='wxrow-icon'>{h.col1}</th>
            <th id='wxrow-desc'>{h.col2}</th>
        </tr>;

    const tableHeader = header.map(headerFunction);

    const iconCategory = [
        {id: 1, image: <img src={DiaAdvisory} alt='advisory' />, description: 'Weather advisory'},
        {id: 2, image: <img src={DiaWatch} alt='watch' />, description: 'Weather watch'},
        {id: 3, image: <img src={DiaWarn} alt='warn' />, description: 'Weather warning'}
    ];


    const iconAdvisory = [
        {id: 1, image: <img src={DiaAdvisBlizz} alt='blizzard' />, description: 'Blizzard advisory'},
        {id: 2, image: <img src={DiaAdvisFlood} alt='flood' />, description: 'Flood advisory'},
        {id: 3, image: <img src={DiaAdvisSSurge} alt='storm surge' />, description: 'Storm surge advisory'}
    ];


    const iconWatch = [
        {id: 1, image: <img src={DiaWatchFldLakeShore} alt='lakeshore flood' />, description: 'Lakeshore flood watch'},
        {id: 2, image: <img src={DiaWatchFreeze} alt='freeze' />, description: 'Freeze watch'},
        {id: 3, image: <img src={DiaWatchWndChill} alt='windchill' />, description: 'Windchill watch'}
    ];

    const iconWarn = [
        {id: 1, image: <img src={DiaWarnIceStorm} alt='ice storm' />, description: 'Ice storm warning'},
        {id: 2, image: <img src={DiaWarnRip} alt='rip current' />, description: 'Rip current warning'},
        {id: 3, image: <img src={DiaWarnTropStorm} alt='tropical storm' />, description: 'tropical storm warning'}
    ];

    const mappingFunction = f => <tr key={f.id}><td>{f.image}</td><td>{f.description}</td></tr>
    const tableCategory = iconCategory.map(mappingFunction);
    const tableAdvisory = iconAdvisory.map(mappingFunction);
    const tableWatch = iconWatch.map(mappingFunction);
    const tableWarn = iconWarn.map(mappingFunction);

    return (
        <div>
            <div className={styles.container}>

                <h1>Caution icons</h1>
                <p>
                    WxAlert uses various caution icons to provide alert notification details. The last posted alert
                    notification is represented as a caution icon. Table 1 - Caution Icon Types
                    shows the three categories of weather caution icons that can be displayed.  
                    Caution icons can be of type advisory, watch, or warning.
                </p>
                <table id='wxtable-icons'>
                    <thead>
                        {tableHeader}
                    </thead>
                    <tbody>
                        {tableCategory}
                    </tbody>
                </table>
                <figcaption className={styles.figcaption}>Table 1 - Caution Icon Types</figcaption>

                <h2>Badge Counter</h2>
                <div>
                    <img src={AdvisCFlood} alt='coastal flood' />
                    <img src={AdvisTsra} alt='thunderstorm' />
                </div>
                <div >
                    <img className={styles.wxbadge} src={Badge} alt='badge count' />
                    <p>
                        A red badge counter icon is associated with each caution icon. It is a count of the total number of
                        alert notifications that were recently posted and are currently active. Tapping on the caution icon 
                        displays further details of the alert notification. Swiping on the alert 
                        detail view will reveal other alert detail information if the badge count is greater than one.
                    </p>
                </div>
                <div className={styles.wxclear}></div>
                <div>
                        <h2>Advisory Icons</h2>
                        Table 2 - Advisory Icons is a partial list of alert advisory icons. 
                        
                    <table id='wxtable-icons'>
                        <thead>
                            {tableHeader}
                        </thead>
                        <tbody>
                            {tableAdvisory}
                        </tbody>
                    </table>
                    <figcaption className={styles.figcaption}>Table 2 - Advisory Icons</figcaption>

                    <h2>Watch Icons</h2>
                    <p>
                        Table 3 - Watch Icons is a partial list of alert watch icons. 
                    </p>
                    <table id='wxtable-icons'>
                        <thead>
                            {tableHeader}
                        </thead>
                        <tbody>
                            {tableWatch}
                        </tbody>
                    </table>
                    <figcaption className={styles.figcaption}>Table 3 - Watch Icons</figcaption>

                    <h2>Warn Icons</h2>
                    <p>
                        Table 4 - Warn Icons is a partial list of alert advisory icons. 
                    </p>
                    <table id='wxtable-icons'>
                        <thead>
                            {tableHeader}
                        </thead>
                        <tbody>
                            {tableWarn}
                        </tbody>
                    </table>
                    <figcaption className={styles.figcaption}>Table 4 - Warn Icons</figcaption>
                </div>
            </div>

            <Footer />
        </div>
    ); 
}

export default Caution;