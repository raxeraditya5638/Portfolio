import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectdb } from "@/lib/mongodb";
import { userModel}  from "@/models/user";







export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers


  providers:[
    CredentialsProvider({
        type:'credentials',
        id:'credentials',
        name: 'credentials',
        credentials:{
          email: {label: "email", type:"text"},
          password: {label: "password", type:"password"},
        },
        async authorize(credentials:any){
          await connectdb();
            // const {email, password} = credentials as {email:string; password:string;};
            // if(email == 'aditya@gmail.com' || password !== '123'){
            //     return null;
            // }
            // const user = {id:"1"};

          try {
            const user = await userModel.findOne({email:credentials.email })
            if(user){
              console.log("user find", user)
            }
            return user;
          } catch (error) {
            throw new Error("error");
          }
        },
    }),
  ],
  session:{
    strategy: "jwt",
  },
  secret:process.env.SECRET,

  pages:{
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};