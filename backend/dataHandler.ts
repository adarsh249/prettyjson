import fs from 'fs';

const dataFilePath = 'data.json';

const saveData = (data:ReadableStream<Uint8Array> | null) => {
    if(fs.existsSync(dataFilePath)) {
        fs.unlinkSync(dataFilePath);
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    return true;
}

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