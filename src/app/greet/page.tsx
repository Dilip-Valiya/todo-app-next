type GreetMessage = {
  message: string;
};

export async function getMessage() {
  const res: Response = await fetch("http://localhost:3000/api/greet", {
    cache: "no-store",
  });
  const greetMessage: GreetMessage = await res.json();
  return greetMessage.message;
}

export default async function Greet() {
  const message: string = await getMessage();
  return <p>{message}</p>;
}
