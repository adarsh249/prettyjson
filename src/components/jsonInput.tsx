import React from 'react'

const JsonInput: React.FC = () => {
    return <form>
        <label>
            Enter JSON Below:
            <br />
            <textarea rows={40} cols={80}>

            </textarea>
        </label>
        <br />
        <button type="submit">Beautify!</button>
    </form>
}

export default JsonInput;