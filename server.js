const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/64/64/1",
            "name": "홍길동",
            "birthday": "961222",
            "gender": "남자",
            "job": "대학생"
          },
          {
            "id": 2,
            "image": "https://placeimg.com/64/64/2",
            "name": "오창영",
            "birthday": "860522",
            "gender": "남자",
            "job": "개발자"
          },
          {
            "id": 3,
            "image": "https://placeimg.com/64/64/3",
            "name": "오주혁",
            "birthday": "191014",
            "gender": "남자",
            "job": "아기"
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));