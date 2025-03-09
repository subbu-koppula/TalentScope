"use client";
import React from "react";
import styles from "./Empower2.module.css";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    icon: `<svg id="112:1997" layer-name="icon/laptop-2" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="timeline-icon" style="width: 64px; height: 64px"> <path d="M50.9999 11.3335H13.6666C10.7211 11.3335 8.33325 13.7213 8.33325 16.6668V38.0002C8.33325 40.9457 10.7211 43.3335 13.6666 43.3335H50.9999C53.9454 43.3335 56.3333 40.9457 56.3333 38.0002V16.6668C56.3333 13.7213 53.9454 11.3335 50.9999 11.3335Z" fill="white" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.6665 54.0005H58.9998" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    heading: "Trainings Offered",
    text: "Comprehensive training programs designed to equip you with essential software skills for success.",
  },
  {
    icon: `<svg id="112:2004" layer-name="icon/wrench" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="timeline-icon" style="width: 64px; height: 64px"> <path d="M39.5331 17.4671C39.0445 17.9656 38.7708 18.6358 38.7708 19.3338C38.7708 20.0318 39.0445 20.702 39.5331 21.2004L43.7998 25.4671C44.2983 25.9557 44.9684 26.2294 45.6664 26.2294C46.3645 26.2294 47.0346 25.9557 47.5331 25.4671L57.5864 15.4138C58.9273 18.3769 59.3333 21.6784 58.7503 24.8782C58.1673 28.0779 56.623 31.024 54.3232 33.3238C52.0234 35.6237 49.0773 37.168 45.8775 37.751C42.6777 38.334 39.3763 37.928 36.4131 36.5871L17.9864 55.0138C16.9256 56.0746 15.4867 56.6706 13.9864 56.6706C12.4862 56.6706 11.0473 56.0746 9.98644 55.0138C8.92558 53.9529 8.32959 52.5141 8.32959 51.0138C8.32959 49.5135 8.92558 48.0746 9.98644 47.0138L28.4131 28.5871C27.0722 25.6239 26.6662 22.3225 27.2492 19.1227C27.8322 15.923 29.3765 12.9768 31.6764 10.677C33.9762 8.3772 36.9223 6.83288 40.1221 6.24988C43.3218 5.66688 46.6233 6.07287 49.5864 7.41377L39.5598 17.4404L39.5331 17.4671Z" fill="white" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    heading: "Hands-On Workshops",
    text: "Interactive workshops that provide real-world experience and practical knowledge in software development.",
  },
  {
    icon: `<svg id="112:2011" layer-name="icon/codepen" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="timeline-icon" style="width: 64px; height: 64px"> <path d="M32.3332 6.00049L58.9998 23.3338V42.0005L32.3332 59.3338L5.6665 42.0005V23.3338L32.3332 6.00049Z" fill="white" stroke="#78716C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M32.3333 59.3338V42.0005" stroke="#78716C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M58.9998 23.3335L32.3332 42.0002L5.6665 23.3335" stroke="#78716C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.6665 42.0002L32.3332 23.3335L58.9998 42.0002" stroke="#78716C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M32.3333 6.00049V23.3338" stroke="#78716C" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    heading: "Internship Opportunities",
    text: "Gain invaluable experience through internships that connect you with industry leaders and projects.",
  },
  {
    icon: `<svg id="112:2018" layer-name="Icon / Relume" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="timeline-icon" style="width: 64px; height: 64px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M55.6132 19.6538L55.2399 18.9872C54.7583 18.181 54.0791 17.511 53.2666 17.0405L35.3732 6.72049C34.5631 6.25049 33.6434 6.00214 32.7066 6.00049H31.9332C30.9964 6.00214 30.0767 6.25049 29.2666 6.72049L11.3733 17.0672C10.5652 17.5345 9.89394 18.2057 9.42659 19.0138L9.05325 19.6805C8.58325 20.4907 8.33491 21.4105 8.33325 22.3472V43.0138C8.33491 43.9506 8.58325 44.8703 9.05325 45.6805L9.42659 46.3471C9.90602 47.1458 10.5746 47.8144 11.3733 48.2938L29.2932 58.6138C30.0994 59.0935 31.0218 59.3426 31.9599 59.3338H32.7066C33.6434 59.3322 34.5631 59.0839 35.3732 58.6138L53.2666 48.2672C54.0826 47.8103 54.7564 47.1365 55.2132 46.3205L55.6132 45.6538C56.0775 44.8413 56.3255 43.9231 56.3332 42.9871V22.3205C56.3316 21.3838 56.0834 20.4641 55.6132 19.6538ZM31.9332 11.3338H32.7066L48.3332 20.3472L32.3332 29.5738L16.3332 20.3472L31.9332 11.3338ZM34.9999 52.6671L50.5999 43.6538L50.9999 42.9871V24.9605L34.9999 34.2138V52.6671Z" fill="white"></path> </svg>`,
    heading: "Technology Training",
    text: "Hands-on training in the latest technologies to keep you ahead in the tech industry.",
  },
];

const RightColumn = () => {
  return (
    <main className={styles.timeline}>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          svgContent={item.icon}
          heading={item.heading}
          text={item.text}
          showDivider={index !== timelineData.length - 1}
        />
      ))}
    </main>
  );
};

export default RightColumn;