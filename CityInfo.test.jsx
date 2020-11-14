import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo";

test("CityInfo render", async () => {
  // AAA
  // Arrange
  // Act
  const city = "Mexicali";
  const country = "Mexico";

  const { findAllByRole } = render(<CityInfo city={city} country={country} />);

  // Assert
  const cityAndCountryComponent = await findAllByRole("heading");

  expect(cityAndCountryComponent[0]).toHaveTextContent(city);
  expect(cityAndCountryComponent[1]).toHaveTextContent(country);
});
