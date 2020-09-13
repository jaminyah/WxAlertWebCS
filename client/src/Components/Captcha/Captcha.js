import React, { Component } from 'react';



class Captcha extends Component {

    constructor(props) {
        super(props);
        /*
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
        */
       this.state = {captchaImage: props.math}
    }

 /*
   fetchCaptcha() {
        console.log('Fetching captcha');
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
                console.log(result.msg);
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

    componentDidMount() {
        this.fetchCaptcha()
    }
    */

    render() {
       return (
            /*<img src={this.state.form.blob} alt='captcha' />*/
            <img src={this.state.captchaImage} alt='captcha' />
        );
    }
}

export default Captcha;