export default function handler(req, res) {
    if (req.method === 'POST') {
      const adminData = req.body; 
      res.status(201).json({ message: 'Admin created successfully' });
    } else if (req.method === 'GET') {
      const admin = { id: 1, name: 'Admin' };
      res.status(200).json(admin);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  