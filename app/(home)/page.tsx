import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className=" space-y-6">
        <h1 className="text-4xl font-extrabold  sm:text-5xl text-muted-foreground bg-clip-text">
          Progressive UI, Hatched for the Future.
        </h1>
        <p className="text-muted-foreground mx-2 mt-2 text-lg leading-relaxed">
          A ShadCN UI registry built for <strong>Next.js 15+</strong> and <strong>React 19</strong>.  
        </p>
        <p className="text-muted-foreground">
          You can open{' '}
          <Link
            href="/docs"
            className="font-medium underline underline-offset-4 text-primary hover:text-primary/80"
          >
            /docs
          </Link>{' '}
          and see the documentation.
        </p>
      </div>
    </main>
  );
}
