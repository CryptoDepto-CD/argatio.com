"use client";

import { Pencil, Check } from "lucide-react";
import { useRef, useState } from "react";

export default function ProfileForm({ user }) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const [name, setName] = useState("Juan Perez");
  const [email, setEmail] = useState("juanperez@gmail.com");
  const [phone, setPhone] = useState("+54 632 12592266");

  const formUserData = useRef();
  const userName = useRef();
  const userEmail = useRef();
  const userPhone = useRef();

  return (
    <div className="flex flex-col items-start px-[clamp(1.5rem,5vw,4rem)] font-montserrat">
      <div className="flex flex-col items-center ">
          {isOpenEdit ? (
            <form
              ref={formUserData}
              className="flex flex-col gap-1 "
              onSubmit={() => setIsOpenEdit(false)}
            >
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Nombre"
                ref={userName}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
                autoFocus
                className="w-full px-2 text-center bg-transparent border-b border-white border-solid outline-0 placeholder:italic"
              />
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="Email"
                ref={userEmail}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
                className="px-2 text-center bg-transparent border-b border-white border-solid outline-0 placeholder:italic"
              />
              <input
                type="tel"
                id="userPhone"
                name="userPhone"
                placeholder="Teléfono"
                ref={userPhone}
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                required
                className="px-2 text-center bg-transparent border-b border-white border-solid outline-0 placeholder:italic"
              />
            </form>
          ) : (
            <div className="*:pb-1">
              <p className="">{name}</p>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          )}
      </div>

      <button onClick={() => setIsOpenEdit(!isOpenEdit)} className="mx-auto mt-4">
        {isOpenEdit ? (
          <Check
            className=""
            onClick={() => {
              setIsOpenEdit(false);
            }}
          />
        ) : (
          <Pencil className="" />
        )}
      </button>
    </div>
  );
}
