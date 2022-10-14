import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const Contacts = () => {
  return (
    <div className="flex w-64 flex-col gap-5 capitalize text-gray-200">
      <span className="mb-3">Contacts</span>

      <div className="flex flex-row items-center justify-start gap-5">
        <MapPinIcon
          className="block h-6 w-6 text-gray-200"
          aria-hidden="true"
        />
        <span>1234 Sample Street Austin Texas 78704</span>
      </div>
      <div className="flex flex-row items-center justify-start gap-5">
        <PhoneIcon className="block h-6 w-6 text-gray-200" aria-hidden="true" />
        <span>512.333.2222</span>
      </div>
      <div className="flex flex-row items-center justify-start gap-5 lowercase">
        <EnvelopeIcon
          className="block h-6 w-6 text-gray-200"
          aria-hidden="true"
        />
        <span>sampleemail@gmail.com</span>
      </div>
    </div>
  );
};
