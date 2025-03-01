import { app, json } from "../api";

app.category("vanilla", () => {
  app.post("/mediatypes/analyzeNoAccept", "MediaTypesAnalyzeBodyNoAcceptHeader", (req) => {
    const contentType = req.headers["content-type"];
    const body = req.body;
    if (contentType === "application/json" && "source" in body) {
      return {
        status: 202,
      };
    } else if (contentType === "application/pdf" && body === "PDF") {
      return {
        status: 202,
      };
    } else {
      return {
        status: 400,
      };
    }
  });
});
