import React from 'react'
import { useState, useEffect } from 'react';
import JsonOutput from './jsonOutput';

const JsonInput: React.FC = () => {
    
    const [formattedJSON, setFormattedJSON] = useState<string | null>(null);
    const [recentInput, setRecentInput] = useState<string>('');
    /**
     * On page load, function retrieves the latest data from storage.
     */
    useEffect(() => {
        fetch('http://localhost:3001/load')
        .then(res => res.json())
        .then((data: string) => {
            setRecentInput(data);
        })
        .catch(e => {
            console.error(`Error fetching latest data...`, e);
        })
    }, []);

    /**
     * Function prevents default behavior of the submit button and sets formatted JSON to beautify it or throw an error.
     * @param e Submit button
     */
    function handleBeautify(e: React.FormEvent) {
        e.preventDefault();
        const form = e.currentTarget;
        const jsonInput = form.querySelector('textarea')?.value;
        console.log(jsonInput);
        try {
            if(jsonInput !== undefined){
                const parsedJSON = JSON.parse(jsonInput);
                setFormattedJSON(JSON.stringify(parsedJSON, null, 2));
                save(parsedJSON);
            }

        } catch(e) {
            setFormattedJSON('Error: JSON is incorrectly formatted.');

        }

    }

    /**
     * This function calls the backend service /save API and saves the valid JSON to storage
     * upon submission.
     * @param data The inputted JSON
     */
    function save(data:string){
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3001/save', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    console.log('Data stored successfully!');
                }
                else {
                    console.log('Error storing data...');
                }
            }
        };
        xhr.send(JSON.stringify(data));
    }
    return (
    <div className="json-form">
        <form method="post" onSubmit={handleBeautify}>
            <label>
                Enter JSON Below:
                <br />
                <textarea
                    rows={40} 
                    cols={60}
                    defaultValue={recentInput}
                />
            </label>
            <br />
            <button type="submit">Beautify!</button>
        </form>
        {formattedJSON !== null && <JsonOutput formattedJSON={formattedJSON} />}
        </div>);
}

export default JsonInput;