File Metadata Microservice
A full stack JavaScript application that handles file uploads and returns file metadata.

Features
File Upload: Submit a form with a file upload field to upload a file.
File Metadata: Receive JSON response with file name, type, and size in bytes after uploading.
Technologies Used
Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
Multer: Middleware for handling file uploads.
Getting Started
To get a local copy up and running follow these simple steps.

Prerequisites
Node.js installed on your local machine.
Installation
Clone the repo
sh
Copy code
git clone https://github.com/sebahsr/file-metadata-microservice.git
Install NPM packages
sh
Copy code
npm install
Usage
Start the server
sh
Copy code
node server.js
Open your browser and navigate to http://localhost:3000.
Use the file upload form to submit a file.
View the JSON response with file metadata.
API Endpoint
POST /api/fileanalyse: Handle file uploads and return file metadata.
Example Response
json
Copy code
{
  "name": "example.jpg",
  "type": "image/jpeg",
  "size": 1024
}
Error Handling
If file upload fails, the server responds with a JSON error message.
Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.




Acknowledgements
Multer
Express.js