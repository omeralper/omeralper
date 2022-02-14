import Box from "./Box";

function List(props) {
  const { list } = props;
  return (
    <div>
      {Object.keys(list).map((healthProvider) => (
        <Box
          key={healthProvider}
          list={list[healthProvider]}
          name={healthProvider}
        />
      ))}
    </div>
  );
}

export default List;
