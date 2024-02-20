import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { Account, User as AuthUser } from "next-auth"
import  CredentialsProvider from "next-auth/providers/credentials"

import { userModel, userModel } from "@/models/user"
import { connectdb } from "@/lib/mongodb"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials:{
        email:{label:"email", type: "text"},
        password:{label:"password", type: "password"},
      },
      async authorize(credentials: any){
        await connectdb();
        try {
          const user = await userModel.findOne({
            email:credentials.email
          })
          if(user){
            const isPasswordCorrect = await credentials.password
          }
        } catch (error) {
          throw now Error(error);
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID !,
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // ...add more providers here
  ],
}