// Задача 1

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; 
    }

    
    return arr1.every((value, index) => value === arr2[index]);
}

// Задача 2
  
function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);

    
    if (filteredUsers.length === 0) {
        return 0;
    }

    
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    
    
    return (totalAge / filteredUsers.length);
  
}