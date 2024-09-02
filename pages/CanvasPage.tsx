import Head from 'next/head';
import DrawingGame from '@/Components/DrawingGame';

const Canvas  = () => {
  return (
    <div>
      <Head>
        <title>Quickdraw App</title>
        <meta name="description" content="A simple drawing app like Quickdraw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Quickdraw App</h1>
        <DrawingGame />
      </main>
    </div>
  );
};

export default Canvas;
