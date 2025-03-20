const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// API Key של Render
const renderApiKey = 'rnd_eDTngY6SPS53Yecwtn460poe62Sb';  // החלף בזה את ה-API Key שלך
app.get('/', (req, res) => {
    res.send('Hello World!');  // או כל תוכן אחר שתרצי
});

app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                Authorization: `Bearer ${renderApiKey}`,
            },
        });
        res.json(response.data);  // מחזיר את רשימת האפליקציות ב-JSON
    } catch (error) {
        res.status(500).send('Error fetching apps: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
