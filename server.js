const inputCheck = require('./utils/inputCheck')
const express = require('express')
const res = require('express/lib/response')
const db = require('./db/connection')
const PORT = process.env.PORT || 3001
const app = express()
const apiRoutes = require('./routes/apiRoutes')

// Express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', apiRoutes)












// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})