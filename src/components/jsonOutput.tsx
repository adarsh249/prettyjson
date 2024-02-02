import React from 'react';

interface JsonOutputProps {
    formattedJSON: string;
}
const JsonOutput: React.FC<JsonOutputProps> = ({ formattedJSON }) => {
    return(
        <div className="output">
            <pre>
                {formattedJSON}
            </pre>
            <button>Copy</button>
        </div> 
    );
        
}

export default JsonOutput;