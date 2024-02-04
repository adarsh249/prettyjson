import express from 'express';
import bodyParse from 'body-parser';
import pkg from './dataHandler.js';
import cors from 'cors';
const { saveData, loadData } = pkg;
const app = express();
const PORT = 3001;

app.use(bodyParse.json());
app.use(cors({
    origin: "http://localhost:3000",
}));
app.post('/save', (req, res) => {
    const jsonData = req.body;
    const saveResult = saveData(jsonData);
    if(saveResult){
        res.status(200).send('Data Saved!');
    }
    else {
        res.status(500).send('Faile to save data...');
    }
});

app.get('/load', (req, res) => {
    const loadedData = loadData();
    if(loadedData !== undefined && loadedData !== null) {
        res.json(loadedData);
    }
    else {
        res.json('');
    }
});

app.listen(PORT, () => {
    console.log(`Backend service running on port ${PORT}!`);
});
