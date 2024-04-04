import dotenv from 'dotenv'
import config from './config/config.js' 
import app from './server/express.js'
import mongoose from 'mongoose' 
import userRoutes from './routes/userRoutes.js';
import incidentRoutes from './routes/incidentRoutes.js';
const dotenvconfig = dotenv.config();

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { 
    //useNewUrlParser: true,
//useCreateIndex: true, 
//useUnifiedTopology: true 
} ) 
.then(() => {
    console.log("Connected to the database!");
   })
    
mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database: ${config.mongoUri}`) 
})
app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})


// Use routes
app.use('/api/users', userRoutes);
app.use('/api/incidents', incidentRoutes);