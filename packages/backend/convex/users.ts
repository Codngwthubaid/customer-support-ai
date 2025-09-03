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
        const userId = await ctx.db.insert("users", {
            name: "Ubaid"
        })
        return userId;
    }
})