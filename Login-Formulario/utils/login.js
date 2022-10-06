const save = async (user) => {
  const {username, password} = user   
  try { 
    if (username) {
      console.log("login failed");
      return false;      
    }    
    console.log("login success!");
    return username;    
  } catch (error) {
    console.log(error);
  }

}

module.exports = { save };