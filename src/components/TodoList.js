import TodoListItem from "./TodoListItem";

const TodList = () => {
    const items = [
      { text: 'Learn JS', important: true},
      { text: 'Drink Coffee', important: false},
      { text: 'Learn React', important: false},
      { text: 'Learn TypeScript', important: true},
    ];

    const data = items.map(({ text, important}) => {
      return (<TodoListItem text={text} important={important} />)
    });

    return (
      <ul>{data}</ul>
    )
  }

export default TodList;