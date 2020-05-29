
const fetch = require('node-fetch');
//const fs = require('fs');

const URI = `https://vx-e-additives.p.rapidapi.com/additives&key=${process.env.APPID}`;


const wellthyFunc = async () => {
    let data = await fetch(URI); //.catch((err) => {
        //console.log(err);
    
    let jsonData = await data.json();
    //return jsonData; //Need to return the data to have it appear on the screen!!!

    console.log(await jsonData);
}

wellthyFunc()
module.exports = {
    wellthyFunc
}