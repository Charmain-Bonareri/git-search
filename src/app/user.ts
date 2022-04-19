export class User {
  
  constructor(
    public Html_url:string,
    public login:string,
    public location:string,
    public followers:number,
    public following:number,
    public avatar_url:string,
    public bio:string,
    public created:Date){}

}
