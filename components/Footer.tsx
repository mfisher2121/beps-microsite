export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-8 text-sm text-white/60">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <p>
          © {new Date().getFullYear()} BEPS Readiness Intelligence
        </p>
        <p>
          Informational only. Not legal or engineering advice.
        </p>
      </div>
    </footer>
  );
}

