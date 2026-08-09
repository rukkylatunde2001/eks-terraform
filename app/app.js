const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from EKS!</h1>
    <p>Deployed with Terraform, Docker, ECR, and GitHub Actions.</p>
    <p>Running on Kubernetes — Amazon EKS</p>
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});