import { render, screen, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import UserList, {GET_USERS} from "../../../pages/users";

const usersData = [
    {
      name: "Dr. Kailey Glover",
      gender: "F",
      email: "Kailey.Smitham@hotmail.com",
      address: {
        street: "Peyton Meadow",
        city: "Gusikowskitown",
        country: "Senegal",
      },
      phone: "230-359-4997",
    },
    {
      name: "Dr. Kailey2 Glover",
      gender: "M",
      email: "Kailey2.Smitham@hotmail.com",
      address: {
        street: "Peyton Meadow",
        city: "Gusikowskitown",
        country: "Senegal",
      },
      phone: "230-359-4997"
    },
    {
      name: "Dr. Kailey3 Glover",
      gender: "M",
      email: "Kailey3.Smitham@hotmail.com",
      address: {
        street: "Peyton Meadow",
        city: "Gusikowskitown",
        country: "Senegal",
      },
      phone: "230-359-4997"
    },
    {
      name: "Dr. Kailey4 Glover",
      gender: "M",
      email: "Kailey4.Smitham@hotmail.com",
      address: {
        street: "Peyton Meadow",
        city: "Gusikowskitown",
        country: "Senegal",
      },
      phone: "230-359-4997"
    },
  ];

  const mocks = [
    {
      request: {
        query: GET_USERS,
        variables: { offset: 0, limit: 10 },
      },
      result: {
        data: {
          users: usersData,
        },
      },
    },
    {
      request: {
        query: GET_USERS,
        variables: { offset: 2, limit: 10 },
      },
      error: new Error("Something went wrong"),
    },
  ];

test("UserList Page rendered", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserList />
    </MockedProvider>
  );


  expect(screen.getByText("Loading...")).toBeInTheDocument();
  await act(() =>new Promise(resolve => setTimeout(resolve, 1000)));
  expect(screen.getByText("User's List")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Go Back" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Fetch 10 more" })).toBeInTheDocument();
  expect(screen.getAllByRole("img", { name: "Picture of the author" })).toHaveLength(4);
});
