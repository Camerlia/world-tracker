import NavPage from "../components/NavPage";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={`${styles.product} px-4 md:py-5 py-3`}>
    <NavPage />
      <section className={`grid md:grid-cols-2 grid-cols-1 items-center md:gap-28 gap-6 md:m-24 m-6 justify-center`}>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
