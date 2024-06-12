import FeedbackForm from "@/components/home/FeedbackForm/FeedbackForm"
import { useTranslations } from "next-intl";


export default function FeedbackSection() {

  const t = useTranslations("feedback")

  return (
    <div className="flex flex-col items-center w-11/12 max-w-screen-sm gap-5 lg:w-5/12">
      <h5 className="text-4xl font-medium leading-none text-center uppercase text-clamp-big font-nats">Feedback</h5>
      <p className="text-clamp-text w-fit font-montserrat lg:text-xl">{t('subtitle')}</p>
      <FeedbackForm />
      
    </div>
  )
}
