class Window {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  area = () => console.log(this.length * this.breadth);
}

const win = new Window(2, 3);
win.area();
win.prototype.newMethod = function () {
  console.log("New Methods");
};
win.newMethod();
console.log(win.prototype);
