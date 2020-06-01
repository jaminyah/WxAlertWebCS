import React from 'react';
import '../InputForm/InputForm.css';
import CaptchaImage from '../Captcha/Captcha';

function InputForm() {
    return (
        <div className='container'>
            <form action="" method="post" id="comment-form">
                <div class="row">
                    <div class="col-25">
                        <label for="name">Name:</label>
                    </div>
                    <div class="col-75">
                        <input type="text" name="username" id="username" placeholder="2 - 20 characters" pattern="[a-zA-Z][a-zA-Z-9-_\.]{1,20}" 
                        required minlength="2" maxlength="20" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="msg">Message:</label>
                    </div>
                    <div class="col-75">
                        <textarea name="message" id="message" pattern="[a-zA-Z0-9]+" required minlength="3" maxlength="140">
                        </textarea>
                    </div>
                </div>
                <div class="row captcha-row"> 
                    <div class="col-25"></div>
                    <div class="col-75">
                        <div id="captcha-img"></div>
                            <CaptchaImage />
                        <input type="number" name="captcha-solution" id="captcha-solution" placeholder="Your math solution: " 
                            pattern="[0-9]*" inputmode="numeric" required />
                        <input type="button" class="captcha-verify" id="captcha-verify" onclick="verifyCaptcha()" value="Verify Value" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25"></div>
                    <div class="col-75">
                        <div class="alert hide">
                            <div class="message"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-25"></div>
                <div class="col-75">
                    <input type="submit" id="publish" value="Publish" />
                </div>
                </div>
            </form>
        </div>
    );
}

export default InputForm;