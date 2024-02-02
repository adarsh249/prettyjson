import React from 'react'

const JsonInput: React.FC = () => {
    function handleBeautify(e: React.FormEvent) {
        e.preventDefault();
        const form = e.currentTarget;
        const jsonInput = form.querySelector('textarea')?.value;
        console.log(jsonInput);

    }
    return (<form method="post" onSubmit={handleBeautify}>
        <label>
            Enter JSON Below:
            <br />
            <textarea
                rows={40} 
                cols={80}
            />
        </label>
        <br />
        <button type="submit">Beautify!</button>
    </form>);
}

export default JsonInput;