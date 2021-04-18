import { render, screen, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
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
        variables: { offset: 0, limit: 10 },
      },
      error: new Error("Something went wrong"),
    },
  ];

test("UserList Page rendered", async () => {
  render(
    <MockedProvider mocks={[mocks[0]]} addTypename={false}>
      <UserList />
    </MockedProvider>
  );

  await act(() =>new Promise(resolve => setTimeout(resolve, 1000)));
  expect(screen.getByText("User's List")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Go Home" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Load more" })).toBeInTheDocument();
  expect(screen.getAllByRole("img", { name: "Picture of the user" })).toHaveLength(4);
});

test("UserList Page Error", async () => {
  render(
    <MockedProvider mocks={[mocks[1]]} addTypename={false}>
      <UserList />
    </MockedProvider>
  );

  await act(() =>new Promise(resolve => setTimeout(resolve, 1000)));
  expect(screen.getByText("Oops!! something went wrong. Make sure server is up and running at port 4000")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Go Home" })).toBeInTheDocument();
});
