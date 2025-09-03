// query : for reading data from DB
//  mutation : for manipulation data in DB - CRUD

import { mutation, query } from "./_generated/server"


export const getMany = query({
    args: {},
    handler: async (ctx: any) => {
        const users = await ctx.db.query("users").collect();
        return users;
    }
})


export const add_handler = mutation({
    args: {},
    handler: async (ctx: any) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) throw new Error("Not authenticated");
        const userId = await ctx.db.insert("users", {
            name: "Ubaid"
        })
        return userId;
    }
})