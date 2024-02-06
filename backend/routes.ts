import express from 'express';
import bodyParse from 'body-parser';
import pkg from './dataHandler';
import cors from 'cors';
const { saveData, loadData } = pkg;
const app = express();
const PORT = 3001;

app.use(bodyParse.json()); //use for every request

//Bad idea to enable cors, but needed to run on two different ports.
//This implementation allows us to only allow requests from port 3000.
app.use(cors({
    origin: "http://localhost:3000",
}));

/**
 * POST /save API call to save data to storage.
 */
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

/**
 * GET /load API call to fetch most recent submission.
 */
app.get('/load', (req, res) => {
    const loadedData = loadData();
    if(loadedData !== undefined && loadedData !== null) {
        res.json(loadedData);
    }
    else {
        res.json('');
    }
});

//Print to console on successful start.
app.listen(PORT, () => {
    console.log(`Backend service running on port ${PORT}!`);
});
