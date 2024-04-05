import type { ServerService } from "workers-service-bindings-rpc-server";

interface Env {
  SERVER_SERVICE: Service<ServerService>;
}

export default {
  async fetch(request, env) {
    const sum = await env.SERVER_SERVICE.sum(1, 2);

    return new Response(`1 + 2 = ${sum}\n`, {
      status: 200,
      headers: { "content-type": "text/plain" },
    });
  },
} as ExportedHandler<Env>;
