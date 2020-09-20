import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';
import InputForm from '../InputForm/InputForm';

function Comments() {
    return (
        <div>
            <div className={styles.container}>
                <h1>User Comments</h1>
                <InputForm />
            </div>
            <Footer />
        </div>
    ); 
}

export default Comments;