const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const API_PATH = "api";

const JSON_CONTENT_HEADER = { "Content-Type": "application/json" };

// Base API service class
class ApiClient {
  constructor(baseURL) {
    // Use provided baseURL or default to environment variable (Vite syntax)
    this.baseURL = BASE_URL;
  }

  buildUrl(path) {
    // Ensure no double slash, except after protocol
    return `${this.baseURL.replace(/\/+$/, "")}/${API_PATH}/${path.replace(
      /^\/+/,
      ""
    )}`;
  }

  async get(path) {
    console.log("Requesting " + this.buildUrl(path));
    const response = await fetch(this.buildUrl(path), {
      method: "GET",
      headers: JSON_CONTENT_HEADER,
    });

    if (!response.ok) {
      throw new Error(`GET ${path} failed: ${response.status}`);
    } else {
      return response.json();
    }
  }

  async health() {
    return await this.get(API_PATH + "/health");
  }
}

export default ApiClient;
