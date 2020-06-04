import React, { Component } from 'react';
//import axios from'axios';
/*
class Captcha extends Component {

    render() {
        return (
            <div>Captcha Image placeholder.</div>
        );
    }
}

export default Captcha;
*/


class Captcha extends Component {

    constructor(props) {
        super(props);
        /*this.state = {
            captchaImage: 'pending ...'
        }*/
        this.state = {
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
                loading: false
            }
        }
    }

 

   assignCaptcha(captcha) {
        this.setState({
            form: {blob: captcha.data}
        });
    }

    componentDidMount() {
        console.log('Generating captcha');
        var fetchData = {
            method: 'post',
            body: JSON.stringify(this.state.form),
            headers: new Headers()
        }
 
        fetch('/api/getCaptcha', fetchData)
        .then(function(response){
            console.log(" fetch .then");
            return response.json();
        })
        .then(
            (result) => {
                this.setState({
                    form: {blob: result.data}
                })
            }
        )
        .catch(function(error){
            console.log("fetch error: ")
            console.log(error);
        });

    }

    render() {
       return (
            <img src={this.state.form.blob} alt='captcha' />
        );
    }
}

export default Captcha;