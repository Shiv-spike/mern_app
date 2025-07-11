const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // ✅ Important

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.post('/api/message', (req, res) => {
  const { name } = req.body; // Will fail if body is undefined
  res.json({ message: `Hello, ${name}` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

