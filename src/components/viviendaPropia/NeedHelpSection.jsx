import Button from "../ui/Button/Button";
import Details from "./DetailsComponent/Details";

const elements = [
  {
    title: "¿Qué es la tokenización?",
    children: (
      <>
        <p>
          La tokenización es el proceso de convertir un activo físico, como una
          propiedad inmobiliaria, en fracciones digitales representadas por
          tokens en una blockchain. Esto permite que múltiples personas
          adquieran una participación en el activo, facilitando su inversión y
          comercio.
        </p>
        <p>
          En Argatio, se utiliza la tokenización para transformar propiedades en
          fracciones digitales, lo que permite a los inversores comprar y vender
          participaciones en inmuebles. Además, ofrece modelos como el leasing
          con opción a compra, donde los inquilinos pueden convertirse
          gradualmente en propietarios, adquiriendo participaciones en la
          propiedad con cada pago de alquiler.
        </p>
      </>
    ),
  },
  {
    title: "¿Qué es Blockchain?",
    children: (
      <>
        <p>
          Blockchain es una tecnología de registro distribuido que permite
          almacenar información de manera segura, transparente y
          descentralizada. Aquí te dejo una explicación breve:
        </p>
        <p>
          <strong>Estructura de datos:</strong> Consiste en una cadena de
          bloques, donde cada bloque contiene un conjunto de transacciones o
          datos. Cada bloque está vinculado al anterior mediante un hash
          criptográfico, formando una cadena continua.
        </p>
        <p>
          <strong>Descentralización:</strong> A diferencia de los sistemas
          tradicionales que dependen de una autoridad central, en una blockchain
          la información es mantenida por una red de nodos (computadoras)
          independientes que validan y registran las transacciones.
        </p>
        <p>
          <strong>Transparencia y seguridad:</strong> Cada transacción
          registrada en la blockchain es visible para todos los participantes de
          la red, lo que garantiza transparencia. La seguridad se logra a través
          de criptografía avanzada y consenso distribuido, lo que hace que sea
          extremadamente difícil alterar la información registrada.
        </p>
        <p>
          <strong>Inmutabilidad:</strong> Una vez que una transacción es
          registrada en la blockchain, no puede ser modificada ni eliminada, lo
          que asegura la integridad de los datos.
        </p>
        <p>
          <strong>Aplicaciones:</strong> Blockchain se utiliza en diversas
          áreas, incluyendo criptomonedas como Bitcoin y Ethereum, contratos
          inteligentes, gestión de la cadena de suministro, y tokenización de
          activos como inmuebles y arte.
        </p>
        <p>
          En resumen, blockchain es una tecnología que proporciona una forma
          segura y transparente de registrar y compartir información sin
          necesidad de una autoridad central.
        </p>
      </>
    ),
  },
  {
    title:
      "¿Qué requisitos necesito para adquirir participaciones de un inmuebles con Argatio?",
    children: (
      <>
        <p>
          Para adquirir participaciones en propiedades a través de Argatio,
          necesitas cumplir con los siguientes requisitos:
        </p>
        <p>
          <strong>Registro en la plataforma:</strong> Debes crear una cuenta en
          la plataforma de Argatio y completar el proceso de verificación de
          identidad (KYC).
        </p>
        <p>
          <strong>Fondos disponibles:</strong> Asegúrate de tener fondos
          suficientes en tu cuenta para comprar las participaciones. Puedes
          utilizar moneda fiat o criptomonedas, dependiendo de las opciones
          disponibles en la plataforma.
        </p>
        <p>
          <strong>Verificación de identidad (KYC):</strong> Proporciona la
          documentación necesaria para verificar tu identidad. Esto puede
          incluir un documento de identificación válido (como un pasaporte o
          licencia de conducir) y comprobante de domicilio.
        </p>
        <p>
          <strong>Aceptación de términos y condiciones:</strong> Debes leer y
          aceptar los términos y condiciones de uso de la plataforma de Argatio.
        </p>
        <p>
          <strong>Selección de propiedad:</strong> Elige la propiedad en la que
          deseas invertir y decide cuántas participaciones deseas adquirir.
        </p>
        <p>
          <strong>Realizar la compra:</strong> Completa el proceso de compra a
          través de la plataforma, siguiendo las instrucciones para transferir
          los fondos necesarios.
        </p>
        <p>
          Estos pasos aseguran que la inversión se realice de manera segura y
          cumpliendo con todas las regulaciones aplicables
        </p>
      </>
    ),
  },
  {
    title: "¿Cuánto tiempo tardare en comprar mi casa con Argatio?",
    children: (
      <>
        <p>
          El tiempo que tardarás en comprar tu casa con Argatio depende de
          varios factores:
        </p>
        <p>
          <strong>Registro en la plataforma:</strong> Cuantas más
          participaciones compres con cada pago, más rápido alcanzarás la
          propiedad total.
        </p>
        <p>
          <strong>Cantidad de participaciones compradas:</strong> Asegúrate de
          tener fondos suficientes en tu cuenta para comprar las
          participaciones. Puedes utilizar moneda fiat o criptomonedas,
          dependiendo de las opciones disponibles en la plataforma.
        </p>
        <p>
          <strong>Frecuencia de los pagos:</strong> Si realizas pagos
          adicionales o compras participaciones con mayor frecuencia, reducirás
          el tiempo necesario.
        </p>
        <p>
          <strong>Precio de la propiedad:</strong> El valor total de la
          propiedad también influye; propiedades más caras requieren más tiempo
          si el ritmo de compra es constante.
        </p>
        <p>
          <strong>Interés de inversores:</strong> La rapidez con la que otros
          inversores compren participaciones puede afectar la disponibilidad de
          fracciones para ti.
        </p>
        <p>
          En general, el proceso es gradual y flexible, permitiéndote adquirir
          la propiedad al ritmo que mejor se adapte a tu capacidad financiera.
        </p>
      </>
    ),
  },
  {
    title: "¿Es segura mi inversión con Argatio?",
    children: (
      <>
        <p>
          Sí, tu inversión con Argatio es segura gracias a la implementación de
          varias medidas y tecnologías avanzadas que garantizan la
          transparencia, seguridad y confianza en todas las transacciones. Aquí
          se detallan algunas de las características clave que aseguran la
          seguridad de tu inversión:
        </p>
        <p>
          <strong>Tecnología Blockchain:</strong> Utilizamos la tecnología
          blockchain, que es conocida por su alta seguridad y transparencia.
          Todas las transacciones y registros de propiedad se realizan en una
          blockchain, lo que asegura que no puedan ser alterados ni manipulados.
        </p>
        <p>
          <strong>Contratos Inteligentes:</strong> Los contratos inteligentes
          automatizan y garantizan el cumplimiento de los términos acordados sin
          la necesidad de intermediarios. Esto reduce el riesgo de errores
          humanos y fraudes.
        </p>
        <p>
          <strong>Verificación y Auditoría:</strong> Realizamos procesos de
          verificación exhaustivos para todas las propiedades y transacciones.
          Además, la blockchain permite la auditoría en tiempo real de todas las
          transacciones, proporcionando un nivel adicional de seguridad y
          transparencia.
        </p>
        <p>
          <strong>Rendimiento Fijo y Liquidez:</strong> Ofrecemos un rendimiento
          anual fijo del 8% distribuido mensualmente, lo que proporciona
          ingresos pasivos constantes. Además, puedes vender tus fracciones de
          propiedad en cualquier momento en nuestro mercado secundario, lo que
          proporciona alta liquidez y flexibilidad.
        </p>
        <p>
          <strong>Diversificación de Inversiones:</strong> La posibilidad de
          comprar fracciones de múltiples propiedades permite diversificar tu
          inversión, reduciendo el riesgo asociado a la propiedad de un solo
          activo.
        </p>
        <p>
          <strong>Seguridad en la Plataforma:</strong> Utilizamos medidas de
          seguridad avanzadas para proteger tu cuenta y tus datos personales.
          Esto incluye autenticación de dos factores (2FA) y encriptación de
          datos.
        </p>
        <p>
          <strong>Transparencia Total:</strong> Todos los inversores tienen
          acceso a información detallada y actualizada sobre el desempeño de sus
          inversiones y las propiedades en las que han invertido. Esto incluye
          informes de mercado y análisis detallados.
        </p>
        <p>
          En resumen, Argatio combina la tecnología avanzada de blockchain,
          contratos inteligentes, y medidas de seguridad rigurosas para
          garantizar que tu inversión esté protegida y que tengas acceso a una
          plataforma transparente y confiable.
        </p>
      </>
    ),
  },
  {
    title: "¿Qué marco legal regula la operación de Argatio?",
    children: (
      <>
        <p>El marco legal que regula la operación de Argatio incluye:</p>
        <p>
          <strong>Regulación Financiera:</strong> Cumplimos con leyes de AML
          (Anti-Lavado de Dinero) y KYC (Conozca a su Cliente) para prevenir
          fraudes.
        </p>
        <p>
          <strong>Leyes de Propiedad Inmobiliaria:</strong> Nos adherimos a
          regulaciones locales sobre la compraventa y arrendamiento de bienes
          inmuebles.
        </p>
        <p>
          <strong>Legislación de Blockchain y Criptomonedas:</strong> Seguimos
          normativas específicas sobre blockchain y criptomonedas, como las
          regulaciones de la SEC en EE. UU. y directivas en la UE.
        </p>
        <p>
          <strong>Protección al Consumidor:</strong> Cumplimos con leyes de
          protección al consumidor, garantizando transparencia y derechos
          justos.
        </p>
        <p>
          <strong>Regulación de Mercado de Capitales:</strong> Seguimos
          directivas como MiFID II en la UE y el Securities Exchange Act en EE.
          UU. para asegurar la integridad del mercado y la protección del
          inversor.
        </p>
        <p>
          Argatio se asegura de cumplir con estas leyes en todas las
          jurisdicciones donde opera,
        </p>
      </>
    ),
  },
];

export default function NeedHelpSection() {
  return (
    <section className="w-full px-10 py-20 font-montserrat">
      <h2 className="pb-10 mx-auto leading-tight text-center uppercase text-clamp-big font-nats">
        ¿necesitas ayuda?
      </h2>
      <div className="max-w-[1050px] mx-auto px-5 text-black flex flex-col gap-5 ">
        {elements.map((element, index) => (
          <Details key={index} title={element.title}>{element.children}</Details>
        ))}
      </div>
      <div className="p-5 flex items-center mx-auto max-w-52 my-9">
        <Button type="link" href="#">Contacto</Button>
      </div>
    </section>
  );
}
