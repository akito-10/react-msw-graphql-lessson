import { graphql } from "msw";

export const handlers = [
  graphql.mutation("Login", (req, res, ctx) => {
    const { username } = req.variables;

    return res(
      ctx.data({
        login: {
          username,
        },
      })
    );
  }),
  graphql.query("GetUserInfo", (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            firstName: "John",
            lastName: "Maverick",
          },
          {
            firstName: "Cathaline",
            lastName: "McCoy",
          },
        ],
      })
    );
  }),
];
