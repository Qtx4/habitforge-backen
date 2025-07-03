// backend/seeder.js (ya seedMentors.js)
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Mentor = require('./models/Mentor');

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected for seeding'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

const seedMentors = async () => {
  try {
    await Mentor.deleteMany(); // optional: clear existing data

    await Mentor.insertMany([
      {
        name: 'Kartik Kabdwal',
        field: 'Data Science',
        rating: 4.8
      },
      {
        name: 'Anjali Sharma',
        field: 'Web Development',
        rating: 4.6
      },
      {
        name: 'Ravi Verma',
        field: 'Machine Learning',
        rating: 4.9
      }
    ]);

    console.log('✅ Dummy mentors added!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeder error:', err);
    process.exit(1);
  }
};

seedMentors();
