/*vIt accepts 2 arguments: password and username 

Password must: 

- be atleast 8 characters 

- cannot contain spaces 

- cannot contain the username 

If all requirements are met, return true, 

otherwise return false 

 */

function ValidPassword(password, username){
    
    if(password.length  < 8 ){
        return false;

    } 
     if(username.includes(" "))
     {
        return false;

     }
        
    
    else{
        return true
    }
    
}

console.log(ValidPassword("securePass123", "user")); 
console.log(ValidPassword("short", "user")); 
console.log(ValidPassword("password 123", "use r")); 
console.log(ValidPassword("user12345", "user")); 


