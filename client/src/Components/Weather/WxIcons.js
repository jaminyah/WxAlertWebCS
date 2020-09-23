import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';
import '../TableStyle.css';
import {
    Bkn, Blizzard, Dust, Few, FzRain, Haze, Ovc, RainShowersHi, RainShowers, RainSleet, RainSnow, Rain, SkyClear, Sleet,
    Smoke, SnowFzRain, SnowSleet, Snow, ThunderStormHi, ThunderStormSct, ThunderStorm, WindBroken, WindFew, WindOvc,
    WindSct, WindSkc, Hot, Hurricane, Tornado, TropStorm
} from '../../assets/images/wx';

function WxIcons() {

    const header = [
        {id: 1, col1: 'Icon', col2: 'Description'}
    ];
    
    const headerFunction = h =>
        <tr key={h.id}>
            <th id='wxrow-icon'>{h.col1}</th>
            <th id='wxrow-desc'>{h.col2}</th>
        </tr>

    const tableHeader = header.map(headerFunction);

    const iconList = [
        {id: 1, image: <img src={Bkn} alt='broken' />, description: 'Broken'},
        {id: 2, image: <img src={Blizzard} alt='blizzard' />, description: 'Blizzard'},
        {id: 3, image: <img src={Dust} alt='dust' />, description: 'Dust'},
        {id: 4, image: <img src={Few} alt='few' />, description: 'Few'},
        {id: 5, image: <img src={FzRain} alt='fz rain' />, description: 'Freezing rain'},
        {id: 6, image: <img src={Haze} alt='haze' />, description: 'Haze'},
        {id: 7, image: <img src={Ovc} alt='overcast' />, description: 'Overcast'},
        {id: 8, image: <img src={RainShowersHi} alt='rain showers hi' />, description: 'Rain showers, hi visibility'},
        {id: 9, image: <img src={RainShowers} alt='rain showers' />, description: 'Rain showers'},
        {id: 10, image: <img src={RainSleet} alt='rain sleet' />, description: 'Rain sleet'},
        {id: 11, image: <img src={RainSnow} alt='rain snow' />, description: 'Rain snow'},
        {id: 12, image: <img src={Rain} alt='rain' />, description: 'Rain'},
        {id: 13, image: <img src={SkyClear} alt='sky clear' />, description: 'Sky clear'},
        {id: 14, image: <img src={Sleet} alt='sleet' />, description: 'Sleet'},
        {id: 15, image: <img src={Smoke} alt='smoke' />, description: 'Smoke'},
        {id: 16, image: <img src={SnowFzRain} alt='snow freeze rain' />, description: 'Snow, freeze rain'},
        {id: 17, image: <img src={SnowSleet} alt='snow sleet' />, description: 'Snow sleet'},
        {id: 18, image: <img src={Snow} alt='snow' />, description: 'Snow'},
        {id: 19, image: <img src={ThunderStormHi} alt='tstorm hi' />, description: 'Thunderstorm, hi visibility'},
        {id: 20, image: <img src={ThunderStormSct} alt='tstorm sct' />, description: 'Thunderstorm, scattered'},
        {id: 21, image: <img src={ThunderStorm} alt='tstorm' />, description: 'Thunderstorm'},
        {id: 22, image: <img src={WindBroken} alt='windbkn' />, description: 'Wind, broken'},
        {id: 23, image: <img src={WindFew} alt='windfew' />, description: 'Wind, few'},
        {id: 24, image: <img src={WindOvc} alt='windovc' />, description: 'Wind, overcast'},
        {id: 25, image: <img src={WindSct} alt='windsct' />, description: 'Wind, scattered'},
        {id: 26, image: <img src={WindSkc} alt='windskc' />, description: 'Wind, sky clear'},
        {id: 27, image: <img src={Hot} alt='hot' />, description: 'Hot'},
        {id: 28, image: <img src={Hurricane} alt='hurricane' />, description: 'Hurricane'},
        {id: 29, image: <img src={Tornado} alt='tornado' />, description: 'Tornado'},
        {id: 30, image: <img src={TropStorm} alt='tropical storm' />, description: 'Tropical Storm'}
    ];

    const mappingFunction = f => <tr key={f.id}><td>{f.image}</td><td>{f.description}</td></tr>
    const tableData = iconList.map(mappingFunction);

    return (
        <div>
            <div className={styles.container}>
                <h1>Weather Icons</h1>
                <p>
                    WxAlert uses various weather icons to describe current and forecast weather conditions. Table 1 - Weather Icons, provides
                    a list of icons and their description.
                </p>
                <table id='wxtable-icons'>
                    <thead>
                        {tableHeader}
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
                <figcaption className={styles.figcaption}>Table 1 - Weather Icons</figcaption>
            </div>
            <Footer />
        </div>
    ); 
}

export default WxIcons;