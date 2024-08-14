import React, { useEffect } from 'react';
import styles from './StackedCards.module.css';

const StackedCards = () => {
  useEffect(() => {
    const stack = document.querySelector(`.${styles.stack}`);
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains(styles.card));

    cards.forEach((card) => stack.appendChild(card));

    function moveCard() {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains(styles.card)) {
        lastCard.classList.add(styles.swap);

        setTimeout(() => {
          lastCard.classList.remove(styles.swap);
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    }

    let autoplayInterval = setInterval(moveCard, 4000);

    stack.addEventListener('click', function (e) {
      const card = e.target.closest(`.${styles.card}`);
      if (card && card === stack.lastElementChild) {
        card.classList.add(styles.swap);

        setTimeout(() => {
          card.classList.remove(styles.swap);
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    });

    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Wiser Contracting</h1>
        <p>
          Wise Choice Construction is climbing the ranks as not only the wiser choice but the top choice for your home, kitchen, and bathroom build or remodeling. Learn more about Wise Choice now.
        </p>
        <button className={styles.btn}>Explore More</button>
      </div>

      <div className={styles.stack}>
        <div className={styles.card}>
          <img
            src="https://assets.codepen.io/12793203/modern-house-luminescent-pool-n926oqb3p0b1kpwn.jpg"
            alt=""
          />
        </div>
        <div className={styles.card}>
          <img
            src="https://assets.codepen.io/12793203/Contemporary-bathroom-wallpaper-ideas-and-inspiration-for-a-black-and-gold-interior-design.jpg"
            alt=""
          />
        </div>
        <div className={styles.card}>
          <img src="https://assets.codepen.io/12793203/errtet.jpg" alt="" />
        </div>
        <div className={styles.card}>
          <img
            src="https://assets.codepen.io/12793203/custom-homes-why-choose-us2.jpg"
            alt=""
          />
        </div>
        <div className={styles.card}>
          <img
            src="https://assets.codepen.io/12793203/family-walking-to-new-construction-home.jpg"
            alt=""
          />
        </div>
        <div className={styles.card}>
          <img
            src="https://assets.codepen.io/12793203/bestbuilders2020jan_290949105-1080x675.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default StackedCards;
