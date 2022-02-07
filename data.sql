DROP TABLE IF EXISTS saints;

CREATE TABLE `saints` (
    `id` int  NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255)  NOT NULL ,
    `image` VARCHAR(255)  NOT NULL ,
    `level` VARCHAR(255)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

INSERT INTO saints
VALUES (
    1,
    'Aiolia',
    'https://images6.fanpop.com/image/photos/40100000/Leo-Aiolia-saint-seiya-knights-of-the-zodiac-40124062-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    2,
    'Mû',
    'https://images6.fanpop.com/image/photos/40100000/Aries-Mu-saint-seiya-knights-of-the-zodiac-40126264-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    3,
    'Aldebaran',
    'https://images6.fanpop.com/image/photos/40100000/Taurus-Aldebaran-saint-seiya-knights-of-the-zodiac-40126217-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    4,
    'Saga',
    'https://images6.fanpop.com/image/photos/40100000/Gemini-Saga-saint-seiya-knights-of-the-zodiac-40110956-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    5,
    'Deathmask',
    'https://images6.fanpop.com/image/photos/40100000/Cancer-Deathmask-saint-seiya-knights-of-the-zodiac-40125363-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    6,
    'Shaka',
    'https://images6.fanpop.com/image/photos/40100000/Virgo-Shaka-saint-seiya-knights-of-the-zodiac-40123968-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    7,
    'Dôko',
    'https://images6.fanpop.com/image/photos/40100000/Libra-Dohko-saint-seiya-knights-of-the-zodiac-40110494-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    8,
    'Milo',
    'https://images6.fanpop.com/image/photos/40100000/Scorpio-Milo-saint-seiya-knights-of-the-zodiac-40122404-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    9,
    'Aiolos',
    'https://images6.fanpop.com/image/photos/40100000/Sagittarius-Aiolos-saint-seiya-knights-of-the-zodiac-40122395-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    10,
    'Shura',
    'https://images6.fanpop.com/image/photos/40100000/Capricorn-Shura-saint-seiya-knights-of-the-zodiac-40122318-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    11,
    'Camus',
    'https://images6.fanpop.com/image/photos/40100000/Aquarius-Camus-saint-seiya-knights-of-the-zodiac-40110603-640-800.jpg',
    'Gold'
);
INSERT INTO saints
VALUES (
    12,
    'Aphrodite',
    'https://images6.fanpop.com/image/photos/40100000/Pisces-Aphrodite-saint-seiya-knights-of-the-zodiac-40122198-640-800.jpg',
    'Gold'
);


DROP TABLE IF EXISTS gods;

CREATE TABLE `gods` (
    `id` int  NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255)  NOT NULL ,
    `image` VARCHAR(255)  NOT NULL ,
    `level` VARCHAR(255)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

INSERT INTO gods
VALUES (
    1,
    'Athena',
    'https://images6.fanpop.com/image/photos/40100000/Athena-saint-seiya-knights-of-the-zodiac-40120860-640-800.jpg',
    'God'
);
INSERT INTO gods
VALUES (
    2,
    'Hades',
    'https://images6.fanpop.com/image/photos/40100000/Hades-saint-seiya-knights-of-the-zodiac-40120678-640-800.jpg',
    'God'
);
INSERT INTO gods
VALUES (
    3,
    'Poseidon',
    'https://images6.fanpop.com/image/photos/40100000/Poseidon-saint-seiya-knights-of-the-zodiac-40120760-640-800.jpg',
    'God'
);
INSERT INTO gods
VALUES (
    4,
    'Hypnos',
    'https://images6.fanpop.com/image/photos/40100000/Hypnos-saint-seiya-knights-of-the-zodiac-40122138-640-800.jpg',
    'God'
);
INSERT INTO gods
VALUES (
    5,
    'Thanatos',
    'https://images6.fanpop.com/image/photos/40100000/Thanatos-saint-seiya-knights-of-the-zodiac-40122132-640-800.jpg',
    'God'
);