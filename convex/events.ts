import { query } from "./_generated/server";

export const getAllEvents = query({
  handler: async (ctx) => {
    return await ctx.db.query("events").order("desc").collect();
  },
});

import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createEvent = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    category: v.string(),
    tags: v.array(v.string()),

    startDate: v.string(),
    endDate: v.string(),
    startTime: v.string(),
    endTime: v.string(),
    timezone: v.string(),

    isRecurring: v.boolean(),
    recurrence: v.optional(
      v.object({
        frequency: v.string(),
        interval: v.number(),
        endDate: v.string(),
      }),
    ),

    locationType: v.string(),
    physicalLocation: v.optional(v.string()),
    onlineLink: v.optional(v.string()),

    maxAttendees: v.optional(v.number()),
    registrationRequired: v.boolean(),
    registrationDeadline: v.optional(v.string()),

    organizer: v.string(),
    contactEmail: v.string(),
    contactPhone: v.optional(v.string()),
    website: v.optional(v.string()),

    visibility: v.string(),
    allowRegistration: v.boolean(),
    allowWaitlist: v.boolean(),

    imageStorageId: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("events", {
      ...args,
      attendees: 0, // initialize
      createdAt: Date.now(),
    });
  },
});
