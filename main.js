console.log("Loaded!");
Parse.Cloud.define("hello", function(req, res){
  console.log("In Hello!");
  var q = new Parse.Query(Parse.User);
  q.find().then(function(result){
    res.success(result);
   }, function(err){
      res.error(err);
   })
});