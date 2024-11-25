import Sidebar from './Sidebar.js';
import cardFirst from './CardFirst.js'; 
import card from './Card.js'; 

export default function Main() {
    return `
    <div class="flex">

        <div class="w-full md:w-[70%] bg-background-primary text-text-primary">

            ${cardFirst(
                {
                    ribbon: 'Best Mattress Overall- UK 2024',
                    logo: 'dreamcloud_logo.webp',
                    title: 'DreamCloud UK - Luxurious Hybrid Mattress',
                    scoreValue: '9.8',
                    scoreText: 'Outstanding',
                    list: [
                        'Superior 365-night sleep trial',
                        'Forever Warranty™ protection',
                        'Combines comfort & support',
                        'Luxurious and cooling',
                        'Buy Now, Pay Later',
                        'Free returns and shipping',
                        'Lifetime warranty'
                    ],
                    special: '*** Get up to 50% OFF any mattress! ***'
                }
            )}

            ${card(
                {
                    logo: 'simba_logo.png',
                    title: 'Simba Hybrid Luxe Mattress Review',
                    scoreValue: '9.5',
                    scoreText: 'Excellent',
                    list: [
                        'Provides contouring and support',
                        'Targets support where you need it most',
                        'Keeps the mattress temperature just right',
                        'Conveniently delivered in a box to your door',
                        'Free delivery to most UK addresses',
                        '200-night risk-free trial',
                        'Lifetime warranty'
                    ],
                    special: {
                        underline: 'Made in the UK!',
                        red: 'Get free accessories'
                    }
                }
            )}

            ${card(
                {
                    logo: 'simba_logo.png',
                    title: 'Simba Award Winning Hybrid Mattress Original',
                    scoreValue: '9.4',
                    scoreText: 'Excellent',
                    list: [
                        '325,000+ five star reviews',
                        'Aerocoil® spring layers for comfort and airflow',
                        'Natural wool top layer for a cool sleep ',
                        'Unique Simba-Pure comfort layers',
                        'Long 200 nights sleep trial',
                        'Free delivery to most UK addresses',
                        'Lifetime warranty'
                    ],
                    special: {
                        underline: 'Made in the UK!',
                        red: null,
                    }
                }
            )}

            ${card(
                {
                    logo: 'nectar_logo.webp',
                    title: 'Nectar Premier Hybrid Mattress Review',
                    scoreValue: '9.3',
                    scoreText: 'Great',
                    list: [
                        'Breathable materials keep you cool',
                        '7-zone pressure relief',
                        'Motion isolation lets you sleep undisturbed',
                        'Free of harmful chemicals',
                        '365 night home trial',
                        'Forever warranty protection',
                        'Up to 45% off mattresses + free delivery'
                    ],
                    special: {
                        underline: null,
                        red: null
                    }

                }
            )}

            ${card(
                {
                    logo: 'hypnia-logo.png',
                    title: 'Hypnia Supreme Hybrid Mattress Reviewl',
                    scoreValue: '9.2',
                    scoreText: 'Very Good',
                    list: [
                        'Balances comfort and support',
                        'Keeps you cool and comfortable',
                        '7 support zones',
                        '30cm thickness',
                        '200-night sleep trial',
                    ],
                    special: {
                        underline: null,
                        red: 'Up to 60% off'
                    }
                }
            )}

            ${card(
                {
                    logo: 'LOLA-logo.png',
                    title: 'Lola Mattress UK Review',
                    scoreValue: '9.1',
                    scoreText: 'Very Good',
                    list: [
                        'Construction that provides support and coolness',
                        '100-night trial',
                        'Removable, machine-washable mattress cover',
                        '8-year manufacturer’s guarantee',
                    ],
                    special: {
                        underline: null,
                        red: null
                    }
                }
            )}
            
            ${card(
                {
                    logo: 'ergoflex-logo.png',
                    title: 'Ergoflex 5G Mattress UK Review',
                    scoreValue: '8.6',
                    scoreText: 'Our Score',
                    list: [
                        'Orthopaedic pressure relief ',
                        'Unique Cool-Sleep™ airflow system',
                        'OKEO-TEX® 100 Certified ',
                        'Fifth-generation design',
                    ],
                    special: {
                        underline: null,
                        red: null
                    }
                }
            )}

            ${card(
                {
                    logo: 'mattressman-logo.png',
                    title: 'Mattressman UK Review',
                    scoreValue: '8.5',
                    scoreText: 'Our Score',
                    list: [
                        '+8,000 mattresses and more',
                        'Price Promise policy',
                        'Next business day delivery (UK mainland)',
                        'Top brands (hybrid, memory foam, etc.)',
                    ],
                    special: {
                        underline: null,
                        red: null
                    }
                }
            )}


        </div>


        <div class="hidden md:block w-[30%] bg-background-secondary text-text-secondary">
            ${Sidebar()}
        </div>
    </div>

    `
}