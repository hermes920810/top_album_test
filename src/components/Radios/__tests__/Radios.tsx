import { render } from "@testing-library/react";

import Radios from "../Radios";

describe("Radios", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <Radios selected="a" setSelected={jest.fn()}>
          test
        </Radios>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
