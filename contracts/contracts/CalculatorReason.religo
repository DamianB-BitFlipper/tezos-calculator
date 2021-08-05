type storage = int;
type return = (list(operation), storage);

type action =
| Add((int, int))
| Subtract((int, int))
| Multiply((int, int))
| Divide((int, int));

let add = ((i, j) : (int, int)) : return => ([]: list(operation), (i + j));
let subtract = ((i, j) : (int, int)) : return => ([]: list(operation), (i - j));
let multiply = ((i, j) : (int, int)) : return => ([]: list(operation), (i * j));
let divide = ((i, j) : (int, int)) : return => ([]: list(operation), (i / j));

let main = ((action, _store) : (action, storage)) : return => {
  switch(action) {
      | Add (v) => add(v[0], v[1])
      | Subtract (v) => subtract(v[0], v[1])
      | Multiply (v)=> multiply(v[0], v[1])
      | Divide(v) => divide(v[0], v[1])
  };
};
