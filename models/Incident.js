import mongoose from 'mongoose' 

const incidentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  category: { type: String, required: true },
  prioritization: { type: String, required: true, enum: ['low', 'medium', 'high'] },
  description: { type: String, required: true },
  comments: { type: String },
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now },
  status: { type: String, required: true, enum: ['create', 'in process', 'attended'] }
});

const Incident = mongoose.model('Incident', incidentSchema)
export default Incident;

