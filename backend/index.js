const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Dummy intern data
const internData = {
  name: "Jane Doe",
  referralCode: "janedoe2025",
  totalDonations: 1234,
  rewards: [
    "Bronze Badge",
    "Silver Badge",
    "Gold Badge"
  ]
};

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
