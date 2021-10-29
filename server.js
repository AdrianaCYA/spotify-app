const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

//middleware
// le indicamos la carpeta donde queremos que busque le inicio
app.use('', express.static(__dirname + '/dist/spotify-app'));

//endpoints
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/spotify-app/index.html')
});

app.listen(port, () => {
 console.log('App is running in port ', port);
});