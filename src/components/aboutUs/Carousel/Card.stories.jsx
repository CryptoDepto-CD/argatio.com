import Card from "./Card";

export default {
  component: Card,
  title: 'Argatio/AboutUs/Card',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="mx-5 max-w-80">
        <Story />
      </div>
    ),
  ],
}

export const Default = {
  args: {
    linkedin: "#",
    image: "https://res.cloudinary.com/dllugzki1/image/upload/v1706814730/cd_images/cd_team/matias_peralta_k1cfz4.png",
    name: "Matias Peralta",
    role: "CEO",
    birthday: "03/05/1990"
  },
}

export const CardWithBirthday = {
  args: {
    linkedin: "#",
    image: "https://res.cloudinary.com/dllugzki1/image/upload/v1706814730/cd_images/cd_team/matias_peralta_k1cfz4.png",
    name: "Matias Peralta",
    role: "CEO",
    birthday: "26/06/1990"
  },
}