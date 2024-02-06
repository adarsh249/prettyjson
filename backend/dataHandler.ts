import fs from 'fs';

const dataFilePath = 'data.json';

/**
 * If the data.json file exists, delete it and overwrite it with the new data. (not the most efficient)
 * Saves Beautified JSON to storage.
 * @param data Beautified JSON
 * @returns boolean if save was successful
 */
const saveData = (data:ReadableStream<Uint8Array> | null) => {
    if(fs.existsSync(dataFilePath)) {
        fs.unlinkSync(dataFilePath);
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    return true;
}

/**
 * Read the data from the json file (storage).
 * @returns the read data or null if failure.
 */
const loadData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        return data;
    }
    catch(e) {
        return null;
    }
}

export default {saveData, loadData};