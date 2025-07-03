const Session = require('../models/Session');

const bookSession = async (req, res) => {
  const { mentor, date, time } = req.body;
  try {
    const session = await Session.create({ mentor, date, time });
    res.status(201).json(session);
  } catch (err) {
    console.error('Booking Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { bookSession };

