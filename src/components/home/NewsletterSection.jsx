import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import SocialMediaLinks from "@/components/UI/SocialMediaLinks";

export default function NewsletterSection() {

  return (
    <div className="flex flex-col items-center w-10/12 max-w-screen-sm gap-5 lg:gap-10 lg:w-5/12">
      <h5 className="text-4xl font-medium leading-none text-center uppercase text-clamp-title font-nats">
        Recibe Novedades
      </h5>
      <div className="flex flex-col w-10/12 gap-10">
        <NewsletterForm />
        <div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
          <p className="text-clamp-text w-fit font-montserrat">Seguinos en redes</p>
          <SocialMediaLinks textColor="white" bgColor="bluePrimary" />
          
        </div>
      </div>
    </div>
  );
}
