import userRoutes from "./users/routes";
import albumRoutes from "./albums/routes";
import photosRoutes from "./photos/routes";

export default [...userRoutes, ...albumRoutes, ...photosRoutes];