/**
 * YOU SHOULD NOT EDIT THIS FILE
 *
 * This file is the defacto entry point for the runtime.
 *
 * YOU WANT TO EDIT ./src/main.ts
 */

/**
 * @import {RenderContext,EventContext,PayloadContext} from './types.d.ts'
 * @import {Context as LambdaContext} from 'aws-lambda'
 *
 * @param {object} event
 * @param {string} event.command
 * @param {object} event.args
 * @param {RenderContext|EventContext|PayloadContext} event.payload
 * @param {LambdaContext} context
 * @returns {Promise<{body: *, statusCode: number}>}
 */
export const handler = async (event, context) => {
  const mode =
    context.functionName.endsWith("preview") ||
    context.functionName.endsWith("test")
      ? "test"
      : "live";
  const type = process.env.FUNCTION_TYPE || "outbound";
  const { command, args, payload } = event;
  const config = process.env["APP_CONFIG"]
    ? JSON.parse(process.env["APP_CONFIG"])
    : null;
  if (type === "outbound") {
    const { renderContent } = await import("./src/main.js");
    return {
      statusCode: 200,
      body: await renderContent(payload, {
        command: command || "invoke",
        args: args || {},
        mode: mode,
        config: config,
      }),
    };
  } else if (type === "event_processor") {
    const { handleEvent } = await import("./src/main.js");
    await handleEvent(payload, {
      command: command || "invoke",
      args: args || {},
      mode: mode,
      config: config,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "ok",
      }),
    };
  } else if (type === "event_ingress") {
    const { handlePayload } = await import("./src/main.js");
    return {
      statusCode: 200,
      body: await handlePayload(payload, {
        command: command || "invoke",
        args: args || {},
        mode: mode,
        config: config,
      }),
    };
  } else {
    return {
      statusCode: 500,
      body: `Unknown function type ${type}`,
    };
  }
};
