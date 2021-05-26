import { render } from "@testing-library/react";

import IconButton from "../IconButton";

describe("IconButton", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <IconButton onClick={jest.fn()}>test</IconButton>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for primary", () => {
      const { container } = render(
        <IconButton primary onClick={jest.fn()}>
          test
        </IconButton>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for disabled", () => {
      const { container } = render(
        <IconButton disabled onClick={jest.fn()}>
          test
        </IconButton>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
