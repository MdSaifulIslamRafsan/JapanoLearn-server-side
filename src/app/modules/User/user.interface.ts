export interface TUser{
    name : string,
    email : string,
    photo : string,
    password : string,
    role : "admin" | "user"
}