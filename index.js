

/**
 * Does fizzbuzz but it is super
 * @param {number} n
 */
function dofizzBuzz(n) {
    let fizzBuzzString = "";

    const fizzLookup = {
        3: "fizz",
        5: "buzz",
        7: "foo",
        9: "bar"
    }

    const fizzNums = Object.keys(fizzLookup);

    for (let i = 0; i < n + 1; i++) {
        let str = "";
        for (let num of fizzNums) {
            if (i != 0 && i % num == 0) {
                str += fizzLookup[num];
            }
        }
        if (str === "") {
            fizzBuzzString += i + " ";
        } else {
            fizzBuzzString += str + " ";
        }
    }

    const fizzBuzzOutput = document.getElementById("fizz-buzz-output");
    fizzBuzzOutput.innerText = fizzBuzzString;
}


function superFizzBuzz() {
    const defaultText = "Click to generate fizz buzz";

    /**@type {HTMLInputElement} */
    const numberInput = document.getElementById("fizz-buzz-input");
    numberInput.type = "number";
    numberInput.placeholder = "type here";

    /**@type {HTMLButtonElement} */
    const submitButton = document.getElementById("fizz-buzz-submit");
    submitButton.innerText = defaultText;
    submitButton.addEventListener("mouseup", (ev) => {
        /**@type {HTMLInputElement} */
        const fizzBuzzInput = document.getElementById("fizz-buzz-input");
        const numString = fizzBuzzInput.value;
        if (numString === "") return;

        const num = parseInt(numString);
        dofizzBuzz(num);
    });

    /**@type {HTMLButtonElement} */
    const clearButton = document.getElementById("clear-fizz-buzz");
    clearButton.addEventListener("mouseup", (ev) => {
        const fizzBuzzOutput = document.getElementById("fizz-buzz-output");
    })
}


window.onload = () => {
    superFizzBuzz();
}

