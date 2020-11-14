import React from "react";
import { render } from "@testing-library/react";
import Weather from "./Weather";
import "@testing-library/jest-dom/extend-expect";

test("Weather render", async () => {
  const temperature = 10;

  const { findAllByRole } = render(<Weather temperature={temperature} />);

  const temp = await findAllByRole("heading");

  expect(temp).ToHaveTextContent(temperature);
});
