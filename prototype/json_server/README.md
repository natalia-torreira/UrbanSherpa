# Rest API Client
Use the `json-server` as fake REST API client. See https://github.com/typicode/json-server for documentation.

## Run Server
```
json-server --watch db.json --routes routes.json --port 1234
```

## API Endpoints
Request form structure JSON data:
```
http://localhost:1234/user_account
```
Simulate API response when the form is submitted:
```
http://localhost:1234/user_account_saved
```
