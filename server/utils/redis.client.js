import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
  socket: {
    reconnectStrategy: retries => Math.min(retries * 200, 3000)
  }
});

redisClient.on("error", err => {
  console.warn("⚠️ Redis error:", err.message);
});

export async function ensureRedis() {
  if (!redisClient.isOpen) {
    try {
      await redisClient.connect();
    } catch {
      // Silent fail → MongoDB fallback
    }
  }
}
