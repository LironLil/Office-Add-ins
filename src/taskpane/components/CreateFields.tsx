import * as React from "react";

import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField";
import { Stack, IStackProps, IStackStyles } from "@fluentui/react/lib/Stack";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: "Calendar" };

const iconFunction = "assets/function-icon.png";
const stackStyles: Partial<IStackStyles> = { root: { width: 250 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

export const TextFieldBasicExample: React.FunctionComponent = () => {
  const [price, setPrice] = React.useState("");

  const [formula, setFormula] = React.useState("");

  const [isFormulaActive, setIsFormulaActive] = React.useState(false);

  const [result, setResult] = React.useState(null);

  function onChangePrice(event) {
    const { name, value } = event.target;
    const rgx = /^[0-9]*\.?[0-9]*$/; //regex - Allow only numbers and dot
    if (rgx.test(value)) {
      setPrice(value);
      console.log(price);
    }
  }

  function onChangeFormula(event) {
    const { name, value } = event.target;
    if (value === "=") {
      setIsFormulaActive(true);
    }
    setFormula(value);
  }

  function onPriceClick() {
    if (isFormulaActive) {
      setFormula(formula + price);
      //setIsFormulaActive(false);
    }
  }

  function calcFormula() {
    let str = formula.slice(1);

    //Clean the string with a regex to be safe
    let cleanStr = str.replace(/[^-()\d/*+.]/g, ""); // strip anything other than digits, (), -+/* and .
    console.log(cleanStr);

    setResult(eval(cleanStr));
    //setIsFormulaActive(false);
  }

  return (
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        <TextField label="Price" name="price" value={price} onChange={onChangePrice} onClick={onPriceClick} />

        <TextField label="Formula" name="formula" value={formula} onChange={onChangeFormula} />
        <TextField label="Result" name="result" value={result} />
        <DefaultButton text="Calculation" onClick={calcFormula} />
        {/*  <TextField label="Date" iconProps={iconProps} /> */}
      </Stack>
    </Stack>
  );
};
