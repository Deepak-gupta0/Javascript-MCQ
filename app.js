const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
let firstCount = 0;
let turnsCount = 1;
let resultPercent = 0;

// Move the next button event listener outside the click handler
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => {
  firstCount++;
  if (firstCount >= queArray.length) {
    // Game over logic
    page2.style.display = "none";
    page3.style.display = "block";
    return;
  }
  queRun();
  optBtm();
  queCount();
  showResult();

});

document.querySelector(".page1 button").addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "block";
  queRun();
  optBtm();
  queCount();
  
  document.querySelector(".options").addEventListener("click", (dets) => {
    if (jsQuizShort[queArray[firstCount]] === dets.target.innerText) {
      resultPercent += 1;
      dets.target.style.border = "2px solid green";
    } else {
      dets.target.style.border = "2px solid red";
    }
  });
});

// ... rest of your code remains the same ...

const jsQuizShort = {
  // Basics
  "What is JavaScript?": "Scripting language",
  "Primitive data types?": "String, number, boolean...",
  "'let' vs 'const' vs 'var'?": "Scoping rules",
  "What is hoisting?": "Declaration lifting",
  "'typeof' purpose?": "Type check",

  // Functions
  "Arrow function?": "Shorter syntax",
  "Callback function?": "Function argument",
  "Closure?": "Remembers scope",
  "IIFE?": "Immediately executed",
  "'==' vs '==='?": "Loose vs strict",

  // Objects & Arrays
  "Clone an object?": "Spread operator",
  "Destructuring?": "Unpack values",
  "Common array methods?": "map, filter, reduce",
  "'slice()' vs 'splice()'?": "Copy vs modify",
  "Spread operator?": "Expand iterables",

  // Async
  "Promise?": "Async result",
  "'async/await'?": "Synchronous-style async",
  "Event loop?": "Callback handler",
  "'setTimeout()'?": "Delayed execution",
  "'setTimeout()' vs 'setInterval()'?": "Once vs repeat",

  // Advanced
  "'this' keyword?": "Context object",
  "Prototypal inheritance?": "Parent objects",
  "'null' vs 'undefined'?": "Intentional vs default",
  "Memoization?": "Cache results",
  "JavaScript modules?": "Reusable code",
};

const jsQuizMCQ = [
  // Batch 1
  [
    "Database query language",
    "Scripting language",
    "Markup language",
    "Styling language",
    
  ],
  // Batch 2
  [
    "Array, object, function",
    "Int, float, char",
    "True, false, maybe",
    "String, number, boolean...",
  ],
  // Batch 3
  [ "Looping methods","Scoping rules", "Error handling", "Event types"],
  // Batch 4
  [
    
    "Code minification",
    "Variable deletion",
    "Automatic typecasting",
    "Declaration lifting",
  ],
  // Batch 5
  ["Value increment", "String concatenation","Type check",  "Loop termination"],
  // Batch 6
  [
    "Slower execution",
    "Shorter syntax",
    "HTML rendering",
    "Database connection",
  ],
  // Batch 7
  [ "Return statement", "Error object","Function argument", "Loop counter"],
  // Batch 8
  [
    "Remembers scope",
    "Creates globals",
    "Deletes variables",
    "Stops execution",
  ],
  // Batch 9
  [
    "Immediately executed",
    "Never runs",
    "Requires manual call",
    "Only in browsers",
  ],
  // Batch 10
  ["Loose vs strict", "Add vs subtract", "Sync vs async", "Public vs private"],
  // Batch 11
  [
    "Spread operator",
    "Deep copy function",
    "JSON.stringify()",
    "Manual assignment",
  ],
  // Batch 12
  ["Unpack values", "Delete properties", "Encrypt data", "Freeze object"],
  // Batch 13
  [
    "map, filter, reduce",
    "log, warn, error",
    "if, else, switch",
    "try, catch, finally",
  ],
  // Batch 14
  ["Copy vs modify", "Add vs remove", "Sort vs reverse", "Sync vs async"],
  // Batch 15
  ["Expand iterables", "Compress data", "Validate input", "Parse JSON"],
  // Batch 16
  ["Async result", "Sync blocker", "Event emitter", "Loop controller"],
  // Batch 17
  [
    "Synchronous-style async",
    "Double-speed execution",
    "DOM manipulator",
    "Memory leak fixer",
  ],
  // Batch 18
  [
    "Callback handler",
    "Variable hoister",
    "Garbage collector",
    "Syntax validator",
  ],
  // Batch 19
  [
    "Delayed execution",
    "Instant termination",
    "Parallel threading",
    "Code obfuscation",
  ],
  // Batch 20
  ["Once vs repeat", "Sync vs async", "Frontend vs backend", "Local vs global"],
  // Batch 21
  ["Context object", "Random value", "Static reference", "Loop iterator"],
  // Batch 22
  ["Parent objects", "Class templates", "Foreign APIs", "Network requests"],
  // Batch 23
  [
    "Intentional vs default",
    "True vs false",
    "Public vs private",
    "Mutable vs immutable",
  ],
  // Batch 24
  ["Cache results", "Ignore inputs", "Delete outputs", "Randomize outputs"],
  // Batch 25
  ["Reusable code", "UI components", "Test cases", "Dev tools"],
];

const questionObj = Object.keys(jsQuizShort);
const queArray = questionObj.map((el) => {
  return el;
});

let question = document.querySelector(".que p");

function queRun() {
  question.innerText = queArray[firstCount];
  return queArray[firstCount]
}
let optionsBtn = document.querySelector(".options");
function optBtm() {
  count = 0;
  optionsBtn.innerHTML = `
          <button>${jsQuizMCQ[firstCount][count]}</button>
          <button>${jsQuizMCQ[firstCount][count + 1]}</button>
          <button>${jsQuizMCQ[firstCount][count + 2]}</button>
          <button>${jsQuizMCQ[firstCount][count + 3]}</button>`;
}
function queCount() {
  document.querySelector(".que-count").innerHTML = `<p>${turnsCount}/25</p>`;
  turnsCount++;
}
function showResult () {
  let percent = (resultPercent/queArray.length)*100;
  document.querySelector('.loader').innerHTML = `<div class="greenloader">${percent}%</div>`;
  document.querySelector('.greenloader').style.width = `${percent}px`
}