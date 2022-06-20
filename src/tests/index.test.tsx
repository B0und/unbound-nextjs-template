import { screen } from "testUtils";

import { Layout } from "../components/Layout";
import Index from "../pages";
import { renderWithClient } from "../utils/testsExtra";

describe("Index page", () => {
  test("should render", async () => {
    renderWithClient(
      <Layout>
        <Index />
      </Layout>
    );
    const text = await screen.findByText("Change language:");
    expect(text).toBeInTheDocument();
  });
});
