import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/firtsstep", "routes/firstStep.tsx"),
  route("/welcome", "routes/principal.tsx"),
  route("/contactme", "routes/contact.tsx"),
  route("/exercisesBodyPart/:id", "routes/exercise.tsx"),
  route("/exercisescomplete/:id", "routes/exerciseComplete.tsx"),
] satisfies RouteConfig;
