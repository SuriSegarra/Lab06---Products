const kayakTour = {
    id: 'kayak',
    name: 'Kayak Tour',
    img: 'kayak.png',
    description: ' A nighttime adventure into the waters of Laguna Grande as you visit the area’s amazing bioluminescent bay.',
    category: 'trip',
    price: 50.00
};

const rumTasting = {
    id: 'rum',
    name: 'Rum Tasting',
    image: 'rum.png',
    description: 'Explore the origins of rum and the famous Bacardi family at one of the world’s best-known distilleries.',
    category: 'trip',
    price: 40.00
};

const FoodTour = {
    id: 'food',
    name: 'Food Tour',
    image: 'food.png',
    description: 'Get a taste for the flavor and culture of Puerto Rico',
    category: 'food',
    price: 20.00
};

const barHopping = {
    id:'bar',
    name: 'Bar Hopping',
    image:'bar.png',
    description: 'Think of this tour as the sophisticated alternative to a pub-crawl.',
    category: 'trip',
    price: 15.00

};

const hiking = {
    id: 'hiking',
    name: 'hiking in El Yunque',
    image: 'hike.png',
    description: 'Admire gorgeous orchids, exotic birds and wildlife like the Coquí (tree frog) as you hike to secret waterfalls and hidden swimming spots',
    category: 'trip',
    price: 10.00
};

const zipLine = {
    id:'zip-line',
    name: 'zipline in the forest',
    image:'zipline.png',
    description:'Fly through the forest',
    category: 'trip',
    price: 20.00
};

const yoga = {
    id:'beach',
    name:'Yoga At The Beach',
    image:'beach.png',
    description:'Come and experience the restoration of body and mind at the beach!',
    category: 'chill',
    price: 15.00
};

const vacations = [
    kayakTour,
    FoodTour,
    barHopping,
    hiking,
    zipLine,
    yoga,
    rumTasting
];

export default vacations;