import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createRegistration = mutation({
  args: {
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    college: v.string(),
    yearOfStudy: v.string(),
    comments: v.optional(v.string()),
    eventId: v.id("events"),
  },

  handler: async (ctx, args) => {
    // Optional: Check if event exists
    const event = await ctx.db.get(args.eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    // Optional: Prevent duplicate registration by email
    const existing = await ctx.db
      .query("registrations")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .filter((q) => q.eq(q.field("eventId"), args.eventId))
      .first();

    if (existing) {
      throw new Error("You have already registered for this event.");
    }

    // Insert registration
    return await ctx.db.insert("registrations", {
      fullName: args.fullName,
      email: args.email,
      phone: args.phone,
      college: args.college,
      yearOfStudy: args.yearOfStudy,
      comments: args.comments,
      eventId: args.eventId,
      createdAt: Date.now(),
    });
  },
});
