import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
        <form action="/login" method="POST">
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "t@t.com" && password === "1234") {
    // mark this person as logged in
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.redirect('/login')
    // redirect them to the root route
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
            <div>
                <div>You are logged In</div>
                <a href="/logout">Logout</a>
            </div>
        `);
  } else {
    res.send(`
            <div>
                <div>You are not logged In</div>
                <a href="/login">login</a>
            </div>
        `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send(`<h1>Welcome to protected route, logged In user</h1>`);
});

export { router };
