import { AppData } from "../../data";

interface UsersStackProps {
  data: {
    avatar: string;
    name: string;
    code: string;
    email: string;
    rate: number;
  }[];
}

export function UsersStack({ data }: UsersStackProps) {
  const rows = data.map((item, index) => (
    <tr key={item.name}>
      <th scope="row"> {index + 1}</th>
      <td>{item.name}</td>
      <td>{item.code}</td>
      <td><button className="btn btn-info">View</button></td>
    </tr>
  ));

  return (

    <div>
      <div className="container">
        <div>
          <h3>Plateau State</h3>
          <table className="table border" style={{}}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Pulling Unit</th>
                <th scope="col">Code</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>


  );
}


export const PullingUnitsStats = (
  <UsersStack
    data={
      //@ts-ignore
      AppData.lgas[0].puns.map((v) => {
        return {
          name: v,
          avatar: "",
          email: "",
          code: Math.round(Math.random() * 1000) + "",
          rate: 100,
        };
      })}
  />
);