import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold flex flex-col gap-8">
            Welcome to Dropbox Clone.
            <span>
              Storing everything for you and your business needs. All in one
              place
            </span>
          </h1>

          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organise, and access files from anywhere.
            Securley store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>

          <Link
            href={"/dashboard"}
            className="flex cursor-pointer bg-blue-500 p-5 w-fit "
          >
            Try it for free! <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This project is made for educational purposes only. There is no
        affliation with Dropbox or any of its subsidiaries in any form.
        Copywright Disclaimer under section 107 of the copywright act 1976,
        allowance is made for &apos;fair use&apos; of this project for
        educational purposes.
      </p>
    </main>
  );
}
