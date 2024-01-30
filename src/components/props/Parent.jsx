import Child from "./Child";

const Parent = () => {
  const json_data = [
    {
      name: "Shashank",
      age: 28,
      designation: "SDE",
    },
    { name: "Varun", age: 21, designation: "S.SDE" },
  ];

  return (
    <>
      <Child msg={json_data} />
    </>
  );
};

export default Parent;
