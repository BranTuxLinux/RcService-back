const allowedOrigins = [
  "https://rcservice-front.netlify.app",
  "http://localhost:5173",
  "http://localhost:19006",
];
const CORSConfiguration = {
  origin: allowedOrigins,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: "*",
};

module.exports = { CORSConfiguration };
