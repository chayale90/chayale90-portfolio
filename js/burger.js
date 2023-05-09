let isNavOpen = false;

function burgerInit() {
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");

  burger_btn.addEventListener("click", function () {
    // alert("burger work");
    if (!isNavOpen) {
      burger_btn.innerHTML = `   
      <i class="fa fa-times" aria-hidden="true"></i>`
      // קודם דואג שיוצג
      nav_open.style.display = "block";
      setTimeout(function () {
        // מכיוון שאחנו רוצים להוסיף לו קלאס
        // ושזה יתבצע באנימציה נצטרך כמה מאיות שניה
        // אחרי התצוגה להוסיף את הקלאס
        nav_open.classList.add("nav_open");
      }, 100);
      isNavOpen = true;

    }
    else {
      // מוריד קלאס מסי אס אס 
      nav_open.classList.remove("nav_open");
      burger_btn.innerHTML = `   
      <i class="fa fa-bars" aria-hidden="true"></i>
      `
      setTimeout(function () {
        // ורק לאחר זמן האנימציה אחרי שהיא מסתיימת אנחנו 
        // נעלים את התגית עצמה לחלוטין כדי 
        // שלא נוכל ללחוץ עליה
        nav_open.style.display = "none";

      }, 600)

      isNavOpen = false;

    }
  })
}



burgerInit();