// Optional interactivity or analytics integration

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to Expedia!');
    });
});
// Array to store slideshow data for each deal
const slides = [
    {
        title: "Soneva Jani",
        images: [
            { img: "images/Soneva Jani - Maldives/Bon Abri maldives 8.jfif", caption: "breathtaking sunsets." },
            { img: "images/Soneva Jani - Maldives/Bon Abri maldives 9.webp", caption: "Discover the ultimate retreat for relaxation." },
            { img: "images/Soneva Jani - Maldives/Bon Abri maldives 10.webp", caption: "Immerse yourself in crystal-clear waters." },
            { img: "images/Soneva Jani - Maldives/Komandoo Island Resort & Spa 2.jfif", caption: "Discover the intimate charm of Komandoo Island Resort & Spa." },
            { img: "images/Soneva Jani - Maldives/Komandoo Island Resort & Spa 3.jfif", caption: "this adults-only paradise offers unparalleled luxury." },
            { img: "images/Soneva Jani - Maldives/Komandoo Island Resort & Spa 6.jpg", caption: "world-class dining." },
            { img: "images/Soneva Jani - Maldives/LHOHI INN BOUTIQUE HOTEL 2.jpg", caption: "Welcome to Lhohi Inn Boutique Hotel, where modern elegance meets island charm." },
            { img: "images/Soneva Jani - Maldives/LHOHI INN BOUTIQUE HOTEL 4.jfif", caption: "our cozy retreat offers personalized hospitality." },
            { img: "images/Soneva Jani - Maldives/LHOHI INN BOUTIQUE HOTEL.jfif", caption: "easy access to pristine beaches and vibrant local culture." },
            { img: "images/Soneva Jani - Maldives/The Happiness Sun Suites 1.jfif", caption: "Welcome to The Happiness Sun Suites – your sanctuary of comfort and serenity." },
            { img: "images/Soneva Jani - Maldives/The Happiness Sun Suites 3.jpg", caption: "Discover a perfect blend of contemporary elegance and serene comfort." },
            { img: "images/Soneva Jani - Maldives/The Happiness Sun Suites 7.jfif", caption: "Whether you’re here to unwind or explore, every moment is crafted to bring you joy and relaxation." }
        ]
    },
    {
        title: "Tokyo",
        images: [
            { img: "images/Tokyo/Best Hotels in Tokyo.jpg", caption: "Tokyo’s accommodations are as diverse as the city itself." },
            { img: "images/Tokyo/30 Best Tokyo Hotels.webp", caption: "Perfect for a short stay or solo travelers—compact, affordable, and futuristic." },
            { img: "images/Tokyo/Tokyo1.jpg", caption: "A towering landmark with breathtaking city views." },
            { img: "images/Tokyo/Things to do in Tokyo.jpg", caption: "Whether you're an adventure seeker, a foodie, or a culture lover, Tokyo promises a journey like no other." },
            { img: "images/Tokyo/Hilton Tokyo Odaiba.jfif", caption: "Savor Michelin-starred sushi or grab ramen from hidden alley shops." },
            { img: "images/Tokyo/new Tokyo Hotel.jpg", caption: "Experience a modern ryokan with tatami floors and hot springs." },
            { img: "images/Tokyo/Palace Hotel Tokyo.jfif", caption: " The Palace Hotel Tokyo is a stunning blend of luxury." },
            { img: "images/Tokyo/Stunning Ryokans.webp", caption: "A cozy, budget-friendly option offering authentic Japanese charm." },
            { img: "images/Tokyo/The Best Luxury Hotels in Tokyo.jpg", caption: "Stylish, intimate, and oozing personality." },
            { img: "images/Tokyo/The Enduring City.webp", caption: "Tokyo is a seamless blend of past, present, and future." },
            { img: "images/Tokyo/Tokyo Travel Guide.jfif", caption: "Tokyo promises an unforgettable journey." },
            { img: "images/Tokyo/Tokyo.webp", caption: "A city where tradition and modernity blend seamlessly." }
        ]
    },
    {
        title: "Serengeti",
        images: [
            { img: "images/Serengeti/Accommodations-in-Serengeti-National-Park.jpg", caption: " A blend of elegance and adventure." },
            { img: "images/Serengeti/Four Seasons opens safari lodge in Serengeti.jpg", caption: " Nestled in the heart of the park with stunning views." },
            { img: "images/Serengeti/Serengeti National Park 2.jpg", caption: "Get up close with nature alongside expert guides." },
            { img: "images/Serengeti/Serengeti National Park.JPG", caption: "Discover the Serengeti’s nocturnal wonders." },
            { img: "images/Serengeti/Serengeti Serena Safari Lodge.jpg", caption: "Campsites and smaller lodges for travelers on a budget." },
            { img: "images/Serengeti/Serengeti_sunset.jpg", caption: "From the thunderous hooves of the Great Migration to the stillness of a golden savannah sunset." },
            { img: "images/Serengeti/serengeti-national-park 3.jpg", caption: "Serengeti is a destination that stays with you forever." },
            { img: "images/Serengeti/Serengeti-Simba-Lodge.jpg", caption: "Experience the rich traditions of the Maasai people who call this region home." },
            { img: "images/Serengeti/Serengeti-Sopa-Lodge.jpg", caption: "Visitors play a vital role in supporting efforts to protect this unique ecosystem." },
            { img: "images/Serengeti/Serengeti1.JPG", caption: "Start planning your Serengeti adventure today and discover the magic of this timeless wilderness." },
            { img: "images/Serengeti/Serengeti2.jpg", caption: "Spot lions, leopards, elephants, rhinoceroses, and buffalo in their natural habitat." },
            { img: "images/Serengeti/singitagrumeti.jpg", caption: "Most iconic and awe-inspiring destinations." }
        ]
    },
    {
        title: "Tulum,Mexico",
        images: [
            { img: "images/Tulum-Beach Mexico/Beachfront Hotels.jpg", caption: "A tranquil retreat with beachfront elegance." },
            { img: "images/Tulum-Beach Mexico/Cocoon Hotel & Resort.jpg", caption: "A bohemian haven with a touch of art." },
            { img: "images/Tulum-Beach Mexico/Dreams Tulum Resort & Spa.webp", caption: "Perfect for those seeking a soulful, nature-focused stay." },
            { img: "images/Tulum-Beach Mexico/Five-Star Luxury Resort.webp", caption: "Tulum is more than a destination; it’s an experience that nourishes the soul." },
            { img: "images/Tulum-Beach Mexico/Hidden-Worlds-in-Mexico.jpg", caption: "Explore vibrant coral reefs and underwater caves." },
            { img: "images/Tulum-Beach Mexico/hotel-muare-tulum.jpg", caption: "Nestled along the Caribbean coastline of Mexico’s Yucatán Peninsula." },
            { img: "images/Tulum-Beach Mexico/Hotels, Resorts.jpg", caption: "Tulum is a dream destination for travelers seeking a perfect blend of pristine beaches, vibrant culture, and ancient history." },
            { img: "images/Tulum-Beach Mexico/solo-travel-to-latin-america-tulum.jpg", caption: "Explore the iconic cliffside ruins of Tulum, a testament to the region's rich history." },
            { img: "images/Tulum-Beach Mexico/Things to Do in Tulum.jpg", caption: "Unique swimming and snorkeling spots surrounded by natural beauty." },
            { img: "images/Tulum-Beach Mexico/Tulum Luxury and 5 Star Hotels.jfif", caption: "The heart of Tulum town, filled with lively markets, authentic eateries, and artisan shops." },
            { img: "images/Tulum-Beach Mexico/Tulum, Mexico.jpg", caption: "Dive into refreshing natural sinkholes like Gran Cenote and Dos Ojos." },
            { img: "images/Tulum-Beach Mexico/tulum-art.jpg", caption: "Tulum offers something special for every traveler." }
        ]
    },
    {
        title: "Bali,Indonesia",
        images: [
            { img: "images/Bali, Indonesia/Bali Island of Gods.jpg", caption: "Known as the Island of the Gods, Bali offers a perfect blend of adventure, relaxation, and cultural discovery." },
            { img: "images/Bali, Indonesia/Bali Tourism.png", caption: "Bali is a tropical paradise that captivates visitors with its lush landscapes." },
            { img: "images/Bali, Indonesia/HOTEL RESTAURANTS.jpg", caption: "Bali’s beaches cater to every kind of traveler." },
            { img: "images/Bali, Indonesia/Hujan Locale, Ubud.webp", caption: "The cultural heart of Bali, known for its rice terraces." },
            { img: "images/Bali, Indonesia/Indonesia's Bali island.webp", caption: "These islands offer crystal-clear waters, snorkeling, and dramatic landscapes." },
            { img: "images/Bali, Indonesia/Indonesian Food in Bali.jpg", caption: "Iconic stepped fields that showcase Bali’s agricultural heritage." },
            { img: "images/Bali, Indonesia/IWA RESTAURANT.jpg", caption: "Experience traditional Balinese dances, vibrant ceremonies, and intricate art." },
            { img: "images/Bali, Indonesia/Metro Staycation.jpg", caption: "Learn to prepare dishes like nasi goreng and satay." },
            { img: "images/Bali, Indonesia/Must visit places in Bali.jpg", caption: "A stunning sea temple perched on a rock formation, perfect for sunset views." },
            { img: "images/Bali, Indonesia/Must-Visit Shops.webp", caption: "From bustling markets to chic boutiques, the island offers unique treasures to take home as a reminder of your journey." },
            { img: "images/Bali, Indonesia/Restaurants in Bali.jpg", caption: "Bali's restaurant scene is as diverse as its landscapes." },
            { img: "images/Bali, Indonesia/Serene Beach Haven.jpg", caption: "Bali’s beaches are legendary, offering everything from secluded coves to lively surf spots." }
        ]
    },
    {
        title: "Hawaii,USA",
        images: [
            { img: "images/Hawaii, USA/Azure Restaurant.webp", caption: "Azure Restaurant offers an exquisite dining experience that blends world-class cuisine with stunning ocean views." },
            { img: "images/Hawaii, USA/Big Island, Hawaii, Restaurants.jfif", caption: "From fresh seafood to farm-to-table creations." },
            { img: "images/Hawaii, USA/Hawaii - USA - Destinations.jpg", caption: "Hawaii is a dream destination offering a harmonious blend of breathtaking landscapes." },
            { img: "images/Hawaii, USA/Hawaii Destination Guide beach.jpg", caption: "Hawaii’s six main islands each provide a unique slice of paradise." },
            { img: "images/Hawaii, USA/Hilton Hawaiian Village Beach.jfif", caption: "From Waikiki’s famous sands to Maui’s secluded coves, Hawaii’s beaches are unparalleled." },
            { img: "images/Hawaii, USA/Historic Hotels in Hawaii.jpg", caption: "Trendy and retro with a local flair." },
            { img: "images/Hawaii, USA/Honolulu.jfif", caption: "Private beachfront homes and condos are popular for families and groups." },
            { img: "images/Hawaii, USA/Hotels in Hawaii 1.jpg", caption: "A peaceful escape surrounded by coffee plantations." },
            { img: "images/Hawaii, USA/Hotels in Hawaii 2.webp", caption: "Hawaii’s natural beauty, vibrant culture, and endless activities." },
            { img: "images/Hawaii, USA/Island of Hawaii Hotels.jfif", caption: "A secluded retreat with luxurious resorts and rugged off-road adventures." },
            { img: "images/Hawaii, USA/Map of the State of Hawaii.jfif", caption: "Escape the crowds with untouched beaches and authentic Hawaiian culture." },
            { img: "images/Hawaii, USA/Waikiki, Oahu Restaurants.webp", caption: "Whether you’re seeking relaxation, adventure, or a bit of both, the islands welcome you with open arms and the spirit of aloha." }
        ]
    },
    {
        title: "Manuel Antonio",
        images: [
            { img: "images/Manuel Antonio/Antonio National Park in Costa Rica.jfif", caption:"Home to capuchin monkeys, iguanas, scarlet macaws, and more." },
            { img: "images/Manuel Antonio/Antonio, Costa Rica.jfif", caption: "A stunning beach within the park that’s ideal for swimming and sunbathing ." },
            { img: "images/Manuel Antonio/Hotel Manuel Antonio 1.jpg", caption: "A blend of luxury and sustainability with incredible ocean views." },
            { img: "images/Manuel Antonio/Hotel Manuel Antonio.jpg", caption: "Nestled in a private nature reserve, offering personalized service." },
            { img: "images/Manuel Antonio/Hotels in Manuel Antonio.webp", caption: "An adults-only retreat with stylish villas and infinity pools." },
            { img: "images/Manuel Antonio/manuel antonio beach.jpeg", caption: "Known for its lively atmosphere and watersports like surfing and parasailing." },
            { img: "images/Manuel Antonio/Manuel Antonio Hotels.webp", caption: "Manuel Antonio offers a wide range of accommodations." },
            { img: "images/Manuel Antonio/Manuel Antonio National Park 2.jpg", caption: "this park offers an unforgettable experience for nature enthusiasts and adventure seekers alike." },
            { img: "images/Manuel Antonio/Manuel Antonio National Park.jpeg", caption: " located on Costa Rica’s Pacific coast, is one of the country’s most beloved natural treasures." },
            { img: "images/Manuel Antonio/Manuel Antonio Resorts.jpg", caption: "Immerse yourself in nature with accommodations that blend seamlessly into the rainforest." },
            { img: "images/Manuel Antonio/national park manuel antonio.jpg", caption: "Discover the nocturnal wonders of the rainforest with a guided night hike." },
            { img: "images/Manuel Antonio/What to do in Manuel Antonio.jpg", caption: "Go kayaking, paddleboarding, or diving in the clear waters of the Pacific." }
        ]
    },
    {
        title: "Morocco",
        images: [
            { img: "images/Morocco/Enjoy Luxurious Accomodations.jpg", caption:"For an unforgettable adventure, spend a night in a luxury tent under the stars in the Sahara Desert." },
            { img: "images/Morocco/Glamping in Morocco.jpg", caption: "These camps often include en-suite bathrooms, gourmet meals, and cultural experiences like music and storytelling." },
            { img: "images/Morocco/Grand Southern.jpg", caption: "Embark on camel treks,watch unforgettable sunrises over the dunes." },
            { img: "images/Morocco/Merzouga.jpg", caption: "Merzouga offers some of the clearest night skies." },
            { img: "images/Morocco/Morocco desert camp.png", caption: "Here, you can enjoy traditional performances and learn about the unique culture of the Gnawa people." },
            { img: "images/Morocco/Morocco.jpg", caption: "Morocco offers affordable yet charming guesthouses and hostels that provide excellent value." },
            { img: "images/Morocco/Morocco2.webp", caption: "Ideal for travelers seeking authenticity and a central location in Morocco’s historic medinas." },
            { img: "images/Morocco/Morocco3.jpg", caption: "Traditional Moroccan homes converted into boutique hotels. These typically feature central courtyards, intricate tilework, and warm hospitality." },
            { img: "images/Morocco/Morocco4.webp", caption: "A family-friendly option offering stunning sea views and an authentic Moroccan feel." },
            { img: "images/Morocco/My Experience Glamping.jpg", caption: "Morocco offers a diverse range of accommodations to suit every traveler." },
            { img: "images/Morocco/The Best Way to See.webp", caption: "Experience nomadic life in luxury tents beneath a blanket of stars." },
            { img: "images/Morocco/The most beautiful hotels.jpg", caption: "Morocco is a country where ancient traditions blend seamlessly with modern luxury." }
        ]
    },
    {
        title: "Khao Sok National Park",
        images: [
            { img: "images/Khao Sok National Park/Best accommodations.webp", caption:"Relaxing by the pool, guided hikes, and park visits." },
            { img: "images/Khao Sok National Park/Hotel Deals.jpg", caption: "Spacious, air-conditioned floating villas with private balconies and infinity pools." },
            { img: "images/Khao Sok National Park/Hotels in Khao Sok.jpg", caption: "Sustainable jungle lodge with eco-friendly bungalows." },
            { img: "images/Khao Sok National Park/Khao Sok National Park 2.webp", caption: "Arranged day trips, bamboo rafting, and cultural experiences." },
            { img: "images/Khao Sok National Park/Khao Sok national park.jpg", caption: "Jungle trekking, kayaking, and exploring nearby waterfalls." },
            { img: "images/Khao Sok National Park/National Park Hotels.webp", caption: "Rustic bamboo-style rooms offering an authentic jungle vibe." },
            { img: "images/Khao Sok National Park/Park to Phuket.webp", caption: "Explore the Sok River by bamboo raft or kayak, a tranquil way to experience the lush surroundings." },
            { img: "images/Khao Sok National Park/Stay Overnight 2.jpg", caption: "A blend of comfort and adventure, offering well-appointed floating rooms." },
            { img: "images/Khao Sok National Park/Stay Overnight.jpeg", caption: "A luxurious option with modern floating villas and stunning lake views." },
            { img: "images/Khao Sok National Park/Thailand Luxury Travel.jpg", caption: "Day or overnight tours to Cheow Lan Lake, often including wildlife spotting and cave visits." },
            { img: "images/Khao Sok National Park/The Complete Guide.jpg", caption: " A refreshing reward at the end of a jungle trek." },
            { img: "images/Khao Sok National Park/Tree House Resort.jpg", caption: "A unique stay in treehouse-style accommodations, ideal for families and nature lovers." }
        ]
    },
    {
        title: "Bangkok,Thailand",
        images: [
            { img: "images/Bangkok,Thailand/16 Best Hotels.jpg", caption:"Bangkok offers a wide range of accommodations, from luxurious five-star properties to budget-friendly boutique stays." },
            { img: "images/Bangkok,Thailand/About Bangkok.jpg", caption: "Home to the massive golden Reclining Buddha and a hub for traditional Thai massage." },
            { img: "images/Bangkok,Thailand/Bangkok_Location.webp", caption: "Bangkok is a city that offers a perfect blend of history, culture, and modern attractions." },
            { img: "images/Bangkok,Thailand/Business District.jpg", caption: "Whether you're visiting for its magnificent temples, bustling markets, or vibrant nightlife,something for every traveler." },
            { img: "images/Bangkok,Thailand/DECODING THE ATTRACTION.jpg", caption: "Bangkok is a seamless blend of old-world charm and futuristic modernity." },
            { img: "images/Bangkok,Thailand/Hotels in Bangkok.jpg", caption: "Art Deco design, lush gardens, and private pool villas." },
            { img: "images/Bangkok,Thailand/Siam Kempinski Hotel.webp", caption: "Pool, on-site dining, and clean, modern rooms." },
            { img: "images/Bangkok,Thailand/Thailand Bangkok-Pattaya.webp", caption: "Take a boat ride along the Chao Phraya River." },
            { img: "images/Bangkok,Thailand/Lebua at State Tower.jpg", caption: "Lebua at State Tower is one of Bangkok’s most iconic luxury hotels." },
            { img: "images/Bangkok,Thailand/The Best Time To Visit Bangkok.webp", caption: "Bangkok is a city that never sleeps. It offers an incredible mix of culture, history, shopping, and nightlife." },
            { img: "images/Bangkok,Thailand/The Ultimate Guide to Bangkok.jpg", caption: " Bangkok’s charm lies in its ability to cater to every type of traveler." },
            { img: "images/Bangkok,Thailand/Top Hotels.webp", caption: "Outdoor pool, spa, and tennis courts." }
        ]
    },
    {
        title: "Paris,France",
        images: [
            { img: "images/Paris,France/Café Culture 2.webp", caption:"Enjoy coffee and pastries at Parisian cafes, such as Café de Flore." },
            { img: "images/Paris,France/Café Culture.jfif", caption: "Many cafés have terraces. Opt for an outdoor seat to soak in the city’s energy." },
            { img: "images/Paris,France/Eiffel Tower.jpg", caption: "The ultimate symbol of Paris, the Eiffel Tower is a must-visit." },
            { img: "images/Paris,France/Hotel Le Meurice 2.jpg", caption: "A luxurious five-star hotel blending classic elegance with modern comfort." },
            { img: "images/Paris,France/Hotel Le Meurice.jfif", caption: "Perfect for travelers seeking a stylish yet cozy stay." },
            { img: "images/Paris,France/Louvre Museum.jpeg", caption: "Home to the Mona Lisa, the Louvre is the world’s largest art museum." },
            { img: "images/Paris,France/Louvre Museum 2.webp", caption: "Its vast collection spans centuries and includes masterpieces from ancient civilizations to the 19th century." },
            { img: "images/Paris,France/Montmartre 2.jpg", caption: "Explore the bohemian charm of Montmartre, known for its artistic heritage." },
            { img: "images/Paris,France/Montmartre 1.jpg", caption: "Visit the Basilica of the Sacred Heart for stunning views of Paris." },
            { img: "images/Paris,France/Notre-Dame Cathedral 1.jfif", caption: "Stunning stained glass windows, and breathtaking views from its towers." },
            { img: "images/Paris,France/Notre-Dame Cathedral 2.webp", caption: "A masterpiece of Gothic architecture." },
            { img: "images/Paris,France/Notre-Dame Cathedral 3.jfif", caption: "This historic cathedral is renowned for its intricate facade." }
        ]
    },
    {
        title: "London,England",
        images: [
            { img: "images/London,England/Buckingham Palace.jpg", caption:"Witness the Changing of the Guard ceremony or take a guided tour during the summer to explore the royal residence." },
            { img: "images/London,England/Camden Market.jpg", caption: "Explore eclectic stalls offering everything from vintage clothing to global street food." },
            { img: "images/London,England/Hyde Park and Kensington Gardens.jpg", caption: "Relax in these sprawling green spaces, perfect for picnics, boating, or visiting the Diana Memorial Fountain." },
            { img: "images/London,England/London Eye.jpg", caption: "Enjoy breathtaking panoramic views of the city from this iconic Ferris wheel on the South Bank." },
            { img: "images/London,England/The British Museum 1.jpg", caption: "One of the world’s greatest museums." },
            { img: "images/London,England/The British Museum 2.jpg", caption: "Featuring artifacts like the Rosetta Stone and Egyptian mummies. Admission is free." },
            { img: "images/London,England/The Houses of Parliament and Big Ben.webp", caption: "Admire the stunning Gothic architecture and take a guided tour to learn about the UK’s political history." },
            { img: "images/London,England/The Ritz London 1.webp", caption: "A symbol of luxury and elegance." },
            { img: "images/London,England/The Ritz London 2.jpg", caption: "World-class dining, and a prime location near Green Park." },
            { img: "images/London,England/The Ritz London 3.jpg", caption: "Offering opulent rooms." },
            { img: "images/London,England/Tower of London.webp", caption: "Discover this historic fortress, home to the Crown Jewels and tales of intrigue and treachery." },
            { img: "images/London,England/West End Theatre District.webp", caption: "Catch a play or musical in the heart of London’s entertainment scene." }
        ]
    },
    {
        title: "Dubai,UAE",
        images: [
            { img: "images/Dubai,UAE/Burj Khalifa.jpg", caption:"The tallest building in the world, the Burj Khalifa offers breathtaking views from its observation decks on the 124th and 148th floors." },
            { img: "images/Dubai,UAE/Dubai Fountain.jpg", caption: "Enjoy captivating water and light shows at the base of the Burj Khalifa." },
            { img: "images/Dubai,UAE/Dubai Marina.webp", caption: "Stroll along the waterfront promenade, dine at chic restaurants, or take a luxury yacht tour." },
            { img: "images/Dubai,UAE/Dubai Miracle Garden.jpg", caption: "A floral wonderland with over 150 million flowers arranged in stunning patterns and sculptures." },
            { img: "images/Dubai,UAE/Fine Dining.jpg", caption: "Indulge in gourmet experiences at restaurants by celebrity chefs like Gordon Ramsay’s Hell’s Kitchen or Nobu." },
            { img: "images/Dubai,UAE/Grand Hyatt Dubai 1.jfif", caption: "A sprawling property with lush gardens." },
            { img: "images/Dubai,UAE/Grand Hyatt Dubai 2.webp", caption: "Multiple pools, and family-friendly amenities." },
            { img: "images/Dubai,UAE/Jumeirah Beach Residence.jpg", caption: "Known for its pristine beaches, dining options, and lively atmosphere." },
            { img: "images/Dubai,UAE/Palm Jumeirah.jpg", caption: "An artificial island shaped like a palm tree, home to luxury hotels, restaurants, and the Atlantis, The Palm resort." },
            { img: "images/Dubai,UAE/Ski Dubai.jpg", caption: "An indoor ski resort located in the Mall of the Emirates, offering skiing, snowboarding, and penguin encounters." },
            { img: "images/Dubai,UAE/The Dubai Mall 1.jpg", caption: "More than just a shopping destination." },
            { img: "images/Dubai,UAE/The Dubai Mall 2.jpg", caption: "It features an indoor ice rink, an aquarium, and endless entertainment options." }
        ]
    },
    {
        title: "New York City,USA",
        images: [
            { img: "images/New York City,USA/Broadway and the Theater District.jpg", caption:"Experience world-class performances in the heart of NYC’s entertainment scene." },
            { img: "images/New York City,USA/Brooklyn Bridge.jpg", caption: "Walk or bike across this historic bridge for stunning views of Manhattan and Brooklyn." },
            { img: "images/New York City,USA/Central Park.jpg", caption: "This vast urban oasis offers walking trails, boating, and landmarks like Bethesda Terrace and Strawberry Fields." },
            { img: "images/New York City,USA/Empire State Building.jpg", caption: "Enjoy panoramic views of the city from one of its most iconic skyscrapers." },
            { img: "images/New York City,USA/The Standard, High Line 1.jpg", caption: "A trendy hotel in the Meatpacking District with great views of the Hudson River." },
            { img: "images/New York City,USA/The Standard, High Line 2.jpg", caption: "A favorite for those seeking a mix of vintage charm and modern luxury." },
            { img: "images/New York City,USA/Rockefeller Center.jpg", caption: "Famous for its seasonal ice rink, Top of the Rock Observation Deck, and Radio City Music Hall." },
            { img: "images/New York City,USA/Statue of Liberty and Ellis Island.jpg", caption: "Visit the iconic symbol of freedom and explore the Immigration Museum at Ellis Island." },
            { img: "images/New York City,USA/The Metropolitan Museum of Art 1.webp", caption: "One of the world’s largest art museums." },
            { img: "images/New York City,USA/The Metropolitan Museum of Art 2.jpg", caption: "Featuring works from ancient to modern times." },
            { img: "images/New York City,USA/The Plaza Hotel 1.jfif", caption: "An iconic luxury hotel overlooking Central Park." },
            { img: "images/New York City,USA/The Plaza Hotel 2.jpg", caption: "Known for its opulence and history." }
        ]
    },
    {
        title: "Machu Picchu,Peru",
        images: [
            { img: "images/Machu Picchu,Peru/Belmond Sanctuary Lodge.jfif", caption:"The only hotel located at the entrance to Machu Picchu, offering unparalleled access and luxury." },
            { img: "images/Machu Picchu,Peru/Birdwatching.jpg", caption: "Spot exotic Andean bird species in the surrounding cloud forests." },
            { img: "images/Machu Picchu,Peru/By Train 1.jpg", caption: "Take a scenic train ride from Cusco or Ollantaytambo to Aguas Calientes." },
            { img: "images/Machu Picchu,Peru/By Train 2.jpg", caption: "Options include the luxurious Hiram Bingham Train or budget-friendly services like PeruRail and Inca Rail." },
            { img: "images/Machu Picchu,Peru/Exploring Aguas Calientes.webp", caption: "This charming town, also known as Machu Picchu Pueblo, is the gateway to the site and offers hot springs, local markets, and Peruvian cuisine." },
            { img: "images/Machu Picchu,Peru/Huayna Picchu.jpg", caption: "For the adventurous, a climb up this steep mountain rewards visitors with bird’s-eye views of Machu Picchu and the surrounding valleys." },
            { img: "images/Machu Picchu,Peru/Inkaterra Machu Picchu Pueblo Hotel 1.jfif", caption: "Nestled in lush gardens in Aguas Calientes." },
            { img: "images/Machu Picchu,Peru/Inkaterra Machu Picchu Pueblo Hotel 2.jpg", caption: "This eco-friendly hotel combines comfort with sustainability." },
            { img: "images/Machu Picchu,Peru/Intihuatana Stone.jpg", caption: "This ritual stone, believed to be an astronomical clock or calendar, is one of the most intriguing artifacts in the site." },
            { img: "images/Machu Picchu,Peru/Temple of the Sun.jpg", caption: "A significant religious site within Machu Picchu, this temple is known for its unique stonework and alignment with the sun’s rays during solstices." },
            { img: "images/Machu Picchu,Peru/The Main Plaza.webp", caption: "This open area serves as the heart of Machu Picchu, surrounded by impressive terraces and ceremonial buildings." },
            { img: "images/Machu Picchu,Peru/The Sun Gate (Inti Punku).webp", caption: "Serving as the original entrance to Machu Picchu,the Sun Gate offers a stunning panoramic view of the citadel. It’s a must-visit for those hiking the Inca Trail." }
        ]
    },
    {
        title: "Great Barrier Reef,Australia",
        images: [
            { img: "images/Great Barrier Reef,Australia/Cairns.jpg", caption:"Known as the gateway to the Great Barrier Reef, Cairns offers easy access to stunning reefs, rainforests, and adventure activities." },
            { img: "images/Great Barrier Reef,Australia/Fitzroy Island Resort 1.jpg", caption: "Located on a rainforest-covered island." },
            { img: "images/Great Barrier Reef,Australia/Fitzroy Island Resort 2.jpg", caption: "This eco-resort provides easy access to the reef and offers a range of water activities." },
            { img: "images/Great Barrier Reef,Australia/Green Island.jpg", caption: "Located just off Cairns, this rainforest-covered island offers glass-bottom boat tours, and family-friendly activities." },
            { img: "images/Great Barrier Reef,Australia/Hamilton Island.jpg", caption: "One of the most developed islands in the Whitsundays, Hamilton Island features luxury accommodations, water sports, and direct access to the reef." },
            { img: "images/Great Barrier Reef,Australia/Heron Island.jpg", caption: "A coral cay known for its exceptional snorkeling and diving right off the shore." },
            { img: "images/Great Barrier Reef,Australia/Lizard Island Resort.jpg", caption: "An exclusive retreat on a secluded island, offering private beaches and premier diving experiences." },
            { img: "images/Great Barrier Reef,Australia/Port Douglas.jpg", caption: "A charming coastal town offering a laid-back atmosphere and proximity to the reef and Daintree Rainforest." },
            { img: "images/Great Barrier Reef,Australia/Reef Cruises.jpg", caption: "Join a day cruise or multi-day liveaboard trip to explore various parts of the reef." },
            { img: "images/Great Barrier Reef,Australia/Scenic Flights.jpg", caption: "Experience the vastness and beauty of the reef from above with a helicopter or seaplane tour." },
            { img: "images/Great Barrier Reef,Australia/Snorkeling and Diving.jpeg", caption: "Explore vibrant coral gardens teeming with marine life, including colorful fish, sea turtles, rays, and reef sharks." },
            { img: "images/Great Barrier Reef,Australia/Whitsunday Islands.webp", caption: "A group of 74 idyllic islands, the Whitsundays are famous for their pristine beaches, including the iconic Whitehaven Beach, and luxury resorts." }
        ]
    },
    {
        title: "Santorini,Greece",
        images: [
            { img: "images/Santorini,Greece/Akrotiri Archaeological Site.jpg", caption:"Explore the well-preserved ruins of an ancient Minoan city buried by volcanic ash. Akrotiri is often referred to as the Pompeii of the Aegean." },
            { img: "images/Santorini,Greece/Ammoudi Bay.jpg", caption: "Located below Oia, this charming bay is perfect for fresh seafood dining and diving into the turquoise waters." },
            { img: "images/Santorini,Greece/Caldera Cruises.jpg", caption: "Take a boat tour around the caldera to visit the volcanic islands of Nea Kameni and Palea Kameni and swim in the hot springs." },
            { img: "images/Santorini,Greece/Canaves Oia Suites 1.jpg", caption: "Perfect for honeymooners." },
            { img: "images/Santorini,Greece/Canaves Oia Suites 2.jpg", caption: "This hotel features cave-style suites and private plunge pools." },
            { img: "images/Santorini,Greece/Fira.jpg", caption: "The island's capital, Fira, offers vibrant nightlife, stunning caldera views, and access to cultural attractions like the Archaeological Museum of Thera." },
            { img: "images/Santorini,Greece/Katikies Hotel, Oia 1.jpg", caption: "A luxury hotel offering stunning caldera views." },
            { img: "images/Santorini,Greece/Katikies Hotel, Oia 2.jpg", caption: "Infinity pools, and world-class service." },
            { img: "images/Santorini,Greece/Oia Village.jpg", caption: "Famous for its breathtaking sunsets, Oia is a picturesque village perched on the caldera's edge." },
            { img: "images/Santorini,Greece/Pyrgos Village.jpg", caption: "A traditional village offering panoramic views of the island, Pyrgos is rich in history and boasts beautiful churches and narrow alleys." },
            { img: "images/Santorini,Greece/Red Beach.jpg", caption: "Known for its striking red-hued cliffs and unique volcanic sand, Red Beach is a must-visit for its dramatic scenery and crystal-clear waters." },
            { img: "images/Santorini,Greece/Sunset Viewing.jpg", caption: "Witness the world-famous Santorini sunset from Oia, Imerovigli, or aboard a catamaran cruise." }
        ]
    },
    {
        title: "Swiss Alps,Switzerland",
        images: [
            { img: "images/Swiss Alps,Switzerland/Bernese Oberland.webp", caption:"A picture-perfect region filled with alpine villages, waterfalls, and peaks like Eiger, Mönch, and Jungfrau." },
            { img: "images/Swiss Alps,Switzerland/Exploring Glaciers.jfif", caption: "Visit the Aletsch Glacier or take a guided glacier hike for a once-in-a-lifetime experience." },
            { img: "images/Swiss Alps,Switzerland/Grindelwald.webp", caption: "A charming village offering incredible views, hiking trails, and the gateway to the Eiger." },
            { img: "images/Swiss Alps,Switzerland/Interlaken.jpg", caption: "Nestled between Lake Thun and Lake Brienz, Interlaken is a hub for adventure sports like paragliding, skydiving, and canyoning." },
            { img: "images/Swiss Alps,Switzerland/Jungfraujoch (Top of Europe).jpg", caption: "Reachable by a scenic train ride, Jungfraujoch offers breathtaking views, an Ice Palace, and the Aletsch Glacier, the longest glacier in the Alps." },
            { img: "images/Swiss Alps,Switzerland/Lake Geneva Region.jpg", caption: "Surrounding the stunning Lake Geneva, this area features vineyards, historic castles like Chillon Castle, and the vibrant cities of Montreux and Lausanne." },
            { img: "images/Swiss Alps,Switzerland/Matterhorn.jpg", caption: "One of the most iconic peaks in the world, the Matterhorn towers over Zermatt." },
            { img: "images/Swiss Alps,Switzerland/Paragliding.jpg", caption: "Experience the Alps from above with tandem paragliding adventures in Interlaken or Lauterbrunnen." },
            { img: "images/Swiss Alps,Switzerland/Scenic Train Journeys.jpg", caption: "Take iconic routes like the Glacier Express, Bernina Express, or GoldenPass Line for unparalleled views of the Alps." },
            { img: "images/Swiss Alps,Switzerland/Victoria Jungfrau Grand Hotel & Spa, Interlaken 1.jpg", caption: "Combining elegance with adventure." },
            { img: "images/Swiss Alps,Switzerland/Victoria Jungfrau Grand Hotel & Spa, Interlaken 2.jfif", caption: "This hotel is perfect for those exploring the Bernese Oberland." },
            { img: "images/Swiss Alps,Switzerland/Visiting Thermal Spas.jpg", caption: "Relax in natural hot springs and spas, such as those in Leukerbad or Scuol." }
        ]
    },
    {
        title: "Patagonia,Argentinad",
        images: [
            { img: "images/Patagonia, Argentina/Cultural Experiences.jpg", caption:"Learn about the region’s indigenous heritage and visit estancias (ranches) to experience traditional Patagonian life." },
            { img: "images/Patagonia, Argentina/El Calafate.jpg", caption: "This charming town is the gateway to Los Glaciares National Park and the starting point for exploring the Perito Moreno Glacier." },
            { img: "images/Patagonia, Argentina/Estancia Cristina, Los Glaciares National Park.jpg", caption: "A remote estancia offering cultural experiences, hiking, and glacier tours." },
            { img: "images/Patagonia, Argentina/Explora Patagonia.jpg", caption: "A luxury lodge in Torres del Paine National Park offering guided excursions and stunning views." },
            { img: "images/Patagonia, Argentina/Los Cauquenes Resort & Spa, Ushuaia 1.webp", caption: "A five-star resort combining luxury and adventure at the end of the world." },
            { img: "images/Patagonia, Argentina/Los Cauquenes Resort & Spa, Ushuaia 2.jpg", caption: "A stunning lakeside resort offering golf, spa services, and outdoor activities." },
            { img: "images/Patagonia, Argentina/Mount Fitz Roy.jpg", caption: "Known locally as Cerro Chaltén, this iconic peak attracts hikers and climbers from around the globe." },
            { img: "images/Patagonia, Argentina/Perito Moreno Glacier.jpg", caption: "Located in Los Glaciares National Park, this massive glacier is one of the few in the world still advancing." },
            { img: "images/Patagonia, Argentina/Torres del Paine National Park (Chile border).jpg", caption: "Famous for its towering granite peaks, turquoise lakes, and diverse wildlife." },
            { img: "images/Patagonia, Argentina/Ushuaia The End of the World.jpg", caption: "Known as the southernmost city on Earth, Ushuaia is the starting point for Antarctic cruises." },
            { img: "images/Patagonia, Argentina/Wildlife Watching 1.jpg", caption: "Spot guanacos, condors, flamingos, and more." },
            { img: "images/Patagonia, Argentina/Wildlife Watching 2.webp", caption: "Peninsula Valdés is particularly famous for marine life, including whales and penguins." }
        ]
    },
    {
        title: "Chile",
        images: [
            { img: "images/Patagonia, Argentina/Cultural Experiences.jpg", caption:"Learn about the region’s indigenous heritage and visit estancias (ranches) to experience traditional Patagonian life." },
            { img: "images/Patagonia, Argentina/El Calafate.jpg", caption: "This charming town is the gateway to Los Glaciares National Park and the starting point for exploring the Perito Moreno Glacier." },
            { img: "images/Patagonia, Argentina/Estancia Cristina, Los Glaciares National Park.jpg", caption: "A remote estancia offering cultural experiences, hiking, and glacier tours." },
            { img: "images/Patagonia, Argentina/Explora Patagonia.jpg", caption: "A luxury lodge in Torres del Paine National Park offering guided excursions and stunning views." },
            { img: "images/Patagonia, Argentina/Los Cauquenes Resort & Spa, Ushuaia 1.webp", caption: "A five-star resort combining luxury and adventure at the end of the world." },
            { img: "images/Patagonia, Argentina/Los Cauquenes Resort & Spa, Ushuaia 2.jpg", caption: "A stunning lakeside resort offering golf, spa services, and outdoor activities." },
            { img: "images/Patagonia, Argentina/Mount Fitz Roy.jpg", caption: "Known locally as Cerro Chaltén, this iconic peak attracts hikers and climbers from around the globe." },
            { img: "images/Patagonia, Argentina/Perito Moreno Glacier.jpg", caption: "Located in Los Glaciares National Park, this massive glacier is one of the few in the world still advancing." },
            { img: "images/Patagonia, Argentina/Torres del Paine National Park (Chile border).jpg", caption: "Famous for its towering granite peaks, turquoise lakes, and diverse wildlife." },
            { img: "images/Patagonia, Argentina/Ushuaia The End of the World.jpg", caption: "Known as the southernmost city on Earth, Ushuaia is the starting point for Antarctic cruises." },
            { img: "images/Patagonia, Argentina/Wildlife Watching 1.jpg", caption: "Spot guanacos, condors, flamingos, and more." },
            { img: "images/Patagonia, Argentina/Wildlife Watching 2.webp", caption: "Peninsula Valdés is particularly famous for marine life, including whales and penguins." }
        ]
    },
    {
        title: "Queenstown,New Zealand",
        images: [
            { img: "images/Queenstown New Zealand/Botswana Butchery.jpg", caption:"A fine-dining restaurant specializing in premium meats and local produce." },
            { img: "images/Queenstown New Zealand/Bungy Jumping.webp", caption: "Try the Kawarau Bridge Bungy or the Nevis Bungy for an unforgettable experience." },
            { img: "images/Queenstown New Zealand/Eichardt's Private Hotel.jpg", caption: "A boutique hotel offering elegant suites, exceptional service, and stunning lake views." },
            { img: "images/Queenstown New Zealand/Heli-Skiing.jpg", caption: "Access untouched powder snow in the backcountry with a thrilling helicopter ride." },
            { img: "images/Queenstown New Zealand/Lake Wakatipu.jpg", caption: "Relax by the serene lake, take a scenic cruise aboard the TSS Earnslaw steamship, or enjoy kayaking and paddleboarding on its crystal-clear waters." },
            { img: "images/Queenstown New Zealand/Matakauri Lodge.jpg", caption: "A secluded retreat with luxurious accommodations, gourmet dining, and panoramic views of Lake Wakatipu." },
            { img: "images/Queenstown New Zealand/Milford Sound.jfif", caption: "Take a day trip to Milford Sound, a UNESCO World Heritage site, and marvel at its towering cliffs, cascading waterfalls, and pristine waters." },
            { img: "images/Queenstown New Zealand/Novotel Queenstown Lakeside.jpg", caption: "A centrally located hotel with comfortable rooms and easy access to the lake." },
            { img: "images/Queenstown New Zealand/QT Queenstown.jpg", caption: "A chic and modern hotel featuring stylish rooms and a lively atmosphere." },
            { img: "images/Queenstown New Zealand/Shotover Jet.jpg", caption: "Experience the thrill of jet boating through the narrow canyons of the Shotover River." },
            { img: "images/Queenstown New Zealand/Skyline Queenstown.jpg", caption: "Take a gondola ride up Bob's Peak for panoramic views of Queenstown, Lake Wakatipu, and the Remarkables mountain range." },
            { img: "images/Queenstown New Zealand/The Remarkables.jpg", caption: "Ski or snowboard at this iconic mountain range during winter, or explore hiking trails and alpine scenery in the warmer months." }
        ]
    },
    {
        title: "Iceland",
        images: [
            { img: "images/Iceland/Black Sand Beaches.jpg", caption:"Visit Reynisfjara Beach, famous for its basalt columns and dramatic ocean views." },
            { img: "images/Iceland/Blue Lagoon.jpg", caption: "this geothermal spa is perfect for relaxing in mineral-rich, milky-blue waters surrounded by lava fields." },
            { img: "images/Iceland/CenterHotel Midgardur.jfif", caption: "A comfortable hotel in the heart of Reykjavik." },
            { img: "images/Iceland/Golden Circle Gullfoss Waterfall.jpg", caption: "A breathtaking two-tiered waterfall." },
            { img: "images/Iceland/Hotel Rangá.webp", caption: "A countryside retreat known for its northern lights views and gourmet dining." },
            { img: "images/Iceland/ION Adventure Hotel.webp", caption: "Located near Thingvellir National Park, offering stunning views and a sustainable design." },
            { img: "images/Iceland/Northern Lights (Aurora Borealis).jpg", caption: "From September to April, Iceland offers some of the best opportunities to see the magical northern lights." },
            { img: "images/Iceland/Reykjavik Hallgrímskirkja Church.jpg", caption: "A striking landmark with panoramic views from its tower." },
            { img: "images/Iceland/Reykjavik Laugavegur Street.jpg", caption: "Lined with shops, cafes, and restaurants." },
            { img: "images/Iceland/Snæfellsnes Peninsula.jpg", caption: "Often called Iceland in Miniature,this area features glaciers, lava fields, and picturesque fishing villages." },
            { img: "images/Iceland/The Retreat at Blue Lagoon.jpg", caption: "A world-class spa hotel with private access to the Blue Lagoon." },
            { img: "images/Iceland/Vatnajökull National Park.jfif", caption: "Explore glaciers, ice caves, and volcanic landscapes in this vast national park." }
        ]
    },
    {
        title: "Pokhara Resort",
        images: [
            { img: "images/Pokhara resort/Adventure Activities Paragliding.jpg", caption:"Fly over Phewa Lake with the Himalayas as your backdrop." },
            { img: "images/Pokhara resort/Cultural Experiences.jpg", caption: "Visit the World Peace Pagoda, an iconic stupa offering panoramic views." },
            { img: "images/Pokhara resort/Lakeside Serenity Begnas and Rupa Lakes.jpg", caption: "Quieter alternatives perfect for a peaceful retreat." },
            { img: "images/Pokhara resort/Lakeside Serenity Phewa Lake.jpg", caption: "The city’s centerpiece, ideal for boating and offering serene lakeside views." },
            { img: "images/Pokhara resort/Spectacular Scenery 1.jpg", caption: "Surrounded by the Annapurna and Dhaulagiri ranges." },
            { img: "images/Pokhara resort/Spectacular Scenery 2.jpg", caption: " Pokhara boasts some of the best Himalayan views in the world." },
            { img: "images/Pokhara resort/Spectacular Scenery 3.jpg", caption: "The iconic Machapuchare (Fishtail) Mountain is visible from most parts of the city." },
            { img: "images/Pokhara resort/The Pavilions Himalayas 1.jpg", caption: "A luxurious eco-resort surrounded by organic farmland." },
            { img: "images/Pokhara resort/The Pavilions Himalayas 2.jfif", caption: "Offers stunning views, spa facilities, and sustainable practices." },
            { img: "images/Pokhara resort/Tiger Mountain Pokhara Lodge 1.jpg", caption: "Perched on a hilltop, this lodge provides a tranquil environment with breathtaking mountain vistas." },
            { img: "images/Pokhara resort/Tiger Mountain Pokhara Lodge 2.jpg", caption: "Known for personalized service and nature trails." },
            { img: "images/Pokhara resort/Zip-lining.webp", caption: "Zip-lining, ultralight flights, and mountain biking are also popular activities." }
        ]
    },
    {
        title: "Anchorage,Alaska USA",
        images: [
            { img: "images/Alaska, USA/Adventure Opportunities.jpg", caption:"Anchorage serves as the starting point for outdoor activities like hiking, skiing, kayaking, and wildlife viewing." },
            { img: "images/Alaska, USA/Arctic Fox Inn.jpg", caption: "A charming bed-and-breakfast offering a cozy and personalized stay experience." },
            { img: "images/Alaska, USA/Breathtaking Natural Beauty 1.jpeg", caption: "Surrounded by the Chugach Mountains and the Cook Inlet." },
            { img: "images/Alaska, USA/Breathtaking Natural Beauty 2.jpg", caption: "Stunning views of glaciers, fjords, and wildlife make every corner of the city a visual treat." },
            { img: "images/Alaska, USA/Breathtaking Natural Beauty 3.jpg", caption: "Anchorage is a haven for nature lovers." },
            { img: "images/Alaska, USA/Flattop Mountain.jpeg", caption: "Anchorage’s most popular hiking destination, offering panoramic views of the city and beyond." },
            { img: "images/Alaska, USA/Hotel Captain Cook.jpg", caption: "A luxury hotel in downtown Anchorage offering upscale amenities, fine dining, and spectacular views." },
            { img: "images/Alaska, USA/Midnight Sun and Northern Lights.jpg", caption: "Experience the phenomenon of long daylight hours in summer or catch the magical aurora borealis in winter." },
            { img: "images/Alaska, USA/Rich Cultural Heritage 1.webp", caption: "Explore the city’s indigenous roots at the Alaska Native Heritage Center." },
            { img: "images/Alaska, USA/Rich Cultural Heritage 2.jfif", caption: "Museums like the Anchorage Museum showcase the art, history, and science of the region." },
            { img: "images/Alaska, USA/The Lakefront Anchorage.jpg", caption: "A lakeside hotel near the airport, ideal for both adventure travelers and those seeking relaxation." },
            { img: "images/Alaska, USA/Wildlife Viewing.jpg", caption: "Anchorage is home to moose, bears, bald eagles, and whales." }
        ]
    },
    {
        title: "South Africa",
        images: [
            { img: "images/South Africa/Adventure Opportunities 1.jpg", caption:"Thrill-seekers can go bungee jumping at Bloukrans Bridge, hiking in the Drakensberg." },
            { img: "images/South Africa/Adventure Opportunities 2.jfif", caption: "Explore the diverse marine ecosystems with snorkeling and scuba diving." },
            { img: "images/South Africa/Cape Town.jfif", caption: "Known for its breathtaking scenery, Cape Town is home to Table Mountain, Cape Point, and the historic Robben Island." },
            { img: "images/South Africa/Cultural Richness Apartheid Museum.jpg", caption: "Visit sites like Robben Island and the Apartheid Museum to understand the country’s history." },
            { img: "images/South Africa/Incredible Wildlife Experiences 1.jpg", caption: "offer world-class safaris to see the Big Five (lion, leopard, rhino, elephant, and buffalo)." },
            { img: "images/South Africa/Incredible Wildlife Experiences 2.jpg", caption: "Marine life enthusiasts can enjoy whale watching and cage diving with great white sharks." },
            { img: "images/South Africa/Johannesburg.jpg", caption: "City offers a mix of history and modernity, with attractions like the Apartheid Museum, Soweto, and Constitution Hill." },
            { img: "images/South Africa/Kruger National Park.jfif", caption: "One of Africa’s largest game reserves, Kruger offers unparalleled safari experiences and luxury lodges." },
            { img: "images/South Africa/La Residence.jpg", caption: "Nestled in Franschhoek, offering opulent interiors and vineyard views." },
            { img: "images/South Africa/Stunning Natural Beauty.jpg", caption: "Home to iconic landmarks like Table Mountain, Drakensberg Mountains, and Blyde River Canyon." },
            { img: "images/South Africa/The Oyster Box.jpg", caption: "A historic hotel in Durban offering beachfront luxury." },
            { img: "images/South Africa/World-Class Wine and Cuisine 1.jpg", caption: "Explore the Cape Winelands, renowned for producing some of the world’s finest wines." }
        ]
    },
    {
        title: "Banff National Park",
        images: [
            { img: "images/Banff National Park, Canada/Banff Gondola.jpg", caption:"Ascend Sulphur Mountain for panoramic views of the surrounding peaks and the Banff townsite." },
            { img: "images/Banff National Park, Canada/Bow Lake.jpg", caption: "A serene spot for picnics and photography, Bow Lake offers reflections of Crowfoot Mountain and Wapta Icefield." },
            { img: "images/Banff National Park, Canada/Cultural Attractions.webp", caption: "Visit the Banff Park Museum and the Whyte Museum of the Canadian Rockies." },
            { img: "images/Banff National Park, Canada/Fairmont Banff Springs 1.jfif", caption: "Known as the “Castle in the Rockies." },
            { img: "images/Banff National Park, Canada/Fairmont Banff Springs 2.jpg", caption: "This iconic hotel offers luxurious rooms, fine dining, and a spa." },
            { img: "images/Banff National Park, Canada/Icefields Parkway.png", caption: "One of the world’s most scenic drives, this route connects Banff and Jasper National Parks, offering views of glaciers, waterfalls, and wildlife." },
            { img: "images/Banff National Park, Canada/Johnston Canyon 1.jpg", caption: "A popular hiking destination featuring waterfalls, deep canyons, and catwalks." },
            { img: "images/Banff National Park, Canada/Johnston Canyon 2.jpg", caption: "It’s particularly stunning in winter when the waterfalls freeze." },
            { img: "images/Banff National Park, Canada/Lake Louise.webp", caption: "Renowned for its turquoise waters, Lake Louise is surrounded by towering peaks and the Victoria Glacier. It’s perfect for canoeing in summer and skating in winter." },
            { img: "images/Banff National Park, Canada/Moraine Lake.jpg", caption: "Located in the Valley of the Ten Peaks, Moraine Lake offers iconic views and is a must-visit spot for hiking and photography." },
            { img: "images/Banff National Park, Canada/Skiing and Snowboarding.jfif", caption: "Visit world-class resorts like Banff Sunshine, Lake Louise Ski Resort, and Mount Norquay." },
            { img: "images/Banff National Park, Canada/Wildlife Watching.jpg", caption: "Spot animals like elk, mountain goats, black bears, and moose." }
        ]
    },
    {
        title: "Norwegian Fjords",
        images: [
            { img: "images/Norwegian Fjords/Ålesund.jfif", caption:"Renowned for its Art Nouveau architecture, Ålesund is a great starting point for exploring nearby fjords and islands." },
            { img: "images/Norwegian Fjords/Aurland.webp", caption: "Known for its serene beauty and traditional crafts, Aurland is also home to the Stegastein Viewpoint, offering panoramic views of the fjords." },
            { img: "images/Norwegian Fjords/Cultural Visits.webp", caption: "Explore historic stave churches, local museums, and charming fjord-side villages." },
            { img: "images/Norwegian Fjords/Fjord Cruises.jpeg", caption: "Explore the fjords by boat for an up-close view of their beauty." },
            { img: "images/Norwegian Fjords/Flåm.jpg", caption: "Famous for the Flåm Railway, this small village is a gateway to Sognefjord and offers stunning views, local breweries, and hiking trails." },
            { img: "images/Norwegian Fjords/Geirangerfjord.jpg", caption: "Nestled at the end of Geirangerfjord, this picturesque village serves as a base for exploring waterfalls, hiking trails, and scenic viewpoints like Dalsnibba." },
            { img: "images/Norwegian Fjords/Hiking.jpg", caption: "Trails like Trolltunga, Romsdalseggen Ridge, and the trails around Geirangerfjord offer breathtaking vistas." },
            { img: "images/Norwegian Fjords/Hotel Union Geiranger 1.jpeg", caption: "Overlooking Geirangerfjord, this hotel offers spa facilities and gourmet dining." },
            { img: "images/Norwegian Fjords/Hotel Union Geiranger 2.jfif", caption: "A historic hotel blending comfort with spectacular views." },
            { img: "images/Norwegian Fjords/Hotel Union Geiranger 3.jpg", caption: "A charming hotel by the water with excellent dining options." },
            { img: "images/Norwegian Fjords/Lysefjord.jpg", caption: "Famous for Preikestolen (Pulpit Rock) and Kjeragbolten, Lysefjord attracts hikers seeking thrilling views and unique photo opportunities." },
            { img: "images/Norwegian Fjords/Sognefjord.jfif", caption: "Known as the “King of the Fjords,” Sognefjord is Norway’s longest and deepest fjord, stretching 205 kilometers inland. It’s home to quaint villages and attractions like the Flåm Railway." }
        ]
    },
  ];
  let currentDealIndex = 0;
  let currentSlideIndex = 0;

  // Open Slideshow for a specific deal
  function openSlideshow(dealIndex) {
    currentDealIndex = dealIndex;
    currentSlideIndex = 0;
    updateSlide();
    const popup = document.getElementById("slideshow-popup");
    popup.style.display = "flex";
  }
  
  // Close Slideshow
  function closeSlideshow() {
    const popup = document.getElementById("slideshow-popup");
    popup.style.display = "none";
  }
  
  // Change Slide
  function changeSlide(direction) {
    const deal = slides[currentDealIndex];
    currentSlideIndex = (currentSlideIndex + direction + deal.images.length) % deal.images.length;
    updateSlide();
  }
  
  // Update Slide Content
  function updateSlide() {
    const deal = slides[currentDealIndex];
    const image = document.getElementById("slideshow-image");
    const caption = document.getElementById("slideshow-caption");
  
    image.src = deal.images[currentSlideIndex].img;
    caption.textContent = deal.images[currentSlideIndex].caption;
  }

  
  
