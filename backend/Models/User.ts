class User {
  public userID: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public role: string = 'user';

  constructor(
    userID: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
  ) {
    this.userID = userID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

export default User;
