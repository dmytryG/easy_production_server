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
  "data": {
    "user": {
      "id": "64502c5a045a8ce5719d10c0",
      "email": "dima6@test.net",
      "fullName": "Dima6"
    },
    "message": "Login successfull",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTAyYzVhMDQ1YThjZTU3MTlkMTBjMCIsImlhdCI6MTY4Mjk3NTg0MSwiZXhwIjoxNjgzMDYyMjQxfQ.TZNVtUZ7NtlLSxB-SS_bhCqM1pojKUbHeTd6QsDkuWE"
  },
  "is_err": true
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
---
Post /item (adds items to the list)

request body

```json
{
  "itemName": "String",
  "type": checkbox/value,
  "value": Any,
  "list_id": Object_id
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
    "_id": "645031154daf3a4c4d876298",
    "listName": "Тяги бархатные",
    "creator": "64502c5a045a8ce5719d10c0",
    "items": [
      {
        "itemName": "Кэфтэмэ?",
        "type": "value",
        "value": "100",
        "changed": "2023-05-01T21:50:55.335Z",
        "changed_by": "64502c5a045a8ce5719d10c0",
        "_id": "6450343f407f8c97435e95d0"
      }
    ],
    "created": "2023-05-01T21:37:25.009Z",
    "__v": 1
  },
  "is_err": false,
  "message": "Created successfully"
}
```
---
GET /list/{id} (returns a list)

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
    "_id": "645031154daf3a4c4d876298",
    "listName": "Тяги бархатные",
    "creator": "64502c5a045a8ce5719d10c0",
    "items": [
      {
        "itemName": "Кэфтэмэ?",
        "type": "value",
        "value": "100",
        "changed": "2023-05-01T21:50:55.335Z",
        "changed_by": "64502c5a045a8ce5719d10c0",
        "_id": "6450343f407f8c97435e95d0"
      }
    ],
    "created": "2023-05-01T21:37:25.009Z",
    "__v": 1
  },
  "is_err": false,
  "message": null
}
```
---
DELETE /list/{id} (deletes a list)

request headers

```json
{
"Authorization": "JWT Token"
}
```
response
```json
{
  "data": "Ok",
  "is_err": false,
  "message": null
}
```