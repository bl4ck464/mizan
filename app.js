/* =========================================================
   MarocCalc v1.0
   Banking Calculators
========================================================= */

const state = {
  language: localStorage.getItem("maroccalc-language") || "en",
  dark: localStorage.getItem("maroccalc-theme") === "dark"
};


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

  en: {

    subtitle: "Moroccan finance toolkit",

    navHome: "Home",
    navBanking: "Banking",
    navGuide: "Guide",

    heroTitle: "Your Moroccan finance toolkit",
    heroText: "Simple calculators for everyday financial decisions.",

    bankingTitle: "Banking",
    bankingDescription: "Useful loan and financing calculators.",

    guideTitle: "Finance Guide",
    guideDescription: "Simple explanations of common financial concepts.",

    loanTitle: "Loan Payment",
    loanDescription: "Calculate monthly loan payments and total interest.",

    debtTitle: "Debt Ratio",
    debtDescription: "Estimate your monthly debt burden.",

    capacityTitle: "Borrowing Capacity",
    capacityDescription: "Estimate an affordable loan amount.",

    earlyTitle: "Early Repayment",
    earlyDescription: "Compare continuing a loan with repaying early.",

    compareTitle: "Loan Comparison",
    compareDescription: "Compare two financing offers.",

    guideLoan: "Bank Loans",
    guideLoanText:
      "A loan allows you to borrow money and repay it over time, usually with interest.",

    guideInterest: "Interest Rate",
    guideInterestText:
      "The interest rate determines the cost of borrowing.",

    guideDebt: "Debt Ratio",
    guideDebtText:
      "Debt ratio compares monthly debt payments with income.",

    guideGuarantees: "Guarantees",
    guideGuaranteesText:
      "Guarantees and warranties depend on the product, contract and applicable rules.",

    advertisement: "Advertisement",

    disclaimer:
      "Calculations are estimates and should not be considered financial advice.",

    amount: "Loan amount",
    interest: "Interest rate",
    duration: "Duration",
    years: "years",
    months: "months",
    income: "Monthly income",
    existingDebt: "Existing monthly debt",
    newPayment: "New loan payment",
    desiredRatio: "Desired debt ratio",
    remainingBalance: "Remaining balance",
    remainingMonths: "Remaining months",

    calculate: "Calculate",
    reset: "Reset",

    monthlyPayment: "Monthly payment",
    totalRepayment: "Total repayment",
    totalInterest: "Total interest",

    debtRatio: "Debt ratio",
    monthlyDebt: "Monthly debt",
    estimatedCapacity: "Estimated borrowing capacity",

    earlyInterest: "Remaining interest",
    savedInterest: "Potential interest saved",

    loanA: "Loan A",
    loanB: "Loan B",

    maxLoan: "Estimated maximum loan",

    resultNote:
      "This is an estimate. Actual bank offers may differ depending on your profile, fees, insurance and contract.",

    enterValues:
      "Please enter valid positive values."

  },


  fr: {

    subtitle: "Outil financier marocain",

    navHome: "Accueil",
    navBanking: "Banque",
    navGuide: "Guide",

    heroTitle: "Votre outil financier marocain",
    heroText: "Des calculateurs simples pour vos décisions financières.",

    bankingTitle: "Banque",
    bankingDescription: "Calculateurs de prêts et de financement.",

    guideTitle: "Guide financier",
    guideDescription: "Explications simples des concepts financiers.",

    loanTitle: "Mensualité de prêt",
    loanDescription: "Calculez la mensualité et le coût total du prêt.",

    debtTitle: "Taux d'endettement",
    debtDescription: "Estimez votre niveau d'endettement mensuel.",

    capacityTitle: "Capacité d'emprunt",
    capacityDescription: "Estimez le montant de prêt possible.",

    earlyTitle: "Remboursement anticipé",
    earlyDescription: "Comparez la poursuite du prêt avec un remboursement anticipé.",

    compareTitle: "Comparer les prêts",
    compareDescription: "Comparez deux offres de financement.",

    guideLoan: "Prêts bancaires",
    guideLoanText:
      "Un prêt permet d'emprunter de l'argent et de le rembourser dans le temps, généralement avec des intérêts.",

    guideInterest: "Taux d'intérêt",
    guideInterestText:
      "Le taux d'intérêt détermine le coût de l'emprunt.",

    guideDebt: "Taux d'endettement",
    guideDebtText:
      "Le taux d'endettement compare les mensualités de dette aux revenus.",

    guideGuarantees: "Garanties",
    guideGuaranteesText:
      "Les garanties dépendent du produit, du contrat et des règles applicables.",

    advertisement: "Publicité",

    disclaimer:
      "Les calculs sont des estimations et ne constituent pas un conseil financier.",

    amount: "Montant du prêt",
    interest: "Taux d'intérêt",
    duration: "Durée",
    years: "ans",
    months: "mois",
    income: "Revenu mensuel",
    existingDebt: "Dettes mensuelles existantes",
    newPayment: "Nouvelle mensualité",
    desiredRatio: "Taux d'endettement souhaité",
    remainingBalance: "Capital restant",
    remainingMonths: "Mois restants",

    calculate: "Calculer",
    reset: "Réinitialiser",

    monthlyPayment: "Mensualité",
    totalRepayment: "Remboursement total",
    totalInterest: "Intérêts totaux",

    debtRatio: "Taux d'endettement",
    monthlyDebt: "Dette mensuelle",
    estimatedCapacity: "Capacité d'emprunt estimée",

    earlyInterest: "Intérêts restants",
    savedInterest: "Économie potentielle d'intérêts",

    loanA: "Prêt A",
    loanB: "Prêt B",

    maxLoan: "Montant maximal estimé",

    resultNote:
      "Il s'agit d'une estimation. Les offres bancaires réelles peuvent varier selon votre profil, les frais, l'assurance et le contrat.",

    enterValues:
      "Veuillez saisir des valeurs positives valides."

  },


  ar: {

    subtitle: "حاسبات مالية مغربية",

    navHome: "الرئيسية",
    navBanking: "البنوك",
    navGuide: "الدليل",

    heroTitle: "أدواتك المالية المغربية",
    heroText: "حاسبات بسيطة لاتخاذ قرارات مالية يومية.",

    bankingTitle: "الحسابات البنكية",
    bankingDescription: "حاسبات القروض والتمويل.",

    guideTitle: "الدليل المالي",
    guideDescription: "شرح مبسط للمفاهيم المالية.",

    loanTitle: "قسط القرض",
    loanDescription: "احسب القسط الشهري والتكلفة الإجمالية للقرض.",

    debtTitle: "نسبة المديونية",
    debtDescription: "احسب نسبة الديون مقارنة بالدخل.",

    capacityTitle: "قدرة الاقتراض",
    capacityDescription: "قدّر مبلغ القرض الذي يمكنك تحمله.",

    earlyTitle: "السداد المبكر",
    earlyDescription: "قارن بين الاستمرار في القرض والسداد المبكر.",

    compareTitle: "مقارنة القروض",
    compareDescription: "قارن بين عرضي تمويل.",

    guideLoan: "القروض البنكية",
    guideLoanText:
      "القرض يسمح لك باقتراض المال وسداده مع مرور الوقت، عادة مع الفائدة.",

    guideInterest: "سعر الفائدة",
    guideInterestText:
      "سعر الفائدة يحدد تكلفة الاقتراض.",

    guideDebt: "نسبة المديونية",
    guideDebtText:
      "تقارن نسبة المديونية بين الأقساط الشهرية والدخل.",

    guideGuarantees: "الضمانات",
    guideGuaranteesText:
      "تختلف الضمانات حسب المنتج والعقد والقواعد المعمول بها.",

    advertisement: "إعلان",

    disclaimer:
      "الحسابات تقديرية ولا تعتبر استشارة مالية.",

    amount: "مبلغ القرض",
    interest: "سعر الفائدة",
    duration: "المدة",
    years: "سنوات",
    months: "أشهر",
    income: "الدخل الشهري",
    existingDebt: "الديون الشهرية الحالية",
    newPayment: "قسط القرض الجديد",
    desiredRatio: "نسبة المديونية المطلوبة",
    remainingBalance: "الرصيد المتبقي",
    remainingMonths: "الأشهر المتبقية",

    calculate: "احسب",
    reset: "إعادة ضبط",

    monthlyPayment: "القسط الشهري",
    totalRepayment: "إجمالي السداد",
    totalInterest: "إجمالي الفوائد",

    debtRatio: "نسبة المديونية",
    monthlyDebt: "الدين الشهري",
    estimatedCapacity: "قدرة الاقتراض التقديرية",

    earlyInterest: "الفوائد المتبقية",
    savedInterest: "الفوائد التي يمكن توفيرها",

    loanA: "القرض A",
    loanB: "القرض B",

    maxLoan: "أقصى مبلغ تقديري",

    resultNote:
      "هذه مجرد تقديرات. قد تختلف عروض البنوك الفعلية حسب الملف الشخصي والرسوم والتأمين والعقد.",

    enterValues:
      "يرجى إدخال قيم صحيحة وموجبة."
  }

};


/* =========================================================
   HELPERS
========================================================= */

function t(key) {
  return translations[state.language][key] || key;
}


function money(value) {

  if (!Number.isFinite(value)) {
    return "—";
  }

  return new Intl.NumberFormat(
    state.language === "ar"
      ? "ar-MA"
      : "fr-MA",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  ).format(value) + " MAD";
}


function numberValue(id) {

  const element = document.getElementById(id);

  if (!element) {
    return NaN;
  }

  return Number(element.value);
}


function valid(...values) {
  return values.every(
    value => Number.isFinite(value) && value > 0
  );
}


/* =========================================================
   LOAN FORMULA
========================================================= */

function loanPayment(principal, annualRate, months) {

  const monthlyRate = annualRate / 100 / 12;

  if (monthlyRate === 0) {
    return principal / months;
  }

  return (
    principal *
    monthlyRate *
    Math.pow(1 + monthlyRate, months)
  ) /
  (
    Math.pow(1 + monthlyRate, months) - 1
  );
}


/* =========================================================
   NAVIGATION
========================================================= */

function showPage(pageName) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active-page");
  });

  const target = document.getElementById(
    `page-${pageName}`
  );

  if (target) {
    target.classList.add("active-page");
  }

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle(
      "active",
      tab.dataset.page === pageName
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


document.querySelectorAll(".tab").forEach(tab => {

  tab.addEventListener("click", () => {
    showPage(tab.dataset.page);
  });

});


document.addEventListener("click", event => {

  const button = event.target.closest("[data-open]");

  if (!button) {
    return;
  }

  openCalculator(button.dataset.open);

});


/* =========================================================
   CALCULATOR ENGINE
========================================================= */

const calculatorMeta = {

  loan: {
    icon: "💳",
    title: "loanTitle",
    description: "loanDescription"
  },

  debt: {
    icon: "📊",
    title: "debtTitle",
    description: "debtDescription"
  },

  capacity: {
    icon: "💰",
    title: "capacityTitle",
    description: "capacityDescription"
  },

  early: {
    icon: "🔄",
    title: "earlyTitle",
    description: "earlyDescription"
  },

  compare: {
    icon: "⚖️",
    title: "compareTitle",
    description: "compareDescription"
  }

};


function openCalculator(type) {

  const meta = calculatorMeta[type];

  if (!meta) {
    return;
  }

  showPage("calculator");

  document.getElementById("calculatorIcon").textContent =
    meta.icon;

  document.getElementById("calculatorTitle").textContent =
    t(meta.title);

  document.getElementById("calculatorDescription").textContent =
    t(meta.description);

  const container =
    document.getElementById("calculatorContent");

  container.innerHTML = getCalculatorHTML(type);

  bindCalculator(type);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   CALCULATOR HTML
========================================================= */

function getCalculatorHTML(type) {

  if (type === "loan") {

    return `

      <div class="form-group">
        <label for="loanAmount">
          ${t("amount")}
        </label>

        <div class="input-money">
          <input
            id="loanAmount"
            type="number"
            min="0"
            step="100"
            placeholder="200000"
          >

          <span>MAD</span>
        </div>
      </div>


      <div class="form-group">

        <label for="loanRate">
          ${t("interest")}
        </label>

        <div class="input-money">

          <input
            id="loanRate"
            type="number"
            min="0"
            step="0.01"
            placeholder="5"
          >

          <span>%</span>

        </div>

      </div>


      <div class="form-group">

        <label for="loanYears">
          ${t("duration")}
        </label>

        <div class="input-money">

          <input
            id="loanYears"
            type="number"
            min="1"
            step="1"
            placeholder="20"
          >

          <span>${t("years")}</span>

        </div>

      </div>


      <button
        id="calculateLoan"
        class="primary-btn"
        type="button"
      >
        ${t("calculate")}
      </button>


      <div id="loanResult"></div>

    `;
  }


  if (type === "debt") {

    return `

      <div class="form-group">

        <label for="debtIncome">
          ${t("income")}
        </label>

        <div class="input-money">

          <input
            id="debtIncome"
            type="number"
            min="0"
            placeholder="8500"
          >

          <span>MAD</span>

        </div>

      </div>


      <div class="form-group">

        <label for="existingDebt">
          ${t("existingDebt")}
        </label>

        <div class="input-money">

          <input
            id="existingDebt"
            type="number"
            min="0"
            placeholder="1500"
          >

          <span>MAD</span>

        </div>

      </div>


      <div class="form-group">

        <label for="newPayment">
          ${t("newPayment")}
        </label>

        <div class="input-money">

          <input
            id="newPayment"
            type="number"
            min="0"
            placeholder="1300"
          >

          <span>MAD</span>

        </div>

      </div>


      <button
        id="calculateDebt"
        class="primary-btn"
        type="button"
      >
        ${t("calculate")}
      </button>


      <div id="debtResult"></div>

    `;
  }


  if (type === "capacity") {

    return `

      <div class="form-group">

        <label for="capacityIncome">
          ${t("income")}
        </label>

        <div class="input-money">

          <input
            id="capacityIncome"
            type="number"
            min="0"
            placeholder="8500"
          >

          <span>MAD</span>

        </div>

      </div>


      <div class="form-group">

        <label for="capacityRatio">
          ${t("desiredRatio")}
        </label>

        <div class="input-money">

          <input
            id="capacityRatio"
            type="number"
            min="1"
            max="100"
            step="0.1"
            placeholder="33"
          >

          <span>%</span>

        </div>

      </div>


      <div class="form-group">

        <label for="capacityRate">
          ${t("interest")}
        </label>

        <div class="input-money">

          <input
            id="capacityRate"
            type="number"
            min="0"
            step="0.01"
            placeholder="5"
          >

          <span>%</span>

        </div>

      </div>


      <div class="form-group">

        <label for="capacityYears">
          ${t("duration")}
        </label>

        <div class="input-money">

          <input
            id="capacityYears"
            type="number"
            min="1"
            placeholder="20"
          >

          <span>${t("years")}</span>

        </div>

      </div>


      <button
        id="calculateCapacity"
        class="primary-btn"
        type="button"
      >
        ${t("calculate")}
      </button>


      <div id="capacityResult"></div>

    `;
  }


  if (type === "early") {

    return `

      <div class="form-group">

        <label for="remainingBalance">
          ${t("remainingBalance")}
        </label>

        <div class="input-money">

          <input
            id="remainingBalance"
            type="number"
            min="0"
            placeholder="150000"
          >

          <span>MAD</span>

        </div>

      </div>


      <div class="form-group">

        <label for="earlyRate">
          ${t("interest")}
        </label>

        <div class="input-money">

          <input
            id="earlyRate"
            type="number"
            min="0"
            step="0.01"
            placeholder="5"
          >

          <span>%</span>

        </div>

      </div>


      <div class="form-group">

        <label for="remainingMonths">
          ${t("remainingMonths")}
        </label>

        <div class="input-money">

          <input
            id="remainingMonths"
            type="number"
            min="1"
            placeholder="120"
          >

          <span>${t("months")}</span>

        </div>

      </div>


      <button
        id="calculateEarly"
        class="primary-btn"
        type="button"
      >
        ${t("calculate")}
      </button>


      <div id="earlyResult"></div>

    `;
  }


  if (type === "compare") {

    return `

      <h3>${t("loanA")}</h3>

      <div class="form-group">

        <label for="compareAmountA">
          ${t("amount")}
        </label>

        <div class="input-money">

          <input
            id="compareAmountA"
            type="number"
            placeholder="200000"
          >

          <span>MAD</span>

        </div>

      </div>


      <div class="form-group">

        <label for="compareRateA">
          ${t("interest")}
        </label>

        <div class="input-money">

          <input
            id="compareRateA"
            type="number"
            step="0.01"
            placeholder="5"
          >

          <span>%</span>

        </div>

      </div>


      <div class="form-group">

        <label for="compareYearsA">
          ${t("duration")}
        </label>

        <div class="input-money">

          <input
            id="compareYearsA"
            type="number"
            placeholder="20"
          >

          <span>${t("years")}</span>

        </div>

      </div>


      <h3>${t("loanB")}</h3>

      <div class="form-group">

        <label for="compareAmountB">
          ${t("amount")}
        </label>

        <div class="input-money">

          <input
            id="compareAmountB"
            type="number"
            placeholder="200000"
          >

          <span>MAD</span>

        </div>

      </div>


      <div class="form-group">

        <label for="compareRateB">
          ${t("interest")}
        </label>

        <div class="input-money">

          <input
            id="compareRateB"
            type="number"
            step="0.01"
            placeholder="5.5"
          >

          <span>%</span>

        </div>

      </div>


      <div class="form-group">

        <label for="compareYearsB">
          ${t("duration")}
        </label>

        <div class="input-money">

          <input
            id="compareYearsB"
            type="number"
            placeholder="20"
          >

          <span>${t("years")}</span>

        </div>

      </div>


      <button
        id="calculateCompare"
        class="primary-btn"
        type="button"
      >
        ${t("calculate")}
      </button>


      <div id="compareResult"></div>

    `;
  }


  return "";
}


/* =========================================================
   CALCULATOR EVENTS
========================================================= */

function bindCalculator(type) {

  if (type === "loan") {

    document
      .getElementById("calculateLoan")
      .addEventListener("click", calculateLoan);

  }


  if (type === "debt") {

    document
      .getElementById("calculateDebt")
      .addEventListener("click", calculateDebt);

  }


  if (type === "capacity") {

    document
      .getElementById("calculateCapacity")
      .addEventListener(
        "click",
        calculateCapacity
      );

  }


  if (type === "early") {

    document
      .getElementById("calculateEarly")
      .addEventListener(
        "click",
        calculateEarly
      );

  }


  if (type === "compare") {

    document
      .getElementById("calculateCompare")
      .addEventListener(
        "click",
        calculateCompare
      );

  }

}


/* =========================================================
   LOAN PAYMENT
========================================================= */

function calculateLoan() {

  const amount = numberValue("loanAmount");
  const rate = numberValue("loanRate");
  const years = numberValue("loanYears");

  if (!valid(amount, years) || rate < 0) {

    showError("loanResult");

    return;
  }

  const months = years * 12;

  const monthly =
    loanPayment(
      amount,
      rate,
      months
    );

  const total =
    monthly * months;

  const interest =
    total - amount;


  document.getElementById("loanResult").innerHTML = `

    <div class="result">

      <div class="result-title">
        ${t("monthlyPayment")}
      </div>

      <div class="result-main">
        ${money(monthly)}
      </div>

      <div class="result-row">
        <span>${t("totalRepayment")}</span>
        <strong>${money(total)}</strong>
      </div>

      <div class="result-row">
        <span>${t("totalInterest")}</span>
        <strong>${money(interest)}</strong>
      </div>

      <div class="info-box">
        ${t("resultNote")}
      </div>

    </div>

  `;
}


/* =========================================================
   DEBT RATIO
========================================================= */

function calculateDebt() {

  const income = numberValue("debtIncome");
  const existing = numberValue("existingDebt");
  const payment = numberValue("newPayment");

  if (!valid(income)) {

    showError("debtResult");

    return;
  }

  const totalDebt =
    Math.max(0, existing) +
    Math.max(0, payment);

  const ratio =
    (totalDebt / income) * 100;


  let message = "";

  if (ratio <= 33) {
    message = "✓";
  }
  else if (ratio <= 40) {
    message = "⚠";
  }
  else {
    message = "!";
  }


  document.getElementById("debtResult").innerHTML = `

    <div class="result">

      <div class="result-title">
        ${t("debtRatio")}
      </div>

      <div class="result-main">
        ${ratio.toFixed(2)}%
        ${message}
      </div>

      <div class="result-row">
        <span>${t("monthlyDebt")}</span>
        <strong>${money(totalDebt)}</strong>
      </div>

      <div class="result-row">
        <span>${t("income")}</span>
        <strong>${money(income)}</strong>
      </div>

      <div class="info-box">
        ${t("resultNote")}
      </div>

    </div>

  `;
}


/* =========================================================
   BORROWING CAPACITY
========================================================= */

function calculateCapacity() {

  const income =
    numberValue("capacityIncome");

  const ratio =
    numberValue("capacityRatio");

  const rate =
    numberValue("capacityRate");

  const years =
    numberValue("capacityYears");


  if (
    !valid(income, ratio, years) ||
    rate < 0 ||
    ratio > 100
  ) {

    showError("capacityResult");

    return;
  }


  const affordablePayment =
    income * (ratio / 100);

  const months =
    years * 12;

  const monthlyRate =
    rate / 100 / 12;


  let capacity;


  if (monthlyRate === 0) {

    capacity =
      affordablePayment * months;

  }
  else {

    capacity =
      affordablePayment *
      (
        (1 -
          Math.pow(
            1 + monthlyRate,
            -months
          )
        ) /
        monthlyRate
      );

  }


  document.getElementById("capacityResult").innerHTML = `

    <div class="result">

      <div class="result-title">
        ${t("estimatedCapacity")}
      </div>

      <div class="result-main">
        ${money(capacity)}
      </div>

      <div class="result-row">
        <span>${t("newPayment")}</span>
        <strong>${money(affordablePayment)}</strong>
      </div>

      <div class="result-row">
        <span>${t("desiredRatio")}</span>
        <strong>${ratio.toFixed(2)}%</strong>
      </div>

      <div class="info-box">
        ${t("resultNote")}
      </div>

    </div>

  `;
}


/* =========================================================
   EARLY REPAYMENT
========================================================= */

function calculateEarly() {

  const balance =
    numberValue("remainingBalance");

  const rate =
    numberValue("earlyRate");

  const months =
    numberValue("remainingMonths");


  if (!valid(balance, months) || rate < 0) {

    showError("earlyResult");

    return;
  }


  const monthly =
    loanPayment(
      balance,
      rate,
      months
    );


  const total =
    monthly * months;

  const interest =
    total - balance;


  document.getElementById("earlyResult").innerHTML = `

    <div class="result">

      <div class="result-title">
        ${t("earlyInterest")}
      </div>

      <div class="result-main">
        ${money(interest)}
      </div>

      <div class="result-row">
        <span>${t("monthlyPayment")}</span>
        <strong>${money(monthly)}</strong>
      </div>

      <div class="result-row">
        <span>${t("totalRepayment")}</span>
        <strong>${money(total)}</strong>
      </div>

      <div class="info-box">
        ${t("resultNote")}
      </div>

    </div>

  `;
}


/* =========================================================
   LOAN COMPARISON
========================================================= */

function calculateCompare() {

  const amountA =
    numberValue("compareAmountA");

  const rateA =
    numberValue("compareRateA");

  const yearsA =
    numberValue("compareYearsA");


  const amountB =
    numberValue("compareAmountB");

  const rateB =
    numberValue("compareRateB");

  const yearsB =
    numberValue("compareYearsB");


  if (
    !valid(
      amountA,
      yearsA,
      amountB,
      yearsB
    ) ||
    rateA < 0 ||
    rateB < 0
  ) {

    showError("compareResult");

    return;
  }


  const monthlyA =
    loanPayment(
      amountA,
      rateA,
      yearsA * 12
    );

  const monthlyB =
    loanPayment(
      amountB,
      rateB,
      yearsB * 12
    );


  const totalA =
    monthlyA * yearsA * 12;

  const totalB =
    monthlyB * yearsB * 12;


  const interestA =
    totalA - amountA;

  const interestB =
    totalB - amountB;


  document.getElementById("compareResult").innerHTML = `

    <div class="result">

      <div class="result-title">
        ${t("loanA")}
      </div>

      <div class="result-main">
        ${money(monthlyA)}
      </div>

      <div class="result-row">
        <span>${t("totalRepayment")}</span>
        <strong>${money(totalA)}</strong>
      </div>

      <div class="result-row">
        <span>${t("totalInterest")}</span>
        <strong>${money(interestA)}</strong>
      </div>


      <div class="result-title" style="margin-top:20px;">
        ${t("loanB")}
      </div>

      <div class="result-main">
        ${money(monthlyB)}
      </div>

      <div class="result-row">
        <span>${t("totalRepayment")}</span>
        <strong>${money(totalB)}</strong>
      </div>

      <div class="result-row">
        <span>${t("totalInterest")}</span>
        <strong>${money(interestB)}</strong>
      </div>

      <div class="info-box">
        ${t("resultNote")}
      </div>

    </div>

  `;
}


/* =========================================================
   ERROR
========================================================= */

function showError(id) {

  const element =
    document.getElementById(id);

  if (!element) {
    return;
  }

  element.innerHTML = `

    <div class="info-box">

      ⚠️ ${t("enterValues")}

    </div>

  `;
}


/* =========================================================
   LANGUAGE
========================================================= */

function applyLanguage() {

  document.documentElement.lang =
    state.language;

  document.documentElement.dir =
    state.language === "ar"
      ? "rtl"
      : "ltr";


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (translations[state.language][key]) {

        element.textContent =
          translations[state.language][key];

      }

    });


  document.getElementById("languageSelect").value =
    state.language;


  localStorage.setItem(
    "maroccalc-language",
    state.language
  );
}


document
  .getElementById("languageSelect")
  .addEventListener("change", event => {

    state.language =
      event.target.value;

    applyLanguage();

    /*
      If currently inside a calculator,
      rebuild it so its labels also change.
    */

    const calculatorPage =
      document.getElementById("page-calculator");

    if (
      calculatorPage.classList.contains(
        "active-page"
      )
    ) {

      const title =
        document.getElementById(
          "calculatorTitle"
        ).textContent;

      const calculatorType =
        Object.keys(calculatorMeta)
          .find(
            key =>
              t(calculatorMeta[key].title) === title
          );

      if (calculatorType) {
        openCalculator(calculatorType);
      }
    }

  });


/* =========================================================
   DARK MODE
========================================================= */

function applyTheme() {

  document.documentElement.dataset.theme =
    state.dark
      ? "dark"
      : "light";


  document.getElementById("themeButton").textContent =
    state.dark
      ? "☀️"
      : "🌙";


  localStorage.setItem(
    "maroccalc-theme",
    state.dark
      ? "dark"
      : "light"
  );
}


document
  .getElementById("themeButton")
  .addEventListener("click", () => {

    state.dark = !state.dark;

    applyTheme();

  });


/* =========================================================
   INITIALIZE
========================================================= */

applyLanguage();
applyTheme();
