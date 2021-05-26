import { render } from "@testing-library/react";

import RadioBlock from "../RadioBlock";

describe("RadioBlock", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(<RadioBlock index="a">test</RadioBlock>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
