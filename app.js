const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken')
const app = express();
const PORT = process.env.PORT || 3000;

//Generate the JWT
app.post('/user/generateToken', (req, res) => {

    const secret_key = 'extremelysecret'

    const data = {
        time: new Date(),
        userId: 12
    };

    const token = jwt.sign(data, secret_key);

    res.send(token);
});

//validate the JWT
app.get('user/validateToken', (res, req) => {

    //passed in the header of the request

    const secret_key = 'extremelysecret';

    try{
        const userToken = req.headersSent.authorization;

        const verified = jwt.verify(userToken, secret_key);

        if(verified){
            console.log(`JSON web token is good to go! :) ${verified}`)
        }else {
            console.log(`HOLD UP, WAIT A MINUTE, SOMETHING AIN'T RIGHT. ${verified}`)
        }


    }catch(error){



    }


});



app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});