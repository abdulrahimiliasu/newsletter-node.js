# newsletter-node.js

A newsletter app developed with node.js using express and mailchimp web API.

# Usage

```javascript
// YOUR DATA GOES HERE
const api_key = 'MAILCHIMP-API-KEY'
const list_id = 'LIST-ID';

//MAILCHIMP ENDPOINT
const mailchimp_endpoint = "https://us7.api.mailchimp.com/3.0/lists/"+list_id;

```

you can customize mailchimp data,

```javascript
   var data = {
    members:
    [{
        "email_address": email,
        "status": "subscribed",
        "merge_fields": 
        {
          "FNAME": fname,
          "LNAME": lname
        }}
    ]
    };
 ```
 ------
 [Mailchimp API Documentation](https://mailchimp.com/developer/)
