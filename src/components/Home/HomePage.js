import React from "react";
import MainCourseList from "./MainCourseList";
import styles from "./HomePage.module.css"
import { useLoaderData, json } from "react-router-dom";
export default function HomePage() {
  const food = useLoaderData();

  return (
    <div className={styles.homepage}>
      <ul>
        {food.map((maincourse) => {
          return (
            <MainCourseList
            key={maincourse.id}
              id={maincourse.id}
              title={maincourse.title}
              description={maincourse.description}
              link={maincourse.link}
            />
          );
        })}
      </ul>
    </div>
  );
}
export async function loader() {
  const response = await fetch(
    "https://newfoodapp-6f76d-default-rtdb.firebaseio.com/MainCourse.json"
  );
  if (!response.ok) {
    return json({ message: "Could not fetch main meals" }, { status: 404 });
  }
  const data = await response.json();
  const loadedMeal = [];
  for (const key in data) {
    loadedMeal.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      link: data[key].link
    });
  }
  return loadedMeal;
}
