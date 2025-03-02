import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import NavPage from "../components/NavPage";

export default function Homepage() {
  return (
    <main className={`${styles.homepage} text-white md:py-10 md:px-20 py-5 px-10`}>
    <NavPage />
      <section className={`flex flex-col h-4/5 items-center justify-center gap-10 text-center`}>
        <h1 className={`text-3xl font-bold md:text-7xl `}>
          Travel Around,
          <br />
          Keep wonderful memories
        </h1>
        <h2 className={`max-w-full mb-10 text-xl px-4 md:text-3xl`}>
          The beauty of traveling is to keep mermories and track your experience
        </h2>
        <Link className={`p-8 text-3xl bg-white text-green-700 rounded-3xl`}>Go to Home</Link>
      </section>
    </main>
  );
}
