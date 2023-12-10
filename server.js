import app from './api/app.js';
const port = process.env.port || 9002;

app.listen(port, () => {
    console.log(`server running at ${port}.`)
})