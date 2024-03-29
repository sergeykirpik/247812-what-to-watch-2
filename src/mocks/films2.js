const films = [
  {
    title: `Once Upon a Time in America`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
    backgroundColor: `#CBAC79`,
    description: `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`,
    rating: 4.2,
    scoresCount: 276395,
    director: `Sergio Leone`,
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    runTime: 229,
    genre: `Crime`,
    released: 1984,
    id: 1,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 16,
          "name": `Mollie`
        },
        "rating": 5,
        "comment": `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
        "date": `2019-10-18T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 18,
          "name": `Sophie`
        },
        "rating": 4,
        "comment": `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
        "date": `2019-10-08T19:28:35.599Z`
      }
    ]


  },
  {
    title: `Aviator`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Aviator.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/aviator.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Aviator.jpg`,
    backgroundColor: `#D6CDAF`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: 3.8,
    scoresCount: 307174,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Kate Beckinsale`
    ],
    runTime: 170,
    genre: `Drama`,
    released: 2014,
    id: 2,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 16,
          "name": `Mollie`
        },
        "rating": 3,
        "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        "date": `2019-10-14T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 17,
          "name": `Emely`
        },
        "rating": 3,
        "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        "date": `2019-10-15T19:28:35.599Z`
      }
    ]
  },
  {
    title: `Gangs of new york`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
    backgroundColor: `#A6B7AC`,
    description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
    rating: 3.8,
    scoresCount: 370881,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cameron Diaz`,
      `Daniel Day-Lewis`
    ],
    runTime: 167,
    genre: `Crime`,
    released: 2002,
    id: 3,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 11,
          "name": `Jack`
        },
        "rating": 4,
        "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
        "date": `2019-10-12T19:28:35.599Z`
      }
    ]
  },
  {
    title: `What We Do in the Shadows`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/What-We-Do-in-the-Shadows.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/what-we-do-in-the-shadows.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/What-We-Do-in-the-Shadows.jpg`,
    backgroundColor: `#A39E81`,
    description: `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in Staten Island.`,
    rating: 4.2,
    scoresCount: 6173,
    director: `Jemaine Clement`,
    starring: [
      `Kayvan Novak`,
      `Matt Berry`,
      `Natasia Demetriou`
    ],
    runTime: 30,
    genre: `Comedy`,
    released: 2019,
    id: 4,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 13,
          "name": `Zak`
        },
        "rating": 4,
        "comment": `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
        "date": `2019-11-03T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 13,
          "name": `Zak`
        },
        "rating": 3,
        "comment": `This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.`,
        "date": `2019-10-16T19:28:35.599Z`
      }
    ]
  },
  {
    title: `No Country for Old Men`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/No_Country_for_Old_Men.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/no-country-for-old-men.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/No_Country_for_Old_Men.jpg`,
    backgroundColor: `#BDAD8F`,
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    rating: 4.1,
    scoresCount: 764976,
    director: `Ethan Coen`,
    starring: [
      `Tommy Lee Jones`,
      `Javier Bardem`,
      `Josh Brolin`
    ],
    runTime: 122,
    genre: `Crime`,
    released: 2007,
    id: 5,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 11,
          "name": `Jack`
        },
        "rating": 4,
        "comment": `A movie that will take you to another world full of emotions.`,
        "date": `2019-10-22T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 18,
          "name": `Sophie`
        },
        "rating": 3,
        "comment": `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
        "date": `2019-10-26T19:28:35.599Z`
      },
      {
        "id": 3,
        "user": {
          "id": 14,
          "name": `Corey`
        },
        "rating": 1,
        "comment": `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
        "date": `2019-10-28T19:28:35.599Z`
      }
    ]
  },
  {
    title: `Once Upon a Time in America`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
    backgroundColor: `#CBAC79`,
    description: `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`,
    rating: 4.2,
    scoresCount: 276395,
    director: `Sergio Leone`,
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    runTime: 229,
    genre: `Crime`,
    released: 1984,
    id: 6,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 16,
          "name": `Mollie`
        },
        "rating": 5,
        "comment": `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
        "date": `2019-10-18T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 18,
          "name": `Sophie`
        },
        "rating": 4,
        "comment": `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
        "date": `2019-10-08T19:28:35.599Z`
      }
    ]


  },
  {
    title: `Aviator`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Aviator.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/aviator.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Aviator.jpg`,
    backgroundColor: `#D6CDAF`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: 3.8,
    scoresCount: 307174,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Kate Beckinsale`
    ],
    runTime: 170,
    genre: `Drama`,
    released: 2014,
    id: 7,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 16,
          "name": `Mollie`
        },
        "rating": 3,
        "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        "date": `2019-10-14T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 17,
          "name": `Emely`
        },
        "rating": 3,
        "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        "date": `2019-10-15T19:28:35.599Z`
      }
    ]
  },
  {
    title: `Gangs of new york`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
    backgroundColor: `#A6B7AC`,
    description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
    rating: 3.8,
    scoresCount: 370881,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cameron Diaz`,
      `Daniel Day-Lewis`
    ],
    runTime: 167,
    genre: `Crime`,
    released: 2002,
    id: 8,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 11,
          "name": `Jack`
        },
        "rating": 4,
        "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
        "date": `2019-10-12T19:28:35.599Z`
      }
    ]
  },
  {
    title: `What We Do in the Shadows`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/What-We-Do-in-the-Shadows.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/what-we-do-in-the-shadows.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/What-We-Do-in-the-Shadows.jpg`,
    backgroundColor: `#A39E81`,
    description: `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in Staten Island.`,
    rating: 4.2,
    scoresCount: 6173,
    director: `Jemaine Clement`,
    starring: [
      `Kayvan Novak`,
      `Matt Berry`,
      `Natasia Demetriou`
    ],
    runTime: 30,
    genre: `Comedy`,
    released: 2019,
    id: 9,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 13,
          "name": `Zak`
        },
        "rating": 4,
        "comment": `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
        "date": `2019-11-03T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 13,
          "name": `Zak`
        },
        "rating": 3,
        "comment": `This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.`,
        "date": `2019-10-16T19:28:35.599Z`
      }
    ]
  },
  {
    title: `No Country for Old Men`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/No_Country_for_Old_Men.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/no-country-for-old-men.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/No_Country_for_Old_Men.jpg`,
    backgroundColor: `#BDAD8F`,
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    rating: 4.1,
    scoresCount: 764976,
    director: `Ethan Coen`,
    starring: [
      `Tommy Lee Jones`,
      `Javier Bardem`,
      `Josh Brolin`
    ],
    runTime: 122,
    genre: `Crime`,
    released: 2007,
    id: 10,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 11,
          "name": `Jack`
        },
        "rating": 4,
        "comment": `A movie that will take you to another world full of emotions.`,
        "date": `2019-10-22T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 18,
          "name": `Sophie`
        },
        "rating": 3,
        "comment": `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
        "date": `2019-10-26T19:28:35.599Z`
      },
      {
        "id": 3,
        "user": {
          "id": 14,
          "name": `Corey`
        },
        "rating": 1,
        "comment": `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
        "date": `2019-10-28T19:28:35.599Z`
      }
    ]
  },
  {
    title: `Once Upon a Time in America`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
    backgroundColor: `#CBAC79`,
    description: `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`,
    rating: 4.2,
    scoresCount: 276395,
    director: `Sergio Leone`,
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    runTime: 229,
    genre: `Crime`,
    released: 1984,
    id: 11,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,

    reviews: [
      {
        "id": 11,
        "user": {
          "id": 16,
          "name": `Mollie`
        },
        "rating": 5,
        "comment": `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
        "date": `2019-10-18T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 18,
          "name": `Sophie`
        },
        "rating": 4,
        "comment": `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
        "date": `2019-10-08T19:28:35.599Z`
      }
    ]


  },
  {
    title: `Aviator`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Aviator.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/aviator.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Aviator.jpg`,
    backgroundColor: `#D6CDAF`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: 3.8,
    scoresCount: 307174,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Kate Beckinsale`
    ],
    runTime: 170,
    genre: `Drama`,
    released: 2014,
    id: 12,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 16,
          "name": `Mollie`
        },
        "rating": 3,
        "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        "date": `2019-10-14T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 17,
          "name": `Emely`
        },
        "rating": 3,
        "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        "date": `2019-10-15T19:28:35.599Z`
      }
    ]
  },
  {
    title: `Gangs of new york`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
    backgroundColor: `#A6B7AC`,
    description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
    rating: 3.8,
    scoresCount: 370881,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Cameron Diaz`,
      `Daniel Day-Lewis`
    ],
    runTime: 167,
    genre: `Crime`,
    released: 2002,
    id: 13,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 11,
          "name": `Jack`
        },
        "rating": 4,
        "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
        "date": `2019-10-12T19:28:35.599Z`
      }
    ]
  },
  {
    title: `What We Do in the Shadows`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/What-We-Do-in-the-Shadows.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/what-we-do-in-the-shadows.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/What-We-Do-in-the-Shadows.jpg`,
    backgroundColor: `#A39E81`,
    description: `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in Staten Island.`,
    rating: 4.2,
    scoresCount: 6173,
    director: `Jemaine Clement`,
    starring: [
      `Kayvan Novak`,
      `Matt Berry`,
      `Natasia Demetriou`
    ],
    runTime: 30,
    genre: `Comedy`,
    released: 2019,
    id: 14,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 13,
          "name": `Zak`
        },
        "rating": 4,
        "comment": `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
        "date": `2019-11-03T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 13,
          "name": `Zak`
        },
        "rating": 3,
        "comment": `This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.`,
        "date": `2019-10-16T19:28:35.599Z`
      }
    ]
  },
  {
    title: `No Country for Old Men`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/No_Country_for_Old_Men.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/no-country-for-old-men.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/No_Country_for_Old_Men.jpg`,
    backgroundColor: `#BDAD8F`,
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    rating: 4.1,
    scoresCount: 764976,
    director: `Ethan Coen`,
    starring: [
      `Tommy Lee Jones`,
      `Javier Bardem`,
      `Josh Brolin`
    ],
    runTime: 122,
    genre: `Crime`,
    released: 2007,
    id: 15,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,

    reviews: [
      {
        "id": 1,
        "user": {
          "id": 11,
          "name": `Jack`
        },
        "rating": 4,
        "comment": `A movie that will take you to another world full of emotions.`,
        "date": `2019-10-22T19:28:35.599Z`
      },
      {
        "id": 2,
        "user": {
          "id": 18,
          "name": `Sophie`
        },
        "rating": 3,
        "comment": `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
        "date": `2019-10-26T19:28:35.599Z`
      },
      {
        "id": 3,
        "user": {
          "id": 14,
          "name": `Corey`
        },
        "rating": 1,
        "comment": `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
        "date": `2019-10-28T19:28:35.599Z`
      }
    ]
  },
];

export default films;
