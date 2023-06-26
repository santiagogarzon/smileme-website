const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.smilemealigners.com/"
    : "http://localhost:3001";

export default baseUrl;
