import express from 'express';
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());  // Enables JSON parsing for API routes

mongoose.connect('mongodb://localhost:27017/bookbuddy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});  // Connect to MongoDB

app.use('/api/user-books', bookRoutes);  // Use bookRoutes for user book API endpoints

app.get('/api/books', async (req, res) => {
    const query = req.query.query;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// routes/bookRoutes.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Book Routes are working!');
});

export default router;
