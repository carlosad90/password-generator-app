const passLength = document.querySelector("#pass_length");
const charLength = document.querySelector("#char_length");
const copyToClipBoard = document.querySelector("#copyToClipBoard");
const result = document.querySelector("#result");
const passSecurityLevel = document.querySelector("#pass_security_level");
const generateBtn = document.querySelector("#generate_pass");
const upperCaseInput = document.querySelector("#uppercase");
const lowerCaseInput = document.querySelector("#lowercase");
const numberInput = document.querySelector("#numbers");
const specialCharInput = document.querySelector("#symbols");
const copiedAlert = document.querySelector("#copiedAlert");
let pass = "";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let specialCharacters = "~`!@#$%^&*()_+-={}:?><,./;'[]\"";
let charLimit = passLength.value;
let generatedPass = "";

function generate() {
  if (charLimit <= 0) {
    return;
  }
  copiedAlert.innerHTML = "";
  generatedPass = "";
  pass = "";
  result.value = "";

  generate_bars("empty");

  if (upperCaseInput.checked) {
    pass += upperCase;
    generate_bars("uppercase");
  }

  if (lowerCaseInput.checked) {
    pass += lowerCase;
    generate_bars("lowercase");
  }

  if (numberInput.checked) {
    pass += numbers;
    generate_bars("numbers");
  }

  if (specialCharInput.checked) {
    pass += specialCharacters;
    generate_bars("symbols");
  }

  if (pass.length > 0) {
    generatedPass = "";
    for (let index = 0; index < charLimit; index++) {
      generatedPass += pass[Math.floor(Math.random() * pass.length)];
    }
    result.value = generatedPass;
  }
}

function generate_bars(input) {
  if (input === "empty") {
    passSecurityLevel.innerHTML = "";
    passSecurityLevel.innerHTML = `  <span class="uppercase">Strength</span>
	<div class="flex gap-1.5">
	  <span class="mr-2 uppercase"></span>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	</div>`;
  }

  if (input === "uppercase") {
    passSecurityLevel.innerHTML = "";
    passSecurityLevel.innerHTML = `  <span class="uppercase">Strength</span>
	<div class="flex gap-1.5">
	  <span class="mr-2 uppercase">TOO WEAK</span>
	  <div class="w-2.5 h-7 bg-red-500"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	</div>`;
  }

  if (input === "lowercase") {
    passSecurityLevel.innerHTML = "";
    passSecurityLevel.innerHTML = `  <span class="uppercase">Strength</span>
	<div class="flex gap-1.5">
	  <span class="mr-2 uppercase">WEAK</span>
	  <div class="w-2.5 h-7 bg-orange-500"></div>
	  <div class="w-2.5 h-7 bg-orange-500"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	</div>`;
  }

  if (input === "numbers") {
    passSecurityLevel.innerHTML = "";
    passSecurityLevel.innerHTML = `  <span class="uppercase">Strength</span>
	<div class="flex gap-1.5">
	  <span class="mr-2 uppercase">MEDIUM</span>
	  <div class="w-2.5 h-7 bg-yellow-500"></div>
	  <div class="w-2.5 h-7 bg-yellow-500"></div>
	  <div class="w-2.5 h-7 bg-yellow-500"></div>
	  <div class="w-2.5 h-7 border-1 border-white"></div>
	</div>`;
  }

  if (input === "symbols") {
    passSecurityLevel.innerHTML = "";
    passSecurityLevel.innerHTML = `  <span class="uppercase">Strength</span>
	<div class="flex gap-1.5">
	  <span class="mr-2 uppercase">STRONG</span>
	  <div class="w-2.5 h-7 bg-[#A4FFAF]"></div>
	  <div class="w-2.5 h-7 bg-[#A4FFAF]"></div>
	  <div class="w-2.5 h-7 bg-[#A4FFAF]"></div>
	  <div class="w-2.5 h-7 bg-[#A4FFAF]"></div>
	</div>`;
  }
}

passLength.addEventListener("change", () => {
  charLimit = passLength.value;
  charLength.innerHTML = `${passLength.value}`;
});

generateBtn.addEventListener("click", generate);

copyToClipBoard.addEventListener("click", () => {
  result.select();
  navigator.clipboard.writeText(result.value);

  copiedAlert.innerHTML = "Copied";

  console.log(result.value);
});
