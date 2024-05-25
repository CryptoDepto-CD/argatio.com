import ProfileForm from "./ProfileForm";

export default function Profile() {
  return (
    <div
      className={`font-nats aspect-square rounded-full border-2 flex items-center text-center w-fit flex-col justify-center`}
    >
      <p className="mb-3 leading-none uppercase text-clamp-title font-nats">
        Perfil
      </p>
      <ProfileForm />
    </div>
  );
}
