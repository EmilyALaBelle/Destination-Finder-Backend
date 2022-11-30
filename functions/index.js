import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { createNewDestination, getAllDestinations, updateDestination, postSpecificDestination } from './src/destination.js'
import { addNewUser, userLogin } from './src/user.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/destinations',  getAllDestinations)
app.post('/destinations',  createNewDestination)
app.patch('/destinations/:destinationId',  updateDestination)
app.post('/destination',  postSpecificDestination)
//app.delete('destinations/:destinationId', await deleteDestination)
app.post('/login', userLogin)
app.post('/signup', addNewUser)

export const api = functions.https.onRequest(app)