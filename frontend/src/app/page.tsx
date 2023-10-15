// pages/index.js
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link href="/chat">
        <a>Ir para o Chat</a>
      </Link>
    </div>
  );
}

export default HomePage;
