import React from 'react';
import styles from '../Component.module.css';
import '../TableStyle.css';
import Footer from '../Footer/Footer';
import {
    AdvisCFlood, AdvisIceStrm, AdvisTsra, AdvisTypical, WarnTypical, WatchTypical, WarnHrdFrz, WarnLakeshoreFld,
    WarnRedFlag, WatchAvalanche, WatchFireWx, WatchHighWind
} from '../../assets/images/alerts';

function Alert() {

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
        {id: 1, image: <img src={AdvisTypical} alt='advisory' />, description: 'Alert advisory'},
        {id: 2, image: <img src={WatchTypical} alt='watch' />, description: 'Alert watch'},
        {id: 3, image: <img src={WarnTypical} alt='warn' />, description: 'Alert warn'}
    ];

    const iconAdvisory = [
        {id: 1, image: <img src={AdvisCFlood} alt='coast flood' />, description: 'Coastal flood advisory'},
        {id: 2, image: <img src={AdvisIceStrm} alt='ice strom' />, description: 'Ice storm advisory'},
        {id: 3, image: <img src={AdvisTsra} alt='thunderstorm' />, description: 'Thunderstorm advisory'}
    ];

    const iconWatch = [
        {id: 1, image: <img src={WatchAvalanche} alt='avalanche watch' />, description: 'Avalanche watch'},
        {id: 2, image: <img src={WatchHighWind} alt='high wind watch' />, description: 'High wind watch'},
        {id: 3, image: <img src={WatchFireWx} alt='fire weather watch' />, description: 'Fire weather watch'}
    ];

    const iconWarn = [
        {id: 1, image: <img src={WarnHrdFrz} alt='hard freeze warn' />, description: 'Hard Freeze warning'},
        {id: 2, image: <img src={WarnLakeshoreFld} alt='lakeshore fld warn' />, description: 'Lakeshore flood warning'},
        {id: 3, image: <img src={WarnRedFlag} alt='red flag warn' />, description: 'Red flag warning'}
    ];

    const mappingFunction = f => <tr key={f.id}><td>{f.image}</td><td>{f.description}</td></tr>
    const tableCategory = iconCategory.map(mappingFunction);
    const tableAdvisory = iconAdvisory.map(mappingFunction);
    const tableWatch = iconWatch.map(mappingFunction);
    const tableWarn = iconWarn.map(mappingFunction);

    return (
        <div>
            <div className={styles.container}>
                <h1>Weather Alert Icons</h1>
                <p>
                    WxAlert uses various weather alert icons to describe weather alert conditions. Table 1 - Alert Icon Types
                    shows the three categories of weather alert icons that can be displayed. 
                </p>
                <table id='wxtable-icons'>
                    <thead>
                        {tableHeader}
                    </thead>
                    <tbody>
                        {tableCategory}
                    </tbody>
                </table>
                <figcaption className={styles.figcaption}>Table 1 - Alert Icon Types</figcaption>

                <h2>Advisory Icons</h2>
                <p>
                    Table 2 - Advisory Icons is a partial list of alert advisory icons. 
                </p>
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

                <h2>Warning Icons</h2>
                <p>
                    Table 4 - Warn Icons is a partial list of alert warn icons. 
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
            <Footer />
        </div>
    ); 
}

export default Alert;