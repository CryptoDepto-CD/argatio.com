"use server";

import { redirect } from "next/navigation";

export async function submitEmailOfNewsletter(prevState, formData) {
  //TODO Crear las acciones al enviar el email para recibir las novedades

  const email = formData.get("email");

  //TODO Some validation for now, change it after
  if (!email || email.includes("@")) {
    return {
      message: "Invalid email.",
    };
  }

  //TODO Crear la ruta del modal de validacion para el Newsletter
  // redirect("/");
}

export async function sendFeedback(prevState, formData) {
  //TODO Crear Acciones al enviar el feedback

  const text = formData.get("feedback");

  //TODO Some validation for now, change it after
  if (!text || text.trim() === "") {
    return {
      message: "Invalid text.",
    };
  }

  //TODO Crear la ruta del modal de validacion para el feedback
  // redirect("/");
}
