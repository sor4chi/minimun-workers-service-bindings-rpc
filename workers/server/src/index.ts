import { WorkerEntrypoint } from "cloudflare:workers";

export class ServerService extends WorkerEntrypoint {
  sum(a: number, b: number) {
    return a + b;
  }
}

export default {};
