import React from 'react';
import styles from '../Component.module.css';
import Footer from '../Footer/Footer';
import InputForm from '../InputForm/InputForm';
import CommentList from '../CommentList/CommentList';
//import DataLoader from '../Loader/Loader'; 

function Comments() {
    return (
        <div>
            <div className={styles.container}>
                <h1>User Comments</h1>
                <InputForm />
               {/* <DataLoader />*/} 
                <CommentList />
            </div>
            <Footer />
        </div>
    ); 
}

export default Comments;