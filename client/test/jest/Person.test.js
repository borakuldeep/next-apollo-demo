import { render, screen } from "@testing-library/react";
import Person from "../../components/Person";

test("check person card rendered", () => {
  const person = {
    name: "Dr. Kailey Glover",
    email: "Garrison.Smitham@hotmail.com",
    phone: "230-359-4997",
    address: {
      street: "Peyton Meadow",
      city: "Gusikowskitown",
      country: "Senegal",
    },
  };
  render(<Person person={person} />);

  expect(screen.getByRole("heading", { name: "Dr. Kailey Glover" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Picture of the author" })).toBeInTheDocument();
  expect(screen.getByText("Email:")).toBeInTheDocument();
  expect(screen.getByText("Garrison.Smitham@hotmail.com")).toBeInTheDocument();
  expect(screen.getByText("Phone:")).toBeInTheDocument();
  expect(screen.getByText("230-359-4997")).toBeInTheDocument();
  expect(screen.getByText("Address:")).toBeInTheDocument();
  expect(screen.getByText("Peyton Meadow, Gusikowskitown, Senegal")).toBeInTheDocument();

});
