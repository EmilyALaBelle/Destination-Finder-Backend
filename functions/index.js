import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { createNewDestination, getAllDestinations, updateDestination, getSpecificDestination } from './src/destination.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/destinations', await getAllDestinations)
app.post('/destinations', await createNewDestination)
app.patch('/destinations/:destinationId', await updateDestination)
app.get('/destination', await getSpecificDestination)
//app.delete('destinations/:destinationId', await deleteDestination)

export const api = functions.https.onRequest(app)