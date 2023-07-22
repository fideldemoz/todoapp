#adding elements
const userArray = ["Obaseki",25]
localStorage.setItem('user', JSON.stringify(userArray));

#reading
JSON.parse(localStorage.getItem('user'));