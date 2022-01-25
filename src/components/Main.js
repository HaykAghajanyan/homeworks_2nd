function Main({setColor, setSelectedItem}) {
  return (
    <div className="column right">
      <select name='color' className="select" onChange={(e) => setColor(e.target.value)}>
        <option value="">--Please choose color--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>
      <select name='selectedItem' className="select" onChange={(e) => setSelectedItem(e.target.value)}>
        <option value="">--Please choose an option--</option>
        <option value="name">Name</option>
        <option value="text">Text</option>
      </select>
      <button>Click me</button>
    </div>
  );
}

export default Main;
