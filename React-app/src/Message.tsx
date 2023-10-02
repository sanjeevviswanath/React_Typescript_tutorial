interface messageProps {
  msg: string;
}

function Message({ msg }: messageProps) {
  //JSX: Javascript XML
  //const msg = "Sanjeev";
  if (msg) return <h1>Hello {msg}!</h1>;

  return <h1>Hello World!</h1>;
}

export default Message;
