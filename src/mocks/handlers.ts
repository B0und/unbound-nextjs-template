import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "mocked-react-query",
      })
    );
  }),
];
