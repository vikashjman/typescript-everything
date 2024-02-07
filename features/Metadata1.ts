import "reflect-metadata";

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrrrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  console.log(Object.getOwnPropertyNames(target.prototype));
  for (let key of Object.getOwnPropertyNames(target.prototype)) {
    if (key !== "constructor") {
      const secret = Reflect.getMetadata("path", target.prototype, key);
      router.get(path, target.prototype[key])
    }
  }
}
