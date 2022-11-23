import { GraphQLRequest, GraphQLVariables, ResponseResolver } from "msw";

interface GetUserQuery {}

export const users: ResponseResolver<GetUserQuery> = (req, res, ctx) => {};
