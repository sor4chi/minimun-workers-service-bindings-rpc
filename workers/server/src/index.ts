import { WorkerEntrypoint } from "cloudflare:workers";

export class ServerService extends WorkerEntrypoint {
  sum(a: number, b: number) {
    return a + b;
  }
}

export default {
  // An error occurs when deploying this worker without register event handlers as default export.
  async fetch() {
    return new Response("Healthy!");
  },
};
