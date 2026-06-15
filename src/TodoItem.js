function TodoItem(props) {
  return (
    <li>
      <p>
        <span>✅</span>
        {props.text}
        <span>❌</span>
      </p>
    </li>
  );
}

export { TodoItem };