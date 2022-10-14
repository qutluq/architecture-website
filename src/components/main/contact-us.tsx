import Image from "next/image";
import { Button } from "src/components/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export const ContactUs = () => (
  <div className="lg:mx-30  mx-10 flex max-w-6xl flex-col items-center justify-center gap-5 sm:mx-16 lg:flex-row lg:items-end">
    <div className=" flex w-full min-w-[256] flex-col justify-start gap-5 md:w-2/3 lg:w-1/3">
      <span className="mt-10 flex justify-center text-xl font-thin capitalize text-gray-400 lg:m-0 lg:block lg:text-5xl xs:text-3xl">
        contact us
      </span>

      <form method="POST" action="#" className=" flex flex-col gap-3">
        <input
          id="name"
          name="name"
          className="w-full bg-gray-200 py-2 px-5 text-sm leading-5 placeholder-gray-700  focus:bg-gray-100 focus:outline-none"
          placeholder="Name"
          type="text"
        />
        <input
          id="phone"
          name="phone"
          className="w-full bg-gray-200 py-2 px-5 text-sm leading-5 placeholder-gray-700  focus:bg-gray-100 focus:outline-none"
          placeholder="Phone Number*"
          type="tel"
        />
        <input
          id="email"
          name="email"
          className="w-full bg-gray-200 py-2 px-5 text-sm leading-5 placeholder-gray-700  focus:bg-gray-100 focus:outline-none"
          placeholder="Email*"
          type="email"
        />

        <select
          id="topic"
          name="topic"
          className="w-full bg-gray-200 py-2 px-5 text-sm leading-5 placeholder-gray-700  focus:bg-gray-100 focus:outline-none"
          defaultValue="Interested in"
        >
          <option>Interested in</option>
          <option>Project #1</option>
          <option>Project #2</option>
          <option>Project #3</option>
          <option>Project #4</option>
          <option>Project #5</option>
        </select>

        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full bg-gray-200 py-2 px-5 text-sm leading-5 placeholder-gray-700  focus:bg-gray-100 focus:outline-none"
          defaultValue={""}
          placeholder="Message*"
        />

        <Button type="submit" className="bg-gray-700">
          <span className="uppercase">send email&nbsp;</span>
          <ArrowLongRightIcon className="inline w-6" />
        </Button>
      </form>
    </div>
    <Image
      width={749}
      height={369}
      src="/assets/contact-us.png"
      objectFit="cover"
      className="w-2/3"
    />
  </div>
);
