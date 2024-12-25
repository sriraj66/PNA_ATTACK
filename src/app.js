import express from 'express';
import cors from "cors"

const app = express();

app.use(cors())

app.use((req, res, next) => {
    console.log(`Received request from IP: ${req.ip}`);
    next();
});

app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'application/json',
        'X-Custom-Header': 'CustomValue'
    });

    res.json({
        message: 'Hello, world! Here is your data.',
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server listening on localhost at port 3000...');
});
