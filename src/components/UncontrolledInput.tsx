// import {useState} from "react";

import {useRef} from "react";

const UncontrolledInput = () => {
    // const [name, setName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setName(e.target.value);
    // }

    const handleClick = () => {
        alert(`Value is: ${inputRef.current?.value}`);
    }

    return(
        <>
            <div className="text-center mt-8 space-x-4">
                <input
                    ref={inputRef}
                    type="text"
                className="border rounded px-4 py-2"
                />
                <button
                    onClick={handleClick}
                    className="bg-cf-dark-gray text-white py-2 px-4 rounded">
                    Show Value
                </button>
            </div>
        </>
    )
}

export default UncontrolledInput;