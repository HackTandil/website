export default async function middleware(request) {
  const response = await fetch(request);
  const newResponse = new Response(response.body, response);

  newResponse.headers.set("Referrer-Policy", "origin-when-cross-origin");
  newResponse.headers.set("X-Frame-Options", "DENY");
  newResponse.headers.set("X-Content-Type-Options", "nosniff");
  newResponse.headers.set("X-DNS-Prefetch-Control", "on");
  newResponse.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  return newResponse;
}
