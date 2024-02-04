import React from 'react';

interface JsonOutputProps {
    formattedJSON: string;
}
const JsonOutput: React.FC<JsonOutputProps> = ({ formattedJSON }) => {

    function handleCopy() {
        navigator.clipboard.writeText(formattedJSON);
    }

    return(
        <div className="output">
            <pre>
                {formattedJSON}
            </pre>
            <button onClick={handleCopy}>Copy</button>
        </div> 
    );
        
}

export default JsonOutput;