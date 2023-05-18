import axios from 'axios';


const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/comments', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8000/api/comments');
        const comments = response.data;
        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Error fetching comments' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});