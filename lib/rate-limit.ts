import { NextRequest } from "next/server";

interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  uniqueTokenPerInterval: number; // Max requests per window
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private cache: Map<string, RateLimitEntry>;
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.cache = new Map();
    this.config = config;
  }

  check(identifier: string): { success: boolean; remaining: number; reset: number } {
    const now = Date.now();
    const entry = this.cache.get(identifier);

    // Clean up expired entries periodically
    if (this.cache.size > 1000) {
      this.cleanup(now);
    }

    if (!entry || now > entry.resetTime) {
      // First request or window expired
      const resetTime = now + this.config.interval;
      this.cache.set(identifier, { count: 1, resetTime });
      return {
        success: true,
        remaining: this.config.uniqueTokenPerInterval - 1,
        reset: resetTime,
      };
    }

    if (entry.count >= this.config.uniqueTokenPerInterval) {
      // Rate limit exceeded
      return {
        success: false,
        remaining: 0,
        reset: entry.resetTime,
      };
    }

    // Increment count
    entry.count += 1;
    this.cache.set(identifier, entry);

    return {
      success: true,
      remaining: this.config.uniqueTokenPerInterval - entry.count,
      reset: entry.resetTime,
    };
  }

  private cleanup(now: number) {
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.resetTime) {
        this.cache.delete(key);
      }
    }
  }
}

// Contact form rate limiter: 3 requests per 15 minutes per IP
export const contactFormLimiter = new RateLimiter({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 3,
});

// Get client IP from request
export function getClientIp(request: NextRequest): string {
  // Try various headers for IP (in order of preference)
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  // Fallback to a generic identifier (not ideal for production)
  return "unknown";
}
