const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/mydb';

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const MessageSchema = new mongoose.Schema({
  text: String
});

const Message = mongoose.model('Message', MessageSchema);

app.get('/', (req, res) => {
  res.send('Hello from Docker + Node + Mongo 🚀');
});

app.post('/messages', async (req, res) => {
  const message = new Message({ text: req.body.text });
  await message.save();
  res.json(message);
});

app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});