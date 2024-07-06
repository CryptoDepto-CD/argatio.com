import { useTranslations } from 'next-intl'
import Button from '../ui/Button/Button'

export default function InvesmentSimulationSection() {

  const t = useTranslations("vesting.simulation.section")

  return (
    <section className='my-24 mx-6 md:mx-10'>
      <div className='p-10 px-5 md:px-10 rounded-[50px] bg-white max-w-screen-xl mx-auto text-black'>
        <h2 className='font-nats text-clamp-big leading-none uppercase text-center mb-10'>{t("title")}</h2>

        <div className='grid md:grid-cols-2 text-center font-montserrat text-clamp-text h-full'>
          <form className='h-full flex flex-col justify-between p-5 md:border-r-[2px] border-r-black md:border-dashed w-full items-center'>
            <div className=''>
              <p className='my-3 uppercase'>{t("buy-tokens")}</p>
              <p className='my-3'>{t("tokens-cost")}</p>
              <input id='' name='' placeholder='000' className='my-5 bg-transparent outline-none border border-black rounded-md w-[10ch] text-center px-7 py-2' />
            </div>

            <div className='md:w-[70%] w-full my-5'>
              <Button type='button' light={true} >{t("btn-simulate")}</Button>
            </div>
          </form>

          <div className='h-full flex flex-col justify-between p-5 w-full items-center border-t-[2px] border-t-black border-dashed md:border-none'>
            <div className=''>
              <p className='my-2'>{t("property-value")}</p>
              <p className='my-2'>{t("total-tokens")}</p>
              <p className='my-2'>{t("token-value")}</p>
              <p className='my-2'>{t("yearly-return")}</p>
            </div>

            <p className='my-8 font-bold'>{t("recieve-monthly")}</p>

            <div className='md:w-[70%] w-full my-5'>
              <Button type='button' light={true} >{t("btn-invest")}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
