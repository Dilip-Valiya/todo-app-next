import styled from "styled-components";

type GreetMessage = {
  message: string;
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
`;

export async function getMessage(): Promise<string> {
  const res: Response = await fetch("http://localhost:3000/api/greet", {
    cache: "no-store",
  });
  const greetMessage: GreetMessage = await res.json();
  return greetMessage.message;
}

export default async function Greet(): Promise<JSX.Element> {
  const message: string = await getMessage();
  return (
    <Wrapper>
      <p>{message}</p>
    </Wrapper>
  );
}
