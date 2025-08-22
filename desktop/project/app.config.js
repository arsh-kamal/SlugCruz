export default {
  expo: {
    name: "SlugCruz",
    slug: "slugcruz",
    web: { output: "static" }, // ensures a static web export (dist/)
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
    }
  }
};
