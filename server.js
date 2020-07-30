const express = require('express');
const app = express();

app.MockUserData=[
  {name:'Arbaaz', lastName:'khan'},
  {name:'John', lastName:'whick'}
]

app.get('/users', function(req, res){
  res.json({
    success: true,
    message: 'sucessfully got users. Nice!',
    users: MockUserData
  })
})

app.listen(8000, function(){
  console.log("server is running on port:8000");
});
