const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type Alias
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
