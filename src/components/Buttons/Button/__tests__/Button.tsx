import { render } from "@testing-library/react";

import Button from "../Button";

describe("Button", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot with min. props", () => {
      const { container } = render(<Button>test</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot with fullWidth = true", () => {
      const { container } = render(<Button fullWidth>test</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot with transparent = true", () => {
      const { container } = render(<Button transparent>test</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
