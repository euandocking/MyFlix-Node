const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/netflix-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const videoSchema = new mongoose.Schema({
    name: String,
    description: String,
    url: String,
});

const Video = mongoose.model('Video', videoSchema);

app.get('/videos', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
