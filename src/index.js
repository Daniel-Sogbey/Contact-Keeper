const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.status(200).json({ msg: "Hello World" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on port ${port}`));
