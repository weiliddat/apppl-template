import { FromSchema } from "json-schema-to-ts";
import type {
  EventContext,
  InvokeOpts,
  PayloadContext,
  RenderContext,
} from "../types";

/**
 * Exporting configSchema will let you configure form fields that your app
 * users will fill out when they install your app.
 */
export const configSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    apiKey: {
      type: "string",
      description: "Your API key",
    },
  },
  required: ["apiKey"],
} as const;

type Config = FromSchema<typeof configSchema>;

/**
 * This handles incoming payload rewrites, e.g. if your order system and data
 * needs special preprocessing.
 */
export async function handlePayload(
  context: PayloadContext,
  opts: InvokeOpts<Config>
) {
  return context.payload;
}

/**
 * This handles outgoing events, e.g. if you need to send data to an external system.
 * This sends raw events. If you need pretty formatting and templating, you should
 * be using the Journey System instead.
 */
export async function handleEvent(
  context: EventContext,
  opts: InvokeOpts<Config>
) {
  return await fetch("https://event-bus.example.com/event", {
    method: "POST",
    body: JSON.stringify(context),
  });
}

/**
 * This handles rendering content for a particular placeholder tag, e.g. inserting
 * HTML from a CMS / Product Recommendation Engine / Review Platform / Survey Platform
 * etc.
 */
export async function renderContent(
  context: RenderContext,
  opts: InvokeOpts<Config>
) {
  return "<h1>Hello World</h1>";
}
