import { render } from "@testing-library/react";

import Input from "../Input";

describe("Input", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(<Input value="1" onChange={jest.fn()} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for only digits and max length", () => {
      const { container } = render(
        <Input value="1" onChange={jest.fn()} maxLength={1} onlyDigits />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
