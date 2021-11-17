const config = {
    clientId: "",
    clientSecret: "",
    token: "",

    guild: "",
    roles: [
        "", // Staff 
        ""  // Other 
    ],

    httpPort: 7790,

    redirectUri: "https://youripserver/discord",

    checkRole: false,
    
    /*
    Set to true if you use connectQueue and follow the following instructions :
    In connectqueue/shared/sh_queue.lua, on line 474, after deferrals.done(), add :
        TriggerEvent('discordwl:connect', src)
    */
    connectQueue: false,
};