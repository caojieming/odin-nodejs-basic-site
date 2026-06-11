// creates the server
const http = require("node:http");
// reads files from disk
const fs = require("node:fs");
// builds filesystem-safe paths.
const path = require("node:path");

// set up the server
const server = http.createServer((req, res) => {
	let filePath = "";

	// possible URLS -> file paths
	switch (req.url) {
		case "/":
			filePath = "index.html";
			break;
		case "/about":
			filePath = "about.html";
			break;
		case "/contact-me":
			filePath = "contact-me.html";
			break;
		default:
			filePath = "404.html";
			break;
	}

	// creates the full filepath
	const fullPath = path.join(__dirname, filePath);

	// reads the full filepath + handles errors
	fs.readFile(fullPath, "utf8", (err, data) => {
		if (err) {
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end("500 Internal Server Error");
			return;
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
});

// actually runs the server
const PORT = 8080;
	server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
