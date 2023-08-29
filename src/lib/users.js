export async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (err) {
    console.error(err);
    return "Oops! Something went wrong!"
  }
}
