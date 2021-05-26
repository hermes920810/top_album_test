import { render } from "@testing-library/react";

import AddNewItem from "../AddNewItem";

describe("AddNewItem", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <AddNewItem onClick={jest.fn()}>test</AddNewItem>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
