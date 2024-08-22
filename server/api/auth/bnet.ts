import { Strategy } from "passport-bnet";
import passport from "passport";


export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    passport.use(
        new Strategy({
            clientID: config.bnetClientId,
            clientSecret: config.bnetKey,
            callbackURL:"https://localhost:3000/oauth/battlenet/callback",
            region: "us"
        }, function (accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any){
            return done(null, profile)
        })
    )
   const mom =  passport.authenticate('bnet')
    console.log('asdadadsad', mom)
})
