import React from "react";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

const users = [
  {
    firstName: "Joe",
    lastName: "Belfiore",
    birthDate: "1990-01-11",
    gender: "Homme",
  },

  {
    firstName: "Bill",
    lastName: "Gates",
    birthDate: "1990-01-11",
    gender: "Homme",
  },
  {
    firstName: "Mark",
    lastName: "Zuckerberg",
    birthDate: "1990-01-11",
    gender: "Homme",
  },
  {
    firstName: "Marissa",
    lastName: "Mayer",
    birthDate: "1995-01-01",
    gender: "Femme",
  },
  {
    firstName: "Sundar",
    lastName: "Pichai",
    birthDate: "1900-01-11",
    gender: "Homme",
  },
];

export const UserList = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>List of users:</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {users.map((user) => {
            return (
              <div key={user.lastName + user.firstName + user.birthDate}>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td rowSpan={2}>
                        <Image roundedCircle thumbnail src={"./cat.jpg"} />
                      </td>
                      <td>{[user.firstName, user.lastName].join(" ")}</td>
                    </tr>
                    <tr>
                      <td>{[user.gender, user.birthDate].join(" ")}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
