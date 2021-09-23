import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
export default function CreatorsList({
  id,
  name,
  image,
  description,
  subscribers,
  categories,
  total_views,
  rate,
}) {
  return (
    <div className=" justify-center inline-flex items-center">
      <div className="card flex flex-wrap max-w-md mx-auto">
        <img src={image} className="w-full object-cover" />
        <p>{name}</p>
        <p className="truncate overflow-ellipsis">{description}</p>
        <p>Category: {categories}</p>
        <p>{subscribers}</p>
        <p>{total_views}</p>
        <p>{rate}</p>
        <p>Find out more...</p>
      </div>
    </div>
  );
}
