import React from 'react'
import { useLoaderData,json } from 'react-router-dom'
export default function SupplementaryMeal() {
    const rice = useLoaderData()
  return (
    <div>
      {rice.map()}
    </div>
  )
}
export async function loader() {
  const response = await fetch(
    "https://newfoodapp-6f76d-default-rtdb.firebaseio.com/MainCourseRice.json"
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
      price: data[key].price,
    });
  }
  return loadedMeal;
}

