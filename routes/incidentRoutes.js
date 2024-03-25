import express from 'express';
import Incident from '../models/Incident.js';

const router = express.Router();

// Create a new incident
router.post('/', async (req, res) => {
  const incident = new Incident({
    category: req.body.category,
    prioritization: req.body.prioritization,
    description: req.body.description,
    status: req.body.status
  });
  try {
    const newIncident = await incident.save();
    res.status(201).json(newIncident);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all incidents
router.get('/', async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single incident by ID
router.get('/:id', getIncident, (req, res) => {
  res.json(res.incident);
});

// Update an incident by ID
router.patch('/:id', getIncident, async (req, res) => {
  if (req.body.category != null) {
    res.incident.category = req.body.category;
  }
  // ... handle other fields similarly

  try {
    const updatedIncident = await res.incident.save();
    res.json(updatedIncident);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an incident by ID
router.delete('/:id', getIncident, async (req, res) => {
  try {
    await res.incident.remove();
    res.json({ message: 'Deleted Incident' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getIncident(req, res, next) {
  let incident;
  try {
    incident = await Incident.findById(req.params.id);
    if (incident == null) {
      return res.status(404).json({ message: 'Cannot find incident' });
    }
 
} catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.incident = incident;
  next();
}

export default router;
