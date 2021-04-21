const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();

const api_key = 'MAILCHIMP-API-KEY'
const list_id = 'LIST-ID';
const mailchimp_endpoint = "https://us7.api.mailchimp.com/3.0/lists/"+list_id;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', (req, res) => {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;

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
    var jsonData = JSON.stringify(data);

    const options = {
        method:"POST",
        auth: 'apikey:'+api_key
    }

    const request = https.request(mailchimp_endpoint,options, (response) => {
        if (response.statusCode == 200){
            res.sendFile(__dirname+'/success.html')
            response.on("data", (data) => {
                console.log(JSON.parse(data));
            })
        }
        else{
            res.sendFile(__dirname+'/failure.html')
        }
    })

    request.write(jsonData);
    request.end();
})

app.post('/failure', (req,res) => {
    res.redirect('/')
})
app.post('/success', (req,res) => {
    res.redirect('/')
})



app.listen(3000);