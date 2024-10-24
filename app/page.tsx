import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-pink-100 to-blue-100 p-4 md:p-8 font-['Open_Sans',sans-serif]">
      <div className="max-w-4xl w-full bg-white bg-opacity-90 rounded-lg shadow-xl p-6 md:p-12 space-y-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Full%20Logo%20-%20Black-p2SERfYM0Ek5lfRt3sts1MlADvG23V.png"
          alt="Mahalo Logo"
          width={200}
          height={50}
          className="mx-auto mb-8"
        />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Thank You</h1>
        <div className="space-y-4 text-gray-700">
          <p>Dear friends,</p>
          <p>I hope you&apos;re all doing well. I&apos;m writing today with a heavy heart but also with immense gratitude for the journey we&apos;ve shared. After 18 months of working together to support and uplift the Portuguese non-profit ecosystem, we&apos;ve made the difficult decision to wind down Mahalo.</p>
          <p>When we started, our vision was clear: to help nonprofits thrive by upgrading the way we all approach fundraising—improving payments, marketing, and retention strategies. We wanted to show that by thinking differently, we could change the game. However, as many of you know, the challenges of working in this space in Portugal are very real. In the 2022 World Giving Index, we ranked 114th out of 119 countries (source), and despite our best efforts, we struggled to change the broader mindset around what&apos;s possible in fundraising.</p>
          <p>That being said, I am incredibly proud of what we did achieve together. The consulting work we did with large Portuguese institutions like Acreditar, CASA, and Animas, among dozens of others, gave us proof that change is possible. We saw firsthand what&apos;s possible when you bring passion and purpose to the table. But unfortunately, we were not able to bring these successes to the wider ecosystem in a sustainable way.</p>
          <p>Because of this, we&apos;re no longer able to maintain our software solutions. For those of you who are actively using Mahalo, we&apos;ll be reaching out soon with a detailed plan to make sure the offboarding process is as smooth as possible.</p>
          <p>From the bottom of my heart, thank you. It&apos;s been an honor and a privilege to work alongside you all. The work you do is so important, and even though Mahalo is coming to an end, I have no doubt you&apos;ll continue making an incredible impact.</p>
          <p>Please feel free to reach out if you have any questions or just want to chat.</p>
          <p className="mt-8">
            With gratitude,<br />
            Tiago Martins<br />
            Founder & CEO
          </p>
          <p className="mt-4 text-center">
            <a href="mailto:hello@mahalo.so" className="text-blue-600 hover:underline">hello@mahalo.so</a>
          </p>
        </div>
      </div>
    </div>
  );
}
