const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/user.routes'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
