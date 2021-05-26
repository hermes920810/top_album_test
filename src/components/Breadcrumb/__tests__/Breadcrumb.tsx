import { render } from "@testing-library/react";

import Breadcrumb from "../Breadcrumb";

describe("Breadcrumb", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for basic use", () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item>Test3</Breadcrumb.Item>
          Test4
        </Breadcrumb>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
