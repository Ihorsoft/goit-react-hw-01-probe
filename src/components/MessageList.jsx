const MessageList = ({ messages }) => {
  // console.log(message.join());
  return (
    <div>
      {messages.map((item, index) => {
        // console.log("element array", item);

        return (
          <p key={item}>
            Message {index + 1} {item}
          </p>
        );
        // <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default MessageList;
