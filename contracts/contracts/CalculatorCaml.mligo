type storage = int
type return = (operation list) * storage
type action =
  | Add of int * int
  | Subtract of int * int
  | Multiply of int * int
  | Divide of int * int

let add(i, j : int * int) : return = 
  ([] : operation list), (i + j : storage)

let subtract(i , j : int * int) : return = 
  ([] : operation list), (i - j : storage)

let multiply(i , j : int * int) : return = 
  ([] : operation list), (i * j : storage)

let divide(i , j : int * int) : return = 
  ([] : operation list), (i / j : storage)

let main(action, _store : action * storage) : return =
  match action with
  | Add v -> add(v.0, v.1)
  | Subtract v -> subtract(v.0, v.1)
  | Multiply v -> multiply(v.0, v.1)
  | Divide v -> divide(v.0, v.1)
