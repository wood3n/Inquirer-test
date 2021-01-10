const inquirer = require("inquirer");

const questions = [
  {
    type: "editor",
    name: "editor",
    message: "test editor",
  },
  {
    type: "input",
    name: "input",
    message: "test input",
  },
  {
    type: "number",
    name: "number",
    message: "test number",
  },
  {
    type: "confirm",
    name: "confirm",
    message: "test confirm",
  },
  {
    type: "list",
    name: "list",
    message: "test list",
    choices: [1, 2],
  },
  {
    type: "rawlist",
    name: "rawlist",
    message: "test rawlist",
    choices: [1, 2],
  },
  {
    type: "expand",
    name: "expand",
    message: "test expand",
    choices: [
      {
        key: "y",
        name: "Overwrite",
        value: "overwrite",
      },
      {
        key: "a",
        name: "Overwrite this one and all next",
        value: "overwrite_all",
      },
      {
        key: "d",
        name: "Show diff",
        value: "diff",
      },
      new inquirer.Separator(),
      {
        key: "x",
        name: "Abort",
        value: "abort",
      },
    ],
  },
  {
    type: "checkbox",
    name: "checkbox",
    message: "test checkbox",
    choices: [
      new inquirer.Separator(" = The Meats = "),
      {
        name: "Pepperoni",
      },
      {
        name: "Ham",
      },
      {
        name: "Ground Meat",
      },
      {
        name: "Bacon",
      },
      new inquirer.Separator(" = The Cheeses = "),
      {
        name: "Mozzarella",
        checked: true,
      },
      {
        name: "Cheddar",
      },
      {
        name: "Parmesan",
      },
      new inquirer.Separator(" = The usual ="),
      {
        name: "Mushroom",
      },
      {
        name: "Tomato",
      },
      new inquirer.Separator(" = The extras = "),
      {
        name: "Pineapple",
      },
      {
        name: "Olives",
        disabled: "out of stock",
      },
      {
        name: "Extra cheese",
      },
    ],
  },
  {
    type: "password",
    name: "password",
    mask: "*",
    message: "test password",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});
