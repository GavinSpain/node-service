# Node Heartbeat Service

Simple service providing heartbeat status monitoring.

## Project Structure

```
node-service
├── src
│   ├── app.js          # Entry point of the application
│   └── routes
│       └── index.js    # Route definitions
├── package.json        # npm configuration file
├── .env                # Environment variables
└── README.md           # Project documentation
```

## Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

## Installation

1. Navigate to the project directory:

   ```bash
   cd node-service
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=3443
   SSL_KEY_PATH=/path/to/your/ssl/key.pem
   SSL_CERT_PATH=/path/to/your/ssl/cert.pem
   ```

   Replace `/path/to/your/ssl/key.pem` and `/path/to/your/ssl/cert.pem` with the actual paths to your SSL certificate files.

## Running the Service

To start the service, run the following command:

```
node src/app.js
```

The service will be available at `https://your-ec2-instance-ip`.

## License

This project is licensed under the MIT License.