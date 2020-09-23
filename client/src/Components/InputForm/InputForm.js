/**
 * changeHandler()
 * Reference: https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
 */

import React from 'react';
import '../InputForm/InputForm.css';
import CommentList from '../CommentList/CommentList';

class InputForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isVerified: false,
            isPublished: false,
            comment: {
                username: '',
                message: ''
            },
            form: {
                ShowLineOptions: [],
                CaptchaType: "math",
                Id: '',
                VerifyValue: '',
                DriverAudio: {
                    Length: 6,
                    Language: 'en'
                },
                DriverString: {
                    Height: 60,
                    Width: 240,
                    ShowLineOptions: 0,
                    NoiseCount: 0,
                    Length: 6,
                    Fonts: ["wqy-microhei.ttc"],
                    BgColor: {R: 0, G: 0, B: 0, A: 0},
                },
                DriverMath: {
                    Height: 34,
                    Width: 240,
                    ShowLineOptions: 0,
                    NoiseCount: 0,
                    Length: 6,
                    Fonts: ["wqy-microhei.ttc"],
                    BgColor: {R: 0, G: 0, B: 0, A: 0},
                },
                DriverDigit: {
                    Height: 80,
                    Width: 240,
                    Length: 5,
                    MaxSkew: 0.7,
                    DotCount: 80
                },
                blob: "",
                isLoading: false
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyCaptcha = this.verifyCaptcha.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.fetchCaptcha = this.fetchCaptcha.bind(this);
        this.initialState = { ...this.state }
    }

    fetchCaptcha() {
        console.log('Fetching captcha');

        var fetchData = {
            method: 'post',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }
        };

        fetch('/api/getCaptcha', fetchData)
        .then(function(response) {
            console.log("/api/getCaptcha - response");
            return response.json();
        })
        .then(
            (result) => {
                console.log(result.msg);
                this.setState({
                    form: {
                        Id: result.captchaId,
                        blob: result.data},
                        isLoading: false
                })
            }
        )
        .catch(function(error){
            console.log("fetch error: ")
            console.log(error);
        });
    }

 
    verifyCaptcha() {
        console.log('Verify Captcha');
 
        var fetchData = {
            method: 'post',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }
        }

        fetch('/api/verifyCaptcha', fetchData)
        .then(function(response) {
            console.log(" fetch .then");
            return response.json();
        })
        .then(
            (result) => {
                console.log(result.msg);
               if (result.code === 1) {
                   console.log('verify - ok');
                   this.setState({ isVerified: true });
                   this.setState({ isPublished: false });
               } else {
                this.resetCaptchaState();
                this.fetchCaptcha();      
               }
            }
        )
        .catch(function(error){
            console.log("fetch error: ")
            console.log(error);
        });    
    }

    componentDidMount() {
        this.fetchCaptcha();
    }

    handleSubmit(event) {
        console.log(this.state.comment.username);
        console.log(this.state.comment.message);
        event.preventDefault();

        var commentData = {
            method: 'post',
            body: JSON.stringify(this.state.comment),
            headers: new Headers()
        }

        fetch('/api/submit', commentData)
        .then(function(response) {
            console.log(" fetch .then");
            return response.json();
        })
        .then(
            (comments) => {
                this.setState(this.initialState);
                this.fetchCaptcha();      
                this.setState({ isPublished: true });  
            }
        )
        .catch(function(error){
            console.log("fetch error: ")
            console.log(error);
        });    
  
    }

    changeHandler = event => {
        this.setState({
            comment: {
                ...this.state.comment,
                [event.target.name]: event.target.value
            },
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    resetCaptchaState() {
        const name = this.state.comment.username;
        const comment = this.state.comment.message;
        this.setState(this.initialState);
        this.setState({
            comment: {
                username: name,
                message: comment
            }
        })
    }

    render() {
        return (
            <div className='input-container'> 
                <form onSubmit={this.handleSubmit} method="post" id="comment-form">
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="username" id="username" placeholder="2 - 20 characters" pattern="[a-zA-Z][a-zA-Z-9-_\.]{1,20}" 
                            required minLength="2" maxLength="20" value={this.state.comment.username} onChange={this.changeHandler} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="msg">Message:</label>
                        </div>
                        <div className="col-75">
                            <textarea name="message" id="message" pattern="[a-zA-Z0-9]+" required minLength="3" maxLength="140" 
                                 value={this.state.comment.message} onChange={this.changeHandler} >
                            </textarea>
                        </div>
                    </div>
                        { this.state.isVerified ? <div></div> :
                            (
                                <div className="row captcha-row" id="captcha-row">
                                    <div className="col-25"></div>
                                    <div className="col-75">
                                        <div id="captcha-img">
                                            <img src={this.state.form.blob} alt='' onClick={this.verifyCaptcha} />
                                        </div>
                                        <input type="number" name="VerifyValue" id="VerifyValue" placeholder="Your math solution: " 
                                            pattern="[0-9]*" inputMode="numeric" required value={this.state.form.VerifyValue || ''} 
                                                onChange={this.changeHandler} />

                                        <input type="button" className="captcha-verify" id="captcha-verify" 
                                                        onClick={this.verifyCaptcha} value="Verify Captcha" />
                                    </div>
                                </div>
                            )
                        }
                    <div className="row">
                        <div className="col-25"></div>
                        <div className="col-75">
                            <div className="alert hide">
                                <div className="message"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"></div>
                        <div className="col-75">
                            { this.state.isVerified ? <input type="submit" id="publish" value="Publish" /> : <div></div>}
                        </div>
                    </div>
                </form>
                <CommentList isUpdated={this.state.isPublished}  />
            </div>
        );
    }        
}

export default InputForm;