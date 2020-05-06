import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <h2 className={styles.container}>Home page</h2>
            <Footer />
        </div>
    ); 
}

export default Home;