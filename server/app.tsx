import type { EntryContext } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";
import { ServerRouter } from "react-router";
import { PassThrough } from "node:stream";

export default function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  context: EntryContext
) {
  return new Promise<Response>((resolve, reject) => {
    const shell = new PassThrough(); // Bridge stream (writable + readable)

    const { pipe } = renderToPipeableStream(
      <ServerRouter context={context} url={request.url} />,
      {
        onShellReady() {
          headers.set("Content-Type", "text/html");
          pipe(shell); // Pipe to the writable bridge
          resolve(
            new Response(
              createReadableStreamFromReadable(shell), // Convert readable side to web stream
              { status, headers }
            )
          );
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });
}