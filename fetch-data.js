

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const users = await response.json(); 
          dataContainer.innerHTML = '';
          userList = document.createElement('ul');
          users.forEach(user => {
             username = document.createElement('li').textContent;
             userList.appendChild(username);
              });
            dataContainer.append(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        console.error('Failed to load user data.', error);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    fetchUserData();    
});