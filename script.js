const intervalPeriod = 5000;

const solutionsCount = () => {
  let x = parseInt(document.getElementById("numberX").value);
  const startVersionOfX = x;
  let y = parseInt(document.getElementById("numberY").value);
  const startVersionOfY = y;
  let n = parseInt(document.getElementById("numberN").value);
  const startVersionOfN = n;
  let countResult = 0;
  let result = 0;

  for (let i = 1; x < n; x++) {
    for (let j = 1; y < n; y++) {
      result = Math.pow(x, 2) + Math.pow(y, 2);
      countResult++;

      if (n > result) {
        break;
      }
    }
  }

  let tag = document.createElement("p");
  let text = document.createTextNode(`
    Պատասխան = ${countResult},
    Տվյալներ - X = ${startVersionOfX}, Y = ${startVersionOfY}, N = ${startVersionOfN}
  `);
  tag.appendChild(text);
  let element = document.getElementById("result-wrapper");
  element.appendChild(tag);
};

const authorizeUser = () => {
  const correctUsername = "root";
  const correctPassword = "admin";

  const inputtedUsername = document.getElementById("username").value;
  const inputtedPassword = document.getElementById("password").value;

  if (inputtedUsername === correctUsername && inputtedPassword === correctPassword) {
    localStorage.setItem("username", correctUsername);
    localStorage.setItem("password", correctPassword);
    window.location.href = "file:///C:/Alexandr/kursayin/screens/user.html";
  }
  else {
    alert("Wrong username or password");
  }
};

const getInputValues = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  document.getElementById("username").setAttribute("value", username);
  document.getElementById("password").setAttribute("value", password);
};

const changeBackgroundColorRandomly = () => {
  const randomColorNames = ["red", "green", "white", "blue", "yellow"];

  setInterval(() => {
    const randomPickedColor = randomColorNames[Math.floor(Math.random() * randomColorNames.length)];
    document.body.style.backgroundColor = randomPickedColor;
  }, intervalPeriod);
};

const changeAddImageRandomly = () => {
  const imageElement = document.getElementById("add-slider-image");
  const imageFilenames = ["add_1.jpg", "add_2.jpg", "add_3.jpg", "add_4.jpg"];
  let counter = 0;

  setInterval(() => {
    imageElement.setAttribute("src", `../images/${imageFilenames[++counter]}`);
    if (counter === imageFilenames.length - 1) {
      counter = -1;
    }
  }, intervalPeriod);
};

const changeInfoTextColor = () => {
  const nameElement = document.getElementById("name-text");
  const collegeElement = document.getElementById("college-text");
  const problemElement = document.getElementById("problem-text");
  const randomColorNames = ["grey", "black", "lightblue"];

  setInterval(() => {
    const randomPickedColor = randomColorNames[Math.floor(Math.random() * randomColorNames.length)];
    nameElement.style.color = randomPickedColor;
    collegeElement.style.color = randomPickedColor;
    problemElement.style.color = randomPickedColor;
  }, intervalPeriod);
};

const changeInfoTextByOrder = () => {
  const infoTextElement = document.getElementById("text-by-order");
  const infoTexts = [
    "Ալեքսանդր Միրզոյան Պետրոսի",
    "Երևանի Ինֆորմատիկայի պետական քոլեջ",
    "Տրված է n բնական թիվը: Որոշել x<sup>2</sup> + y<sup>2</sup> < n անհավասարության լուծումների քանակը և x, y-ի արժեքները բնական թվերում"
  ];
  let counter = 0;

  setInterval(() => {
    infoTextElement.innerHTML = infoTexts[++counter];
    if (counter === infoTexts.length - 1) {
      counter = -1;
    }
  }, intervalPeriod);
};

const changeProblemFontSize = () => {
  const element = document.getElementById("change-problem-size");
  const fontSizesArray = ["16px", "32px", "64px"];
  let counter = 0;

  setInterval(() => {
    element.style.fontSize = fontSizesArray[++counter];
    if (counter === fontSizesArray.length - 1) {
      counter = -1;
    }
  }, intervalPeriod);
};

const blinkProblemText = () => {
  const element = document.getElementById("blink-text");
  const randomColorNames = ["grey", "black", "lightblue"];
  let show = true;

  setInterval(() => {
    const randomPickedColor = randomColorNames[Math.floor(Math.random() * randomColorNames.length)];
    element.style.display = show ? "block" : "none";
    element.style.color = randomPickedColor;
    show = !show;
  }, 500)
};

const changeFullNameColor = () => {
  const element = document.getElementById("change-full-name-color");
  const randomColorNames = ["grey", "black", "lightblue"];

  setInterval(() => {
    const randomPickedColor = randomColorNames[Math.floor(Math.random() * randomColorNames.length)];
    element.style.color = randomPickedColor;
  }, intervalPeriod);
};

const getTodayAdvice = () => {
  const adviceList = {
    1: "1ին օրվա խորհուրդ",
    2: "2րդ օրվա խորհուրդ",
    3: "3րդ օրվա խորհուրդ",
    4: "4րդ օրվա խորհուրդ",
    5: "5րդ օրվա խորհուրդ",
    6: "6րդ օրվա խորհուրդ",
    7: "7րդ օրվա խորհուրդ",
    8: "8րդ օրվա խորհուրդ",
    9: "9րդ օրվա խորհուրդ",
    10: "10րդ օրվա խորհուրդ",
    11: "11րդ օրվա խորհուրդ",
    12: "12րդ օրվա խորհուրդ",
    13: "13րդ օրվա խորհուրդ",
    14: "14րդ օրվա խորհուրդ",
    15: "15րդ օրվա խորհուրդ",
    16: "16րդ օրվա խորհուրդ",
    17: "17րդ օրվա խորհուրդ",
    18: "18րդ օրվա խորհուրդ",
    19: "19րդ օրվա խորհուրդ",
    20: "20րդ օրվա խորհուրդ",
    21: "21րդ օրվա խորհուրդ",
    22: "22րդ օրվա խորհուրդ",
    23: "23րդ օրվա խորհուրդ",
    24: "24րդ օրվա խորհուրդ",
    25: "25րդ օրվա խորհուրդ",
    26: "26րդ օրվա խորհուրդ",
    27: "27րդ օրվա խորհուրդ",
    28: "28րդ օրվա խորհուրդ",
    29: "29րդ օրվա խորհուրդ",
    30: "30րդ օրվա խորհուրդ",
    31: "31րդ օրվա խորհուրդ",
  };
  const day = new Date().getDate();
  document.getElementById("advice-text-wrapper").innerText = adviceList[day];
};

const handleLogout = () => {
  const isSure = confirm("Are you sure?");
  if (isSure) {
    window.location.href = "../index.html";
  }
};

const handleInputOnEnter = () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  usernameInput.addEventListener("keyup", event => {
    if (isClickedEnter(event.keyCode)) {
      authorizeUser();
    }
  });
  passwordInput.addEventListener("keyup", event => {
    if (isClickedEnter(event.keyCode)) {
      authorizeUser();
    }
  });
};

const isClickedEnter = eventKeyNumber => {
  return eventKeyNumber === 13;
};

const hideElementAfterSomePeriod = (elementID, period) => {
  setTimeout(() => {
    document.getElementById(elementID).style.display = "none";
  }, period);
};