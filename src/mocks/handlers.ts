import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.get("/test", async () => {
    await delay();
    return HttpResponse.json({ data: "test" });
  }),
];
