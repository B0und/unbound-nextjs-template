import { Layout } from "../components/Layout";
import Index from "../pages";
import { renderWithClient } from "../utils/testsExtra";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("Index page", () => {
  test("should render", async () => {
    const result = renderWithClient(
      <Layout>
        <Index />
      </Layout>
    );
    const text = await result.findByText("Change language:");
    expect(text).toBeInTheDocument();
  });
});
