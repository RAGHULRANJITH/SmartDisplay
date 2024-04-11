loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Clear any previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';
    loginMessage.textContent = '';
  
    const username = usernameInput.value.trim(); // Trim leading/trailing whitespace
    const password = passwordInput.value;
  
    // Simulate credential validation (replace with actual authentication logic)
    if (username === 'admin' && password === 'secret') {
      // Successful login
      loginMessage.textContent = 'Login successful!';
      // Redirect to the desired page after successful login (replace with your URL)
      window.location.href = 'http://your_next_page_url'; // Example redirection
    } else {
      // Login failed
      loginMessage.textContent = 'Invalid username or password.';
      // Optionally highlight error fields for specific validation
      if (!username) {
        usernameError.textContent = 'Username is required.';
        const usernameGroup = usernameInput.parentElement;
        usernameGroup.classList.add('error'); // Add error class for styling
      }
      if (!password) {
        passwordError.textContent = 'Password is required.';
        const passwordGroup = passwordInput.parentElement;
        passwordGroup.classList.add('error');
      }
    }
  
    // Remove error classes after a period (optional for user experience)
    setTimeout(() => {
      const errorGroups = document.querySelectorAll('.form-group.error');
      errorGroups.forEach(group => group.classList.remove('error'));
    }, 3000); // Remove error styles after 3 seconds
  });
  

