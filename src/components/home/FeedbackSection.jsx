import FeedbackForm from "@/components/home/FeedbackForm/FeedbackForm"

export default function FeedbackSection() {
  return (
    <div className="flex flex-col items-center w-11/12 max-w-screen-sm gap-5 lg:w-5/12">
      <h5 className="text-4xl font-medium leading-none text-center uppercase text-clamp-big font-nats">Feedback</h5>
      <p className="text-clamp-text w-fit font-montserrat lg:text-xl">Crecemos con tu opinión</p>
      <FeedbackForm />
      
    </div>
  )
}
