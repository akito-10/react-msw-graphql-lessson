import { graphql } from "msw";

export const handlers = [
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
