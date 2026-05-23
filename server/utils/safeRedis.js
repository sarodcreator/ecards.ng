import { redisClient, ensureRedis } from "./redis.client.js";

export async function safeRedis(fn, fallback = null) {
  try {
    await ensureRedis();
    if (!redisClient.isOpen) throw new Error("Redis unavailable");
    return await fn();
  } catch {
    return typeof fallback === "function" ? await fallback() : fallback;
  }
}
