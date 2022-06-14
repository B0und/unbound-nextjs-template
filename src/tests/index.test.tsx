import Index from "../pages";
import { renderWithClient } from "../utils/testsExtra";

describe("Index page", () => {
  test("should render", async () => {
    const result = renderWithClient(<Index />);
    const text = await result.findByText("Hello world");
    expect(text).toBeInTheDocument();
  });
});
