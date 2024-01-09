import { useState, useCallback, useEffect } from "react";


function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    let [password, setPassword] = useState("");


    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

        if (numbersAllowed) str += '1234567890';
        if (charactersAllowed) str += '!@#$%^*';

        for (let i = 1; i <= length; i++) {
            const char = Math.floor(Math.random() * str.length +1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numbersAllowed, charactersAllowed, setPassword]);

    useEffect(()=>{
        generatePassword()
    },[length,charactersAllowed,numbersAllowed,generatePassword])

    const copyPassword = ()=>{
        window.navigator.clipboard.writeText(password);
    }

    return (
        <>
            <div className="card" style={{ display: 'flex', justifyContent: "center", margin: "25px 100px 0 100px" }}>
                <div className="card-header">Password Generator</div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="password"
                            value={password}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={copyPassword}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="slidecontainer">
                        <input
                            type="range"
                            min="8"
                            max="16"
                            className="range"
                            id="myRange"
                            value={length}
                            onChange={(event)=>{setLength(Number(event.target.value))}}
                        />
                        <label style={{ marginRight: "10px" }}>Length ({length})</label>

                        <input type="checkbox" defaultChecked={numbersAllowed} onClick={()=>{setNumbersAllowed((prev)=>!prev)}}/>
                        <label style={{ marginRight: "10px" }}>Numbers</label>

                        <input type="checkbox" defaultChecked={charactersAllowed} onClick={()=>{setCharactersAllowed((prev)=>!prev)}}/>
                        <label style={{ marginRight: "10px" }}>Characters</label>
                        <button
                            className="btn btn-primary ml-auto"
                            type="button"
                            id="button-addon2"
                            onClick={generatePassword}
                        >
                            Generate New Password
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordGenerator;


