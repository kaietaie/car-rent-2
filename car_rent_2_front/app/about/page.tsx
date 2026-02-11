export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          CAR RENT 2
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"> 
            This is version 2 of my pet project rentcar
        </p>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             In this version, I will use the following technologies:
        </p>
         <ul className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 list-disc list-inside">
            <li>Nest.js</li>
            <li>React.js</li>
            <li>OAuth</li>
            <li>WebSockets</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Docker</li>
         </ul>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             I will use these technologies to create a car rental application that allows users to rent cars online. The application will have a user-friendly interface and will be secure and reliable.
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             I will also use Docker to containerize the application and make it easy to deploy. I will use MongoDB as the database to store user and car information, and Redis for caching and real-time features.
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             Overall, I am excited to work on this project and learn more about these technologies while building a useful application.
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             Stay tuned for updates on the development of CAR RENT 2!
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             If you have any suggestions or feedback, feel free to reach out to me. I am always open to new ideas and collaborations.
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             Thank you for your interest in CAR RENT 2, and I look forward to sharing the progress of this project with you!
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             In addition to the technologies mentioned above, I will also be implementing features such as user authentication, car availability tracking, and payment processing to ensure a seamless user experience.
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             I am confident that with the combination of these technologies and features, CAR RENT 2 will be a successful and popular application for car rentals.
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             Thank you again for your support, and I can&apos;t wait to share more about CAR RENT 2 with you in the future!
        </p>
         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             If you have any questions or would like to collaborate on this project, please don&apos;t hesitate to contact me. I am always open to new ideas and partnerships.
        </p>
      </main>
    </div>
  );
}