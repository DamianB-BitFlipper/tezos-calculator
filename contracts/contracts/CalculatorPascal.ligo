type storage is int

type action is 
    | Add of int * int
    | Subtract of int * int
    | Multiply of int * int
    | Divide of int * int

type return is list (operation) * storage

function add (const i : int; const j : int) : return is
    ((nil : list (operation)), ((i + j) : storage))

function subtract (const i : int; const j : int) : return is
    ((nil : list (operation)), ((i - j) : storage))

function multiply (const i : int; const j : int) : return is
    ((nil : list (operation)), ((i * j) : storage))

function divide (const i : int; const j : int) : return is
    ((nil : list (operation)), ((i / j) : storage))

function main ( const action : action; var _store : storage) : return is
    case action of
    | Add (v) -> add (v.0, v.1)
    | Subtract (v) -> subtract (v.0, v.1)
    | Multiply (v) -> multiply (v.0, v.1)
    | Divide (v) -> divide (v.0, v.1)
    end