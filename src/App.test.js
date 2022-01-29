import { render, screen, cleanup } from "@testing-library/react";
import axios from "axios";
import App from "./App";

afterEach(cleanup);

it("should render app", () => {
  render(<App />);
});

it("should get api response", async () => {
  const response = await axios.get(
    "http://www.omdbapi.com/?s=Avengers&apikey=491682b0"
  );
  expect(response.status).toEqual(200);
  return response;
});

it("should have input type of text", () => {
  render(<App />);
  const element = screen.getByTestId("test");
  expect(element.type).toEqual("text");
});
