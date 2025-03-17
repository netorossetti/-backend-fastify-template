// fastify-jwt.d.ts
import "@fastify/jwt";

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      id: string;
      name: string;
      email: string;
      role: "user" | "admin" | "superAdmin";
    };
  }
}
