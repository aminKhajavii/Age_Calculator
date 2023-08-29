const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

getAge = (birthdayValue) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  const day = currentDate.getDay() - birthdayDate.getDay();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    years--;
  }
  return years;
};

btn.addEventListener("click", () => {
  const birthdayValue = birthday.value;
  if (birthdayValue === "") {
    alert("Please Enter Your Birthday");
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } years old`;
  }
});
