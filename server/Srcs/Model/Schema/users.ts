import { Schema, model } from 'mongoose'

const User = new Schema({
    "id": {
      "type": "Number"
    },
    "email": {
      "type": "String"
    },
    "login": {
      "type": "String"
    },
    "first_name": {
      "type": "String"
    },
    "last_name": {
      "type": "String"
    },
    "usual_first_name": {
      "type": "Mixed"
    },
    "url": {
      "type": "String"
    },
    "phone": {
      "type": "String"
    },
    "displayname": {
      "type": "String"
    },
    "usual_full_name": {
      "type": "String"
    },
    "image_url": {
      "type": "String"
    },
    "staff?": {
      "type": "Boolean"
    },
    "correction_point": {
      "type": "Number"
    },
    "pool_month": {
      "type": "String"
    },
    "pool_year": {
      "type": "Date"
    },
    "location": {
      "type": "Mixed"
    },
    "wallet": {
      "type": "Number"
    },
    "anonymize_date": {
      "type": "Date"
    },
    "groups": {
      "type": "Array"
    },
    "cursus_users": {
      "type": [
        "Mixed"
      ]
    },
    "projects_users": {
      "type": [
        "Mixed"
      ]
    },
    "languages_users": {
      "type": [
        "Mixed"
      ]
    },
    "achievements": {
      "type": [
        "Mixed"
      ]
    },
    "titles": {
      "type": "Array"
    },
    "titles_users": {
      "type": "Array"
    },
    "partnerships": {
      "type": "Array"
    },
    "patroned": {
      "type": "Array"
    },
    "patroning": {
      "type": "Array"
    },
    "expertises_users": {
      "type": "Array"
    },
    "roles": {
      "type": "Array"
    },
    "campus": {
      "type": [
        "Mixed"
      ]
    },
    "campus_users": {
      "type": [
        "Mixed"
      ]
    }
})

export default model('users', User, 'users')