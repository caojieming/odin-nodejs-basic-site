// load .env
process.loadEnvFile();

// import express
const express = require("express");
// builds filesystem-safe paths.
const path = require("node:path");

// our server
const app = express();
// set port number
const PORT = process.env.PORT || 3000;


// route received, what the server is GETting -> what the server responds with
app.get("/", (req, res) => {
  	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  	res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  	res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.get("/{*splat}", (req, res) => {
	res.sendFile(path.join(__dirname, "404.html"));
});


// tell our server to listen for incoming requests on whatever port we specify, via localhost
app.listen(PORT, (error) => {
	// This is important!
	// Without this, any startup errors will silently fail
	// instead of giving you a helpful error message.
	if (error) {
		throw error;
	}
  	console.log(`listening on port ${PORT}`);
});
