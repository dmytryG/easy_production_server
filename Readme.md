## API:

----
Post /register

request body

```json
{
  "fullName": "String",
  "email": "String",
  "password": "String"
}
```
response
```json
{
    "data": "Successfully created",
    "is_err": false
}
```
---
Post /login

request body

```json
{
  "email": "String",
  "password": "String"
}
```
response
```json
{
    "data": "Successfully created",
    "is_err": false
}
```
---
In order to request a protected handler, the user have to be authorized, so in header there should be user's token
headers body

```json
{
  "Authorization": "JWT dnawiudhiuwahdiuawhdaw",
}
```
response
```json
{
  "data": {},
  "is_err": true,
  "message": "Invalid credentials"
}
```
----
Post /list (creates new empty list)

request body

```json
{
  "listName": "String"
}
```
request headers

```json
{
"Authorization": "JWT Token"
}
```
response
```json
{
  "data": {
    "listName": "Тяги бархатные",
    "creator": "64502c5a045a8ce5719d10c0",
    "_id": "645031154daf3a4c4d876298",
    "items": [],
    "created": "2023-05-01T21:37:25.009Z",
    "__v": 0
  },
  "is_err": false,
  "message": "Created successfully"
}
```