import { render } from "@testing-library/react";

import AmountInput from "../AmountInput";

describe("AmountInput", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <AmountInput value={1} onChange={jest.fn()}>
          test
        </AmountInput>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for value=0 and maxLength specified", () => {
      const { container } = render(
        <AmountInput value={0} onChange={jest.fn()} maxLength={2}>
          test
        </AmountInput>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
