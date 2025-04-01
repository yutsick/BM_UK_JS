import Sidebar from './Sidebar.js';
import card from './Card.js';

export default function Main() {
  return `
    <div class="flex">
      <div class="w-full flex-1 bg-background-primary text-text-primary ">

  ${card(
    {
      ribbon: 'Best Mattress Overall',
      logo: 'dreamcloud_logo.png',
      title: 'Dreamcloud Mattress',
      scoreValue: '9.9',
      scoreText: 'Outstanding',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: true,
    }
  )}

  ${card(
    {
      ribbon: 'Best Value',
      logo: 'nectar-hybryd.webp',
      title: 'Nectar Hybrid Mattress',
      scoreValue: '9.7',
      scoreText: 'Excellent',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: false,

    }
  )}

  ${card(
    {
      ribbon: 'Best Luxury',
      logo: 'simba_logo.png',
      title: 'Simba Award Winning Hybrid Mattress Original',
      scoreValue: '9.4',
      scoreText: 'Excellent',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: false,
    }
  )}

  ${card(
    {

      logo: 'nectar_logo.webp',
      title: 'Nectar Premier Hybrid Mattress Review',
      scoreValue: '9.3',
      scoreText: 'Great',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: false,
    }
  )}

  ${card(
    {
      logo: 'hypnia-logo.png',
      title: 'Hypnia Supreme Hybrid Mattress Reviewl',
      scoreValue: '9.2',
      scoreText: 'Very Good',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: false,
    }
  )}

  ${card(
    {
      logo: 'LOLA-logo.png',
      title: 'Lola Mattress UK Review',
      scoreValue: '9.1',
      scoreText: 'Very Good',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: false,
    }
  )}
            
  ${card(
    {
      logo: 'ergoflex-logo.png',
      title: 'Ergoflex 5G Mattress UK Review',
      scoreValue: '8.6',
      scoreText: 'Our Score',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: false,
    }
  )}

  ${card(
    {
      logo: 'mattressman-logo.png',
      title: 'Mattressman UK Review',
      scoreValue: '8.5',
      scoreText: 'Our Score',
      list: [
        { 'Financing': 'As low as 0% APR financing with Affirm' },
        { 'Materials': 'Breathable cashmere blend, gel memory foam & innerspring coils' },
        { 'Firmness': 'Medium luxury firm' },
        { 'Shipping': 'Fast, free delivery and returns' },
        { 'Warranty': 'Lifetime Warranty' },
        { 'Certifications': 'Made with CertiPUR-US® certified foams' },
      ],
      link: '#',
      offer: 'FLASH Sale: Up To 50% OFF + Gifts!',
      hasBanner: false,
    }
  )}
    </div>
    <div class="hidden md:block w-[27%] bg-background-secondary text-text-secondary">
        ${Sidebar()}
    </div>
</div>
`
}