const about = document.getElementById("about")
const line = document.getElementById("line")
const firstBox = document.getElementById("firstBox")
const projectHeading = document.getElementById("projectHeading")
const stackdiv = document.querySelectorAll(".stackDiv")
const evenListItems = document.querySelectorAll(".box:nth-child(even)");
const oddListItems = document.querySelectorAll(".box:nth-child(odd)");
const extra = document.querySelectorAll(".extra");
// const extra = document.querySelectorAll(".extra");
stackdiv.forEach((div) => {
    div.style.height = window.innerHeight - projectHeading.offsetHeight + "px"
    // div.style.top = projectHeading.offsetHeight + "px"

})
document.addEventListener("scroll", function () {
    const top = about.getBoundingClientRect().top
    const firstBoxBottom = firstBox.getBoundingClientRect().top
    if (top < 0) {
        const aboutWidth = about.offsetHeight
        const x = top + (- 200)
        line.style.height = firstBoxBottom < 0 && (Math.abs((firstBoxBottom))) + "px"
        line.style.display = "block"
    }
    else {
        line.style.height = "0px"
        line.style.display = "none"
    }
    evenListItems.forEach(item => {
        const boxTop = item.getBoundingClientRect().top
        if (boxTop < 300) {
            item.style.transform = 'translateX(0%)';
            item.style.opacity = '1';
        } else {
            item.style.transform = 'translateX(-200%)';
            item.style.opacity = '0';
        }
    })
    oddListItems.forEach(item => {
        const boxTop = item.getBoundingClientRect().top
        if (boxTop < 300) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0%)';
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateX(200%)';
        }
    })
    const extraTop = extra[0].getBoundingClientRect().top
    const cal = (Math.floor(extraTop - window.innerHeight) / Math.floor(window.innerHeight)) * 100

    if (extraTop - window.innerHeight < 0) {
        extra[0].style.width = Math.abs(cal) + "%"
        line.style.height = "0px"
        line.style.display = "none"
    }
    else {
        extra[0].style.width = "0px"
        const aboutWidth = about.offsetHeight
        const x = top + (- 200)
        line.style.height = firstBoxBottom < 0 && (Math.abs((firstBoxBottom))) + "px"
        line.style.display = "block"
    }
})







const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#last-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}