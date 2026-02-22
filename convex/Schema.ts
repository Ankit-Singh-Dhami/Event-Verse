import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  events: defineTable({
    // Step 1: Basic Information
    title: v.string(),
    description: v.string(),
    category: v.string(),
    tags: v.array(v.string()),

    // Step 2: Date & Time
    startDate: v.string(),
    endDate: v.string(),
    startTime: v.string(),
    endTime: v.string(),
    timezone: v.string(),

    isRecurring: v.boolean(),
    recurrence: v.optional(
      v.object({
        frequency: v.string(), // daily | weekly | monthly
        interval: v.number(),
        endDate: v.string(),
      }),
    ),

    // Step 3: Location & Details
    locationType: v.string(), // physical | online
    physicalLocation: v.optional(v.string()),
    onlineLink: v.optional(v.string()),

    attendees: v.optional(v.number()),
    maxAttendees: v.optional(v.number()),
    registrationRequired: v.boolean(),
    registrationDeadline: v.optional(v.string()),

    // Step 4: Additional Details
    organizer: v.string(),
    contactEmail: v.string(),
    contactPhone: v.optional(v.string()),
    website: v.optional(v.string()),

    visibility: v.string(), // public | private
    allowRegistration: v.boolean(),
    allowWaitlist: v.boolean(),

    // Image
    imageStorageId: v.optional(v.string()),

    // Metadata
    createdAt: v.number(),
  })
    .index("by_startDate", ["startDate"])
    .index("by_category", ["category"]),

  registrations: defineTable({
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    college: v.string(),
    yearOfStudy: v.string(),
    comments: v.optional(v.string()),

    // If linked to an event (recommended)
    eventId: v.id("events"),

    // Metadata
    createdAt: v.number(),
  })
    .index("by_event", ["eventId"])
    .index("by_email", ["email"]),

  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    role: v.union(v.literal("admin"), v.literal("user")),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
