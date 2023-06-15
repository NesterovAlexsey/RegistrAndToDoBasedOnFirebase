interface Name {
    firstname: string,
    lastname: string
  }
  
  interface User {
    id: number,
    email: string,
    username: string,
    password: string,
    name: Name,
  }
  
  export default User;
  