# UrbanSherpa Prototype

## Development Setup
```
cd prototype
npm install
```

## Compile
```
NODE_ENV=development node_modules/.bin/webpack -p
```

## Run Server
```
node_modules/.bin/babel-node --presets src/server.js
```
## REST API Client
Use the `json-server` as fake REST API client. See https://github.com/typicode/json-server for documentation.

### Run Server
```
cd json_server
json-server --watch db.json --routes routes.json --port 1234
```

### API Endpoints
Request form structure JSON data:
```
http://localhost:1234/user_account
```
Simulate API response when the form is submitted:
```
http://localhost:1234/user_account_saved
```