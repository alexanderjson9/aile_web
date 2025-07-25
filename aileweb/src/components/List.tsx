// Will be removed soon - Alexander

type Props = {
  names: string[];
};

const List = ({ names }: Props) => {
      console.log('Names received by List:', names);

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>  
  );
};

export default List;