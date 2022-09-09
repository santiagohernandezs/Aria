import './App.css';
import { useState } from 'react';
import { Slider, Checkbox } from 'rsuite';
import { IoCopy } from 'react-icons/io5';

function App () {
    const [values, setValues] = useState(5)

    function validate () {
        const options = {
            IUC: false,
            ILC: false,
            IN: false,
            IS: false
        };

        let char = '';
        let passlength = values

        for (let i in options) {
            if (document.getElementById(i).checked) {
                options[i] = true;
            }
        }

        let optionsValues = Object.values(options);

        for (let i = 0; i < optionsValues.length; i++) {
            if (optionsValues[i] === true) {
                char += ['ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    'abcdefghijklmnopqrstuvwxyz',
                    '123456789',
                    '!@#$%^&*()<>/?[]"{}:;.,~`-=+_'].at(i)
            }
        }

        let password = ''

        for (let i = 0, n = char.length; i < passlength; ++i) {
            password += char.charAt(Math.floor(Math.random() * n))
        }

        let name = `${password}`

        document.getElementById('password').value = name;

        console.log(password)
    }

    function copyText () {
        var copyText = document.getElementById('password');

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);

        alert('Contraseña copiada!');
    }

    return (
        <div className="App">
            <div className="password-container">
                <div className="password">
                    <input type="text" id='password' readOnly placeholder="P4$$w0Rd"/>
                    <button className="copy" id="copy" onClick={copyText}>
                        <IoCopy className='copyIcon'/>
                    </button>
                </div>
                <div className="settings">
                    <div className="radio-counter">
                        <h1>Character Length</h1>
                        <span id="rangeValue">{values}</span>
                    </div>
                    <div className="range">
                        <Slider
                            min={4}
                            max={15}
                            step={1}
                            def={5}
                            onChange={values => { setValues(values) }}
                            tooltip={false}/>
                    </div>
                    <div className="options">
                        <div className="option">
                            <Checkbox id="IUC"/>
                            <label className="default-label">Include Capital Letters</label>
                        </div>
                        <div className="option">
                            <Checkbox id='ILC'/>
                            <label className="default-label">Include Tiny Letters</label>
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
                        <h2 className={values < 9 ? 'indicator-red' : 'indicator-green'}>{ values < 9 ? 'LOW' : 'HIGH' }</h2>
                    </div>
                    <button className="button" onClick={validate}>
                        <h2>GENERATE</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
