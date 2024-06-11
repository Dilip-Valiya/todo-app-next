export async function GET(request: Request): Promise<Response> {
  const body = { message: "Hello, World!" };
  const options: ResponseInit = {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return new Response(JSON.stringify(body), options);
}
