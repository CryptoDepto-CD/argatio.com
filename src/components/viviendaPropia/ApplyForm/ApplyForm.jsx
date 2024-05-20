import Button from "@/components/ui/Button"


const inputStyles = "px-4 md:px-10 py-2 text-sm text-black transition-all bg-white md:text-xl rounded-xl focus:outline-1 focus:outline-gray-500 placeholder:italic"


export default function ApplyForm({type}) {
  return (
    <form className="flex flex-col mx-auto p-10 my-10 backdrop-blur *:flex-auto gap-5 bg-opacity-10 rounded-3xl [background:linear-gradient(121deg,rgba(255,255,255,0.06)_5.96%,rgba(255,255,255,0.04)_68.72%)] shadow-[0px_4px_5px_0px_rgba(255,255,255,0.16)_inset,_0px_1px_4px_0px_rgba(11,55,0,0.27)]">
      <input id="name" name="name" placeholder="Nombre y Apellidos" type="text" required className={inputStyles} />
      <input id="email" name="email" placeholder="Email" type="email" required className={inputStyles} />
      <input id="phone" name="phone" placeholder="(número de área) Teléfono" type="tel" required className={inputStyles} />
      <input id="location" name="location" placeholder="Localidad / Provincia" type="text" required className={inputStyles} />
      <select id="type" name="type" placeholder="" className={inputStyles}>
        <option value="0">Tipo de Propiedad ▼</option>
        <option value="1">Tipo 1</option>
        <option value="2">Tipo 2</option>
        <option value="3">Tipo 3</option>
      </select>
      {type === "property" && (<input id="price" name="price" placeholder="Precio Estimado" type="number" required className={inputStyles} />)}
      <textarea id="description" name="description" placeholder="Algo más que nos quieras contar..." className={inputStyles + ` ${type === 'property' ? 'h-[8ch]' : 'h-[13ch]'} `} />
      <div className="mx-auto my-5 max-w-40">
      <Button type="button">Enviar</Button>
      </div>
    </form>
  )
}
