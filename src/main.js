require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.APP_PORT || 5000

async function bootstrap() {
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`))
}

bootstrap()
