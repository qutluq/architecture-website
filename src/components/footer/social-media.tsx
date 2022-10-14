import { Icon } from "src/components/icon";

export const SocialMedia = () => (
  <div className="flex w-64 flex-col gap-5 capitalize text-gray-200">
    <span className="mb-3 capitalize">social media</span>
    <div className="flex flex-row items-end justify-start gap-5">
      <a href="https://www.facebook.com/">
        <Icon name="facebook-solid" size={24} />
      </a>
      <a href="https://www.twitter.com/">
        <Icon name="twitter-solid" size={24} />
      </a>
      <a href="https://www.linkedin.com/">
        <Icon name="linkedin-solid" size={24} />
      </a>
      <a href="https://www.pinterest.com/">
        <Icon name="pinterest-solid" size={24} />
      </a>
    </div>
  </div>
);
