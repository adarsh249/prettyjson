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
            <p>Pretty JSON: </p>            
            <button onClick={handleCopy}>Copy</button><br></br>
            <pre>
                {formattedJSON}
            </pre> <br></br>
        </div> 
    );
        
}

export default JsonOutput;