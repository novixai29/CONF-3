"use strict";


/* =========================================================
   CONF-003 — MARGIN NOTES
   هوامش المعرفة

   جميع بيانات الزبون من هنا فقط
========================================================= */

const CONFERENCE = {

  name:
    "المؤتمر العربي للبحث والابتكار 2027",

  shortName:
    "ARI 2027",

  tagline:
    "المعرفة التي تتحول إلى أثر",

  organizer:
    "المركز العربي للبحث العلمي",


  startAt:
    "2027-04-22T09:00:00+03:00",

  endAt:
    "2027-04-22T17:00:00+03:00",

  timeZone:
    "Asia/Baghdad",


  venue:
    "جامعة الموصل — قاعة المؤتمرات الكبرى",

  city:
    "الموصل",

  country:
    "العراق",


  /*
    اتركه فارغاً ليتم إنشاء رابط
    Google Maps تلقائياً.
  */
  mapsUrl:
    "",


  /*
    رابط التسجيل الخارجي.
    إذا تركته فارغاً يختفي زر التسجيل.
  */
  registrationUrl:
    "https://example.com/register",


  websiteUrl:
    "https://example.com",


  /*
    إذا بقي فارغاً يتم استخدام
    رابط الدعوة الحالي.
  */
  shareUrl:
    "",


  researchers: [

    {
      name:
        "د. سارة محمود",

      specialty:
        "البحث العلمي والابتكار",

      organization:
        "جامعة بغداد"
    },

    {
      name:
        "أ.د. أحمد ياسين",

      specialty:
        "التقنيات البحثية الحديثة",

      organization:
        "جامعة الموصل"
    },

    {
      name:
        "د. لينا عبد الرحمن",

      specialty:
        "نقل المعرفة والتطوير",

      organization:
        "المركز العربي للبحث العلمي"
    }

  ],


  themes: [

    {
      time:
        "10:00",

      title:
        "البحث من الفكرة إلى الأثر",

      description:
        "نقاش حول كيفية تحويل الأسئلة البحثية إلى مشاريع ذات قيمة علمية ومجتمعية واضحة."
    },

    {
      time:
        "12:30",

      title:
        "أدوات البحث في عصر جديد",

      description:
        "قراءة في تطور وسائل جمع وتحليل المعرفة وأثر التقنيات الحديثة على الباحث."
    },

    {
      time:
        "14:30",

      title:
        "كيف تنتقل المعرفة؟",

      description:
        "جلسة حول نشر نتائج البحث وربط الجامعات والمراكز العلمية بالمجتمع والمؤسسات."
    }

  ]

};



/* =========================================================
   ELEMENTS
========================================================= */

const elements = {

  heroCitation:
    document.getElementById(
      "heroCitation"
    ),

  heroVenue:
    document.getElementById(
      "heroVenue"
    ),


  fullDate:
    document.getElementById(
      "fullDate"
    ),

  fullTime:
    document.getElementById(
      "fullTime"
    ),

  paperCity:
    document.getElementById(
      "paperCity"
    ),


  statementDays:
    document.getElementById(
      "statementDays"
    ),

  days:
    document.getElementById(
      "days"
    ),

  hours:
    document.getElementById(
      "hours"
    ),

  minutes:
    document.getElementById(
      "minutes"
    ),

  seconds:
    document.getElementById(
      "seconds"
    ),

  countdownMessage:
    document.getElementById(
      "countdownMessage"
    ),


  researchersList:
    document.getElementById(
      "researchersList"
    ),

  abstractsList:
    document.getElementById(
      "abstractsList"
    ),


  venueCity:
    document.getElementById(
      "venueCity"
    ),

  venueCountry:
    document.getElementById(
      "venueCountry"
    ),


  mapButton:
    document.getElementById(
      "mapButton"
    ),

  secondaryMapButton:
    document.getElementById(
      "secondaryMapButton"
    ),

  registerButton:
    document.getElementById(
      "registerButton"
    ),

  websiteButton:
    document.getElementById(
      "websiteButton"
    ),


  calendarButton:
    document.getElementById(
      "calendarButton"
    ),

  shareButton:
    document.getElementById(
      "shareButton"
    ),

  topShareButton:
    document.getElementById(
      "topShareButton"
    ),


  footerYear:
    document.getElementById(
      "footerYear"
    ),

  statusMessage:
    document.getElementById(
      "statusMessage"
    )

};



/* =========================================================
   DATES
========================================================= */

const START_DATE =
  new Date(
    CONFERENCE.startAt
  );


const END_DATE =
  new Date(
    CONFERENCE.endAt
  );


let countdownTimer = null;



/* =========================================================
   INITIAL CONTENT
========================================================= */

function populateConference() {

  document
    .querySelectorAll(
      "[data-field]"
    )
    .forEach((element) => {

      const field =
        element.dataset.field;


      if (
        Object.prototype.hasOwnProperty.call(
          CONFERENCE,
          field
        )
      ) {

        element.textContent =
          CONFERENCE[field];

      }

    });


  elements.heroCitation.textContent =
    `${CONFERENCE.city}، ${CONFERENCE.country} — ${formatArabicDate(
      START_DATE
    )} — ${formatArabicTime(START_DATE)}`;


  elements.heroVenue.textContent =
    CONFERENCE.venue;


  elements.fullDate.textContent =
    formatArabicFullDate(
      START_DATE
    );


  elements.fullTime.textContent =
    `${formatArabicTime(START_DATE)} — ${formatArabicTime(END_DATE)}`;


  elements.paperCity.textContent =
    CONFERENCE.city;


  elements.venueCity.textContent =
    CONFERENCE.city;


  elements.venueCountry.textContent =
    CONFERENCE.country;


  elements.footerYear.textContent =
    START_DATE.getFullYear();


  configureLinks();

  updateMetadata();

  addStructuredData();

}



/* =========================================================
   ARABIC DATE FORMAT
========================================================= */

function formatArabicDate(date) {

  return new Intl.DateTimeFormat(
    "ar-IQ",
    {
      timeZone:
        CONFERENCE.timeZone,

      day:
        "numeric",

      month:
        "long",

      year:
        "numeric"
    }
  ).format(date);

}



function formatArabicFullDate(date) {

  return new Intl.DateTimeFormat(
    "ar-IQ",
    {
      timeZone:
        CONFERENCE.timeZone,

      weekday:
        "long",

      day:
        "numeric",

      month:
        "long",

      year:
        "numeric"
    }
  ).format(date);

}



function formatArabicTime(date) {

  return new Intl.DateTimeFormat(
    "ar-IQ",
    {
      timeZone:
        CONFERENCE.timeZone,

      hour:
        "numeric",

      minute:
        "2-digit",

      hour12:
        true
    }
  ).format(date);

}



/* =========================================================
   RESEARCHERS
========================================================= */

function renderResearchers() {

  elements.researchersList.innerHTML =
    "";


  CONFERENCE.researchers.forEach(
    (researcher, index) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "researcher reveal";


      article.innerHTML = `

        <span class="researcher__number">
          [${pad(index + 1)}]
        </span>

        <h3>
          ${escapeHTML(researcher.name)}
        </h3>

        <p class="researcher__specialty">
          ${escapeHTML(researcher.specialty)}
        </p>

        <p class="researcher__organization">
          ${escapeHTML(researcher.organization)}
        </p>

      `;


      elements.researchersList
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   THEMES
========================================================= */

function renderThemes() {

  elements.abstractsList.innerHTML =
    "";


  CONFERENCE.themes.forEach(
    (theme, index) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "abstract-card reveal";


      article.innerHTML = `

        <div class="abstract-card__reference">

          <span>
            ملخص ${pad(index + 1)}
          </span>

          <span>
            ${escapeHTML(theme.time)}
          </span>

        </div>

        <h3>
          ${escapeHTML(theme.title)}
        </h3>

        <p>
          ${escapeHTML(theme.description)}
        </p>

      `;


      elements.abstractsList
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   MAP
========================================================= */

function getMapUrl() {

  const customUrl =
    CONFERENCE.mapsUrl?.trim();


  if (customUrl) {

    return customUrl;

  }


  const query =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );

}



/* =========================================================
   LINKS
========================================================= */

function configureLinks() {

  const mapUrl =
    getMapUrl();


  elements.mapButton.href =
    mapUrl;


  elements.secondaryMapButton.href =
    mapUrl;


  const registration =
    CONFERENCE.registrationUrl?.trim();


  if (registration) {

    elements.registerButton.href =
      registration;

  } else {

    elements.registerButton.hidden =
      true;

  }


  const website =
    CONFERENCE.websiteUrl?.trim();


  if (website) {

    elements.websiteButton.href =
      website;

  } else {

    elements.websiteButton.hidden =
      true;

  }

}



/* =========================================================
   COUNTDOWN
========================================================= */

function startCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



function updateCountdown() {

  const now =
    new Date();


  const difference =
    START_DATE.getTime() -
    now.getTime();


  if (difference <= 0) {

    handleStartedConference(
      now
    );

    return;

  }


  const totalSeconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (totalSeconds % 86400) /
      3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) /
      60
    );


  const seconds =
    totalSeconds % 60;


  elements.statementDays.textContent =
    formatNumber(days);


  elements.days.textContent =
    formatNumber(days);


  elements.hours.textContent =
    formatNumber(hours);


  elements.minutes.textContent =
    formatNumber(minutes);


  elements.seconds.textContent =
    formatNumber(seconds);

}



/* =========================================================
   CONFERENCE STARTED
========================================================= */

function handleStartedConference(now) {

  if (countdownTimer) {

    clearInterval(
      countdownTimer
    );

    countdownTimer =
      null;

  }


  elements.statementDays.textContent =
    "٠";


  elements.days.textContent =
    "٠٠";


  elements.hours.textContent =
    "٠٠";


  elements.minutes.textContent =
    "٠٠";


  elements.seconds.textContent =
    "٠٠";


  if (
    now.getTime() <=
    END_DATE.getTime()
  ) {

    elements.countdownMessage.textContent =
      "المؤتمر منعقد الآن.";


    elements.statusMessage.textContent =
      "بدأ المؤتمر.";

  } else {

    elements.countdownMessage.textContent =
      "انتهى موعد هذا المؤتمر.";


    elements.statusMessage.textContent =
      "انتهى المؤتمر.";

  }

}



/* =========================================================
   MARGIN INDEX / ACTIVE SECTION
========================================================= */

function setupMarginNavigation() {

  const sections =
    Array.from(
      document.querySelectorAll(
        ".observed-section"
      )
    );


  const links =
    Array.from(
      document.querySelectorAll(
        ".margin-index__item"
      )
    );


  if (
    !sections.length ||
    !links.length
  ) {
    return;
  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        const visible =
          entries

            .filter(
              entry =>
                entry.isIntersecting
            )

            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );


        if (!visible.length) {
          return;
        }


        const activeId =
          visible[0]
            .target
            .dataset
            .sectionId;


        links.forEach(
          (link) => {

            link.classList.toggle(
              "is-active",
              link.dataset.section ===
                activeId
            );

          }
        );

      },

      {
        threshold:
          [
            0.15,
            0.35,
            0.55
          ],

        rootMargin:
          "-20% 0px -38% 0px"
      }
    );


  sections.forEach(
    section =>
      observer.observe(section)
  );

}



/* =========================================================
   SCROLL REVEALS
========================================================= */

function setupRevealObserver() {

  const items =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    prefersReducedMotion()
  ) {

    items.forEach(
      item =>
        item.classList.add(
          "is-visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            entry.target.classList.add(
              "is-visible"
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },

      {
        threshold:
          0.13,

        rootMargin:
          "0px 0px -7% 0px"
      }
    );


  items.forEach(
    item =>
      observer.observe(item)
  );

}



/* =========================================================
   CALENDAR / ICS
========================================================= */

function downloadCalendar() {

  const location =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  const invitationUrl =
    getShareUrl();


  const description =
    [
      CONFERENCE.tagline,

      CONFERENCE.websiteUrl
        ? `Website: ${CONFERENCE.websiteUrl}`
        : "",

      invitationUrl
        ? `Invitation: ${invitationUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Margin Notes Conference Invitation//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${createUID()}
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(START_DATE)}
DTEND:${formatICSDate(END_DATE)}
SUMMARY:${escapeICS(CONFERENCE.name)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(CONFERENCE.websiteUrl || invitationUrl)}
END:VEVENT
END:VCALENDAR`;


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `${slugify(CONFERENCE.shortName)}.ics`;


  document.body.appendChild(
    link
  );


  link.click();

  link.remove();


  URL.revokeObjectURL(
    url
  );


  announce(
    "تم تنزيل ملف التقويم."
  );

}



/* =========================================================
   ICS HELPERS
========================================================= */

function formatICSDate(date) {

  return date
    .toISOString()
    .replace(
      /[-:]/g,
      ""
    )
    .replace(
      /\.\d{3}Z$/,
      "Z"
    );

}



function createUID() {

  return (
    `${slugify(CONFERENCE.shortName)}` +
    `-${START_DATE.getTime()}` +
    "@margin-notes"
  );

}



function escapeICS(value = "") {

  return String(value)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /\n/g,
      "\\n"
    )

    .replace(
      /,/g,
      "\\,"
    )

    .replace(
      /;/g,
      "\\;"
    );

}



/* =========================================================
   SHARE
========================================================= */

async function shareInvitation() {

  const data = {

    title:
      CONFERENCE.name,

    text:
      `${CONFERENCE.name} — ${CONFERENCE.tagline}`,

    url:
      getShareUrl()

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        data
      );


      announce(
        "تمت مشاركة الدعوة."
      );


      return;

    } catch (error) {

      if (
        error.name ===
        "AbortError"
      ) {
        return;
      }

    }

  }


  await copyInvitationLink();

}



/* =========================================================
   COPY FALLBACK
========================================================= */

async function copyInvitationLink() {

  const url =
    getShareUrl();


  try {

    await navigator.clipboard.writeText(
      url
    );


    announce(
      "تم نسخ رابط الدعوة."
    );

  } catch (error) {

    fallbackCopy(
      url
    );

  }

}



function fallbackCopy(text) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  try {

    document.execCommand(
      "copy"
    );


    announce(
      "تم نسخ رابط الدعوة."
    );

  } catch (error) {

    announce(
      "تعذر نسخ الرابط تلقائياً."
    );

  }


  textarea.remove();

}



/* =========================================================
   URL
========================================================= */

function getShareUrl() {

  const customUrl =
    CONFERENCE.shareUrl?.trim();


  if (customUrl) {

    return customUrl;

  }


  return window.location.href;

}



/* =========================================================
   ACTION EVENTS
========================================================= */

function setupActions() {

  elements.calendarButton
    .addEventListener(
      "click",
      downloadCalendar
    );


  elements.shareButton
    .addEventListener(
      "click",
      shareInvitation
    );


  elements.topShareButton
    .addEventListener(
      "click",
      shareInvitation
    );

}



/* =========================================================
   META
========================================================= */

function updateMetadata() {

  document.title =
    CONFERENCE.name;


  const description =
    `${CONFERENCE.name} — ${CONFERENCE.tagline}`;


  updateMeta(
    'meta[name="description"]',
    description
  );


  updateMeta(
    'meta[property="og:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[property="og:description"]',
    CONFERENCE.tagline
  );


  updateMeta(
    'meta[property="og:url"]',
    getShareUrl()
  );


  updateMeta(
    'meta[name="twitter:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[name="twitter:description"]',
    CONFERENCE.tagline
  );

}



/* =========================================================
   META HELPER
========================================================= */

function updateMeta(
  selector,
  content
) {

  const element =
    document.querySelector(
      selector
    );


  if (!element) {
    return;
  }


  element.setAttribute(
    "content",
    content
  );

}



/* =========================================================
   STRUCTURED DATA
========================================================= */

function addStructuredData() {

  const data = {

    "@context":
      "https://schema.org",

    "@type":
      "Event",

    name:
      CONFERENCE.name,

    description:
      CONFERENCE.tagline,

    startDate:
      CONFERENCE.startAt,

    endDate:
      CONFERENCE.endAt,

    eventStatus:
      "https://schema.org/EventScheduled",

    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",

    location: {

      "@type":
        "Place",

      name:
        CONFERENCE.venue,

      address: {

        "@type":
          "PostalAddress",

        addressLocality:
          CONFERENCE.city,

        addressCountry:
          CONFERENCE.country

      }

    },

    organizer: {

      "@type":
        "Organization",

      name:
        CONFERENCE.organizer,

      url:
        CONFERENCE.websiteUrl ||
        undefined

    },

    url:
      getShareUrl()

  };


  const script =
    document.createElement(
      "script"
    );


  script.type =
    "application/ld+json";


  script.textContent =
    JSON.stringify(
      data
    );


  document.head.appendChild(
    script
  );

}



/* =========================================================
   HELPERS
========================================================= */

function formatNumber(number) {

  return new Intl.NumberFormat(
    "ar-IQ",
    {
      useGrouping:
        false
    }
  ).format(number);

}



function pad(number) {

  return String(number)
    .padStart(
      2,
      "0"
    );

}



function slugify(value = "") {

  return String(value)

    .toLowerCase()

    .trim()

    .replace(
      /[^a-z0-9\u0600-\u06ff]+/g,
      "-"
    )

    .replace(
      /^-+|-+$/g,
      ""
    );

}



function escapeHTML(value = "") {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}



function announce(message) {

  elements.statusMessage.textContent =
    "";


  window.setTimeout(
    () => {

      elements.statusMessage.textContent =
        message;

    },
    30
  );

}



function prefersReducedMotion() {

  return window
    .matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    .matches;

}



/* =========================================================
   INIT
========================================================= */

function init() {

  populateConference();

  renderResearchers();

  renderThemes();


  /*
    Rendered elements must exist
    before reveal observer starts.
  */

  setupRevealObserver();

  setupMarginNavigation();

  setupActions();

  startCountdown();

}



document.addEventListener(
  "DOMContentLoaded",
  init
);
