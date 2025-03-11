import React from "react";
import Card from "./Card";
import styles from "./Course.module.css";

const Courses = () => {
  const courses = [
    [
      {
        id: 1,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c4b6eb0e4d0516742b754831b96fc2576e1ebc3d3d8e8f40c599523c32733f80?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Full Stack Web development",
      },
      {
        id: 2,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/7c569b797851dc945e140bae1e33ad0ad089dc8c3ab47808ea9536686de50d99?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Basic Coding in Python",
      },
      {
        id: 3,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d77e87c08467897760783c5e7e1d43267c9bcc317877b69a68e804315e806ea3?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "HTML",
      },
    ],
    [
      {
        id: 4,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c4b6eb0e4d0516742b754831b96fc2576e1ebc3d3d8e8f40c599523c32733f80?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Full Stack Web development",
      },
      {
        id: 5,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/7c569b797851dc945e140bae1e33ad0ad089dc8c3ab47808ea9536686de50d99?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Basic Coding in Python",
      },
      {
        id: 6,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d77e87c08467897760783c5e7e1d43267c9bcc317877b69a68e804315e806ea3?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "HTML",
      },
    ],
    [
      {
        id: 7,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c4b6eb0e4d0516742b754831b96fc2576e1ebc3d3d8e8f40c599523c32733f80?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Full Stack Web development",
      },
      {
        id: 8,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/7c569b797851dc945e140bae1e33ad0ad089dc8c3ab47808ea9536686de50d99?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Basic Coding in Python",
      },
      {
        id: 9,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d77e87c08467897760783c5e7e1d43267c9bcc317877b69a68e804315e806ea3?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "HTML",
      },
    ],
    [
      {
        id: 10,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c4b6eb0e4d0516742b754831b96fc2576e1ebc3d3d8e8f40c599523c32733f80?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Full Stack Web development",
      },
      {
        id: 11,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/7c569b797851dc945e140bae1e33ad0ad089dc8c3ab47808ea9536686de50d99?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "Basic Coding in Python",
      },
      {
        id: 12,
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d77e87c08467897760783c5e7e1d43267c9bcc317877b69a68e804315e806ea3?placeholderIfAbsent=true&apiKey=90a3f8de07f841f8a8cb21c4f4b9efcd",
        title: "HTML",
      },
    ],
  ];
  return (
    <section className={styles.cardSection}>
      <h2>Offered Courses</h2>
      {/* <div className={styles.CardContainer}> */}
        {courses.map((courseSet, index) => (
          <div key={index} className={styles.CardRow}>
            {courseSet.map((course) => (
              <Card key={course.id} img={course.imageUrl} title={course.title} />
            ))}
          </div>
        ))}
      {/* </div> */}
    </section>
  );
};

export default Courses;
