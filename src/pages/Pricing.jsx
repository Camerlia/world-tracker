// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/NavPage"

export default function Product() {
  return (
    <main className={`${styles.product} px-4 md:py-5 py-3`}>
    <PageNav/>
      <section className={`justify-center grid md:grid-cols-2 grid-cols-1 items-center md:gap-28 gap-6 m-auto md:p-10 p-2`}>
      
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
