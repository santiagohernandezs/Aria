import './App.css';
import { useState } from 'react';
import { Slider, Checkbox } from 'rsuite';

// var password = document.getElementById('password');

// function genPassword () {
//     var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var passwordLength = value;
//     var password = '';
//     for (var i = 0; i <= passwordLength; i++) {
//         var randomNumber = Math.floor(Math.random() * chars.length);
//         password += chars.substring(randomNumber, randomNumber + 1);
//     }
//     document.getElementById('password').value = password;
// }

// function copyPassword () {
//     var copyText = document.getElementById('password');
//     copyText.select();
//     document.execCommand('copy');
// }

function App () {
    const [value, setValue] = useState(5)

    return (
        <div className="App">
            <div className="password-container">
                <div className="password">
                    <input type="text" id='password' placeholder="Hello" value="123ywuehbd"/>
                    <button className="copy" id="copy" onClick={() => { alert('Haz copiado tu contrasena') }}></button>
                </div>
                <div className="settings">
                    <div className="radio-counter">
                        <h1>Character Length</h1>
                        <span id="rangeValue">{value}</span>
                    </div>
                    <div className="range">
                        <Slider min={4} max={15} step={1} def={5} onChange={value => { setValue(value) }} tooltip={false}/>
                    </div>
                    <div className="options">
                        <div className="option">
                            <Checkbox id="IUC"/>
                            <label className="default-label">Include Uppercase Letters</label>
                        </div>
                        <div className="option">
                            <Checkbox id='ILC'/>
                            <label className="default-label">Include Lowercase Letters</label>
                        </div>
                        <div className="option">
                            <Checkbox id='IN'/>
                            <label className="default-label">Include Numbers</label>
                        </div>
                        <div className="option">
                            <Checkbox id='IS'/>
                            <label className="default-label">Include Symbols</label>
                        </div>
                    </div>
                    <div className="indicator">
                        <h2>STRENGTH</h2>
                        <h2 className={value < 9 ? 'indicator-red' : 'indicator-green'}>{ value < 9 ? 'LOW' : 'HIGH' }</h2>
                    </div>
                    <button className="button">
                        <h2>GENERATE</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
