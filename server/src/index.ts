import express, { Response, Request } from "express";
// import { router as loginRoutes } from "./routes/loginRoutes";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./controllers/loginController";
import "./controllers/RootController"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession({ keys: ["laskdjf"] }));

// app.use(loginRoutes);
app.use(AppRouter.getInstance());

app.listen(3000, () => console.log(`Server started at http://localhost:3000`));
