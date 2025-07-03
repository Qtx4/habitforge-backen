const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const mentorRoutes = require('./routes/mentorRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const userRoutes = require('./routes/userRoutes'); // ✅ ADD THIS LINE
const throttle = require('./middleware/throttle');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(throttle); // ✅ Rate limiting

// Public route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Auth routes (Register/Login)
app.use('/api/users', userRoutes); // ✅ ADD THIS LINE

// Protected mentor route
app.use('/api/mentors', authMiddleware, mentorRoutes);

// Session booking route (public for now)
app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
