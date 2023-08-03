import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header/page'
import Donuts from './donuts/page'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      Donuts are a type of fried dough that is popular all over the world.
      <p>They come in many different shapes and sizes, and can be topped with a varlety of glazes, toppings, and fillings. Some popular types of donuts include glazed donuts, jelly donuts, chocolate donuts, and cider mill donuts. Donuts are often eaten for breakfast, but they can also be enjoyed as a snack or dessert.</p>
      <p>Here are some fun facts about donuts:</p>
      <ul>
        <li>The first donut was invented in the 18th century by a Dutch baker.</li>
        <li>The first donut shop was opened in New York City in 1875.. </li>
        <li>The most popular type of donut in the United States is the glazed donut.. </li>
        <li>The world's largest donut weighed 1,167 pounds and was made in 2015.</li>
        <li>Donut Day is celebrated on the first Friday of June.</li>
      </ul>
      <p>So next time you're looking for a delicious and sweet treat, reach for a donut!</p>
      <br />
      <Link href="/donuts"><h5>Check out our list of donuts</h5></Link>
      <br />
    </main>
  )
}
