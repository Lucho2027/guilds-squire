import { Strategy } from "passport-bnet";
import passport from "passport";


export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    console.log("YEEEET",config)
    passport.use(
        new Strategy({
            clientID: config.BNET_CLIENT_ID,
            clientSecret: config.BNET_KEY ,
            callbackURL:"https://localhost:3000/oauth/bnet/callback",
            region: "us"
        }, function (accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any){
            return done(null, profile)
        })
    )


})