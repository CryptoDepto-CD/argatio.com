"use client"

import Test from "@/../public/AboutUs/text_mati.svg";
import Carousel from "./Carousel/Carousel";
import { useTranslations } from "next-intl";
import { getProfile } from "@/services/Servicies";
import { useState, useEffect } from "react";


async function GetProfile() {

  const data = await getProfile()
  return data 

}


export default function OurTeamSection() {

  const [profiles, setProfiles] = useState([]);

  const t = useTranslations("aboutUs.ourTeam")
  
  useEffect(() => {
    GetProfile().then(data => {
      if (Array.isArray(data)) {
        setProfiles(data);
      }
    }).catch(error => {
      console.error("Error fetching profiles:", error);
      setProfiles([]); 
    });
  }, []);

  return (
    <section className="m-10 my-16">
      <div className="">
        <h2 className="my-8 leading-none text-center uppercase font-nats text-clamp-big">
          {t('title')}
        </h2>
        <p className="max-w-screen-md mx-auto text-center text-clamp-text font-montserrat">
          {t('description')}
        </p>
        <div>
          <Carousel cards={profiles.sort((a, b) => a.id - b.id)} />
        </div>
      </div>
    </section>
  );
}
