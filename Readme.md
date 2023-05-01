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