var getUser = (id, callback) =>{
  var user = {
    id: id,
    name: 'Raj'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(25, (userObj) => {
  console.log(userObj);
});
