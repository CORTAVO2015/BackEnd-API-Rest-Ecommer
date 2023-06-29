/**Archivo central de enrutamiento */
import { Router, Request, Response} from "express";
import routeUsers from "./users";
import routeProducts from "./products";

const router =Router();


/** Archivo central de enrutamiento */
router.use( '/users', routeUsers );
router.use( '/products', routeProducts)
export default router;