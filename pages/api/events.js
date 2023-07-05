// pages/api/events.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const eventData = req.body; 
      res.status(201).json({ message: 'Event created successfully' });
    } else if (req.method === 'GET') {
      const events = [
        { id: 1, name: 'Event 1' },
        { id: 2, name: 'Event 2' },
      ];
      res.status(200).json(events);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  