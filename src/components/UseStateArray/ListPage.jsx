import "../../mainPage.css";

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
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {prop.showEmp.map((val) => {
            if (val.id >= 1) {
              return (
                <tr key={`${val.id}`}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.no}</td>
                  <td>
                    <input type="submit" className="submit" value="Delete" />
                  </td>
                  <td>
                    <input className="submit" type="submit" value="Update" />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
