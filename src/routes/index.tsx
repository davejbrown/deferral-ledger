import { createFileRoute } from "@tanstack/react-router";
import ledgerHtml from "../deferral-ledger.html?raw";

// Serves the self-contained Deferral Ledger page byte-for-byte at "/" (no React bundle).
export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(ledgerHtml, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
