const config = {
    clientId: "",
    clientSecret: "",
    token: "",

    guild: "921617122055049216",
    roles: [
        "921617122055049220"  // Townfolk 
    ],

    httpPort: 7790,

    redirectUri: "https://youripserver/discord",

    checkRole: true,
    
    /*
    Set to true if you use connectQueue and follow the following instructions :
    In connectqueue/shared/sh_queue.lua, on line 474, after deferrals.done(), add :
        TriggerEvent('discordwl:connect', src)
    */
    connectQueue: true,
};