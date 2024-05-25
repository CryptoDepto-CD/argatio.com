"use client";
import { useState } from "react";
import InvestForm from "./Invest/InvestForm";

export default function InvestSection({ wallet }) {

  const [isOpenDialog, setIsOpenDialog] = useState(false);
  
  return (
    <section className="flex flex-wrap-reverse items-center justify-center px-10 py-16 mb-32 gap-x-14">
      <InvestForm
        buttonName="Aprobar USDT"
        buttonClick={(e) => {
          e.preventDefault();
          // setIsOpenDialog(true); 
          //TODO: Crear dialogo que confirme la aprobacion de la transaccion
        }}
      />
      <div className="w-fit">
        {wallet ? (
          ""
        ) : (
          <p className="px-5 py-2 mx-auto font-semibold border-2 border-white border-solid rounded-lg shrink-0 font-montserrat">
            Wallet externa
            <br />
            no encontrada
          </p>
        )}
      </div>
    </section>
  );
}
