import dotenv from 'dotenv'
const dotenvconfig = dotenv.config();
console.log(process.env.JWT_SECRET)
const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://gtavaras:0PMCMsCTTWxd6NpT@cluster0.guzpri5.mongodb.net/incident?retryWrites=true&w=majority&appName=Cluster0"||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/IMS' 
 }
 export default config
