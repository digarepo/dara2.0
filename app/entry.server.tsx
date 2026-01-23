import * as React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Router, createStaticHandler } from "react-router";
import type { EntryContext } from "react-router";

// Routes import
import { routes } from "./routes"; // your route definitions

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  const staticHandler = createStaticHandler(routes);

  const context = await staticHandler.query(request.url);

  return new Promise<Response>((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
      <Router
        location={request.url}
        context={context}
        routes={routes}
      />,
      {
        onShellReady() {
          const body = createReadableStreamFromReadable(pipe());
          responseHeaders.set("Content-Type", "text/html");
          resolve(new Response(body, { status: responseStatusCode, headers: responseHeaders }));
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          console.error(err);
        },
      }
    );
  });
}
