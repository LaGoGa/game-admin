import { Link } from "@tanstack/react-router";

export default function AuthPage() {
  return (
    <section>
      <Link to="/">Root Page</Link>
      <h2>"Hello auth world"</h2>
    </section>
  );
}
