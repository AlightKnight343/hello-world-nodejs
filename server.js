const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.get('/', (req, res) => {
    res.send("Hello World 📬 /")
})

app.post('/', (req, res)=>{
    res.send("/🍪")
})

app.get('/cookie', (req, res) => {
    res.cookie(`almost there, pizza*64`,`d2hhdCBhIHRpbWUgd2FzdGU=`);
    res.send("very close, dm me what you find in the end.");
});

const PORT = 3001 || process.env.PORT;
app.listen(PORT, ()=> console.log("listening on port " + PORT))

