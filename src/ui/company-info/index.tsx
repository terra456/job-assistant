/* eslint-disable @next/next/no-img-element */
import styles from "./style.module.scss";

export default function CompanyInfo({
  image,
  company_name,
  location,
}: {
  image: string;
  company_name: string;
  location: string;
}) {
  return (
    <div className={styles.company}>
      <img src={image} alt={company_name} width={42} height={42} />
      <div className={styles.wrap}>
        <p className={styles.name}>{company_name}</p>
        <p className={styles.locate}>{location}</p>
      </div>
    </div>
  );
}
