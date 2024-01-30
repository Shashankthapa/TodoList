export default function (prop) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone no</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {prop.showEmp.map((val) => {
            if(val.id >= 1){
                return (
                  <tr key={`${val.id}`}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.no}</td>
                    <td><input style = {{border : "1px solid black"}} type = "submit" value = "Delete"/></td>
                    <td><input style = {{border : "1px solid black"}} type = "submit" value = "Update"/></td>   
                  </tr>
                );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
