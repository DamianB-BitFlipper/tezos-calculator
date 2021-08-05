# Calculator Dapp

## A smart contract example that represents a simple calculator

#### Source Code:

- **Caml:** [CalculatorCaml.mligo](https://gitlab.com/tezosisrael/smart-contracts-examples/-/blob/master/examples/calculator/contracts/CalculatorCaml.mligo)
- **Pascal:** [CalculatorPascal](https://gitlab.com/tezosisrael/smart-contracts-examples/-/blob/master/examples/calculator/contracts/CalculatorPascal.ligo)
- **Reason:** [CalculatorReason](https://gitlab.com/tezosisrael/smart-contracts-examples/-/blob/master/examples/calculator/contracts/CalculatorReason.religo)

#### Contract addresses:

- **Caml:** [KT1Tx6sdS4UicFU6eKUfhvGBWo2mNoxCG1Wg](https://better-call.dev/florencenet/KT1Tx6sdS4UicFU6eKUfhvGBWo2mNoxCG1Wg/operations)
- **Pascal:** [KT1CXCszEqHEBipeHjRfC3r2HTh6qHZ2kdUj](https://better-call.dev/florencenet/KT1CXCszEqHEBipeHjRfC3r2HTh6qHZ2kdUj/operations)
- **Reason:** [KT1RN8gAgqm5MtcLkLGpHz5cFeptFsuqLp6M](https://better-call.dev/florencenet/KT1RN8gAgqm5MtcLkLGpHz5cFeptFsuqLp6M/operations)

### API:

#### Entry points:

1. `add(i, j : int * int)`
2. `subtract(i, j : int * int)`
3. `multiply(i, j : int * int)`
4. `divide(i, j : int * int)`

#### Storage:

`int`

#### Errors:

##### While In Progress:

- "NotDefined": main entry-point gets the command to call an entry-point, but the entry-point doesn't exist yet.
- "NotImplemented": the entry-point is defined, but not functional yet.

##### Operation Errors:

- "DIV by 0": tried to divide by zero

---

#### Contributors:

- **Caml:** Aharon Lando [@ahla85](https://gitlab.com/ahla85)

- **Pascal:** Ameed Jadallah [@ameedjadallah](https://gitlab.com/ameedjadallah)

- **Reason:** Adam Shinder [@adamshinder](https://gitlab.com/adamshinder)

- **DApp:** Aharon Lando [@ahla85](https://gitlab.com/ahla85)
