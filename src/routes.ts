import { createRoute } from "utils/routeUtils";

export interface SearchParams {
  value?: string;
}

const ROUTES = {
  ALBUMS: createRoute("/"),
  SONGS: createRoute("/songs"),
  FAVORITE: createRoute("/favorite"),
  SEARCH: createRoute<SearchParams>("/search/:value?")
};

export default ROUTES;
