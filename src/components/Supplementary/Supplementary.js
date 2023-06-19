import React from "react";
import SupplementaryList from "./SupplementaryList";
import { json, useLoaderData } from "react-router-dom";

export default function Supplementary() {
  const loadedFood = useLoaderData()
  return (
    <div>
      <ul>
        {loadedFood.map((summary) => {
          return (
            <SupplementaryList
              id={summary.id}
              title={summary.title}
              description={summary.description}
              link={summary.link}
            />
          );
        })}
      </ul>
    </div>
  );
}
export async function loader(){
 const response = await fetch(
   "https://newfoodapp-6f76d-default-rtdb.firebaseio.com/Supplementary.json"
 );
 if (!response.ok) {
      throw new Error("cant fetch meals");

 }
 const data = await response.json();
 const loadedFood = [];
 for (const key in data) {
   loadedFood.push({
     id: key,
     title: data[key].title,
     description: data[key].description,
   });
 }
 return loadedFood;
}
