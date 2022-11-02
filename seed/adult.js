const db = require('../db')
const Adult = require('../models/adult')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    Adult.collection.drop()
    const adults = [
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/Batman-Banner.jpg',
            name: 'Batman The Ride',
            description:
                "BATMAN The Ride will show you what it feels like to be BATMAN, on this deeply intense juggernaut that is definitely not for the timid. Show your strength and bravery as you take on GOTHAM's criminal element. Once you've gotten your fill touring the shady, decaying backstreets of GOTHAM CITY, load up in the batcave for a dark and riveting adventure. You're about to fight crime with your feet just dangling free in the air through 2,700ft./822.96m of track.",
            height: '54"',
            speed: '50 mph',
            capacity: '40 people',
            parkLocation: 'DC Universe',
            rideFee: 'No Additional Fees',
            flashPass: 'No',
            year: '1994',
            history: 'Bolliger & Mabillard',
            rating: 'Maximum'
        },
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_dive_devil_1440x1533.jpg',
            name: 'Dive Devil',
            description:
                "Get ready to experience the thrill of skydiving, hang-gliding and bungee jumping all rolled into one!  First you'll have to get to the top of a 152-foot tower before taking a flying leap from the top with nothing but sky to catch your fall!",
            height: '48"',
            capacity: '2 at a time',
            parkLocation: 'Cyclone Bay',
            rideFee: 'Additional fee required',
            flashPass: 'No',
            year: '2000',
            history: 'Bolliger & Mabillard',
            rating: 'Moderate'
        },
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Goliath-Banner.jpg',
            name: 'Goliath',
            description:
                "'Sometimes the term roller coaster just doesn't cover it.  Goliath is so fast they call this metal monster a hypercoaster, and within seconds you'll know why. Hike in through the stony ruins of an ancient civilization - a time when great mythical beasts like the Goliath were feared. You may not find it so mythical as you're getting dragged up that impossibly tall first hill, lifting you higher and higher. About halfway up this ridiculous height, even the toughest riders realize there's no way out except to battle the beast. When you crest the top of that first hill, wave to the legendary Twisted Colossus – way down below you",
            height: '48"',
            speed: '85 mph',
            capacity: '36',
            parkLocation: 'Goliath Plaza',
            rideFee: 'No Additional Fees',
            flashPass: 'Yes',
            year: '2000',
            history: 'Giovanola',
            rating: 'Maximum'
        },
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Scream-Banner.jpg',
            name: 'Scream',
            description:
                "Ever wonder what it feels like to fly through the air, without a plane, a jetpack, or even a pair of wings to hold you up? Well, get ready to get airborne. Scream features a totally one-of-a-kind floorless train design.  Look straight down and all you'll see is the ground or the sky, depending on which direction you're facing. Since there's no track over your head or under your feet, riding Scream is exactly what it feels like to fly.",
            height: '54"',
            speed: '65 mph',
            capacity: '40',
            parkLocation: 'Screampunk District',
            rideFee: 'No Additional Fees',
            flashPass: 'Yes',
            year: '2003',
            history: 'Bolliger & Mabillard',
            rating: 'Moderate'
        },
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_viper2-1-2048x1363.jpg',
            name: 'Viper',
            description:
                "Since it was built Viper has been one of the tallest and fastest looping roller coasters in the world. Just looking at Viper's collection of loops from the ground will boggle the mind, but there's only one way to truly appreciate the extreme intensity of a vertical loop, and that's to ride it!",
            height: '54"',
            speed: '70 mph',
            capacity: '45',
            parkLocation: 'Baja Ridge',
            rideFee: 'No Additional Fee',
            flashPass: 'Yes',
            year: '1990',
            history: 'Arrow Dynamics Inc. ',
            rating: 'Maximum'
        },
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/2020/04/wcr-newsletter_1_0-1-2048x1365.jpg',
            name: 'West Coast Racers',
            description:
                "ALL NEW THRILLS! Get ready for West Coast Racers, the world's first single track quadruple launch racing coaster!  Unlike traditional coasters, this first of it's kind racing coaster features two side-by-side tracks with four individual high-speed launches.  The race covers two complete laps, multiple airtime hills, extreme high-banked turns and exhilarating over/under near misses.  A highlight of the ride is an immersive real time pit stop designed and produced by world famous West Coast Customs that will provide you with a racing experience unlike any other.",
            height: '54"',
            speed: '55 mph',
            capacity: '15',
            parkLocation: 'The Underground',
            rideFee: 'No Additional Fees',
            flashPass: 'Yes',
            year: '2018',
            history: 'Arrow Dynamics Inc. ',
            rating: 'Maximum'
        },
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/2020/04/wcr-newsletter_1_0-1-2048x1365.jpg',
            name: 'TEST RIDE',
            description:
                "ALL NEW THRILLS! Get ready for West Coast Racers, the world's first single track quadruple launch racing coaster!  Unlike traditional coasters, this first of it's kind racing coaster features two side-by-side tracks with four individual high-speed launches.  The race covers two complete laps, multiple airtime hills, extreme high-banked turns and exhilarating over/under near misses.  A highlight of the ride is an immersive real time pit stop designed and produced by world famous West Coast Customs that will provide you with a racing experience unlike any other.",
            height: '54"',
            speed: '55 mph',
            capacity: '15',
            parkLocation: 'The Underground',
            rideFee: 'No Additional Fees',
            flashPass: 'Yes',
            year: '2018',
            history: 'Arrow Dynamics Inc. ',
            rating: 'Maximum'
        },
        {
            image:
                'https://sf-static.sixflags.com/wp-content/uploads/Apocalypse-Banner-2-1.jpg',
            name: 'Apocalypse',
            description:
                "Head into the bunker and get ready to launch into the front line of battle on this blazingly fast drive into sci-fi combat. Future war has turned the world into a bleak, burned out wasteland and you are living the aftermath. Apocalypse is the all-wooden roller coaster that rips through this ominous desert on an ultra-fast track. You've gotta ride like the wind to escape.",
            height: '48"',
            capacity: '40',
            parkLocation: 'The Underground',
            rideFee: 'No Additional Fees',
            flashPass: 'Yes',
            year: '2009',
            history: 'Great Coasters International Inc. (GCII)',
            rating: 'Moderate'
        }
    ]

    await Adult.insertMany(adults)
    console.log('Created some adults!')
}
const run = async () => {
    await main()
    db.close()
}

run()
