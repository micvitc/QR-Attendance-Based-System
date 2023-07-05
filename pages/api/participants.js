export default function handler(req, res) {
    if (req.method === 'POST') {
      const participantData = req.body; 
      res.status(201).json({ message: 'Participant added successfully' });
    } else if (req.method === 'GET') {
      const participants = [
        { id: 1, name: 'Participant 1' },
        { id: 2, name: 'Participant 2' },
      ];
      res.status(200).json(participants);
    } else if (req.method === 'DELETE') {
      const { id } = req.query; 
      res.status(200).json({ message: `Participant with ID ${id} deleted successfully` });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  