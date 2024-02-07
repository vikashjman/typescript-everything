import { NextFunction, Request, Response } from "express";
import { get, controller, use, post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request was made!!");
  next();
}

@controller("/auth")
export class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
              <form action="/auth/login" method="POST">
                  <div>
                      <label>Email</label>
                      <input name="email"/>
                  </div>
                  <div>
                      <label>Password</label>
                      <input name="password" type="password"/>
                  </div>
                  <button>Submit</button>
              </form>
          `);
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }

  @post("/login")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === "t@t.com" && password === "1234") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.redirect("/auth/login");
    }
  }
}
