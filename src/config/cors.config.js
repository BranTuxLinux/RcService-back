const allowedOrigins = [
  "http://localhost:5173",
  "https://rcservice-front.netlify.app/",
  "http://localhost:19006",
];
const CORSConfiguration = {
  origin: allowedOrigins,
  credentials: true,
  methods: "GET,PUT,POST,DELETE",
};

module.exports = { CORSConfiguration };
