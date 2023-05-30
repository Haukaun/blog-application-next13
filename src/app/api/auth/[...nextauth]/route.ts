import NextAuth from "next-auth";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
};
export default NextAuth(authOptions);
