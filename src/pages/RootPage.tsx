import { Link } from "@tanstack/react-router";

export default function RootPage() {
  return (
    <section>
      <Link to="/auth">Auth Page</Link>
      <h2>"Hello world"</h2>
    </section>
  );
}
