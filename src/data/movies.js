// src/data/movies.js

// Exporting an array of movie objects with character metadata
const movies = [
    {
      slug: 'aladdin',
      title: 'Aladdin',
      year: 1992,
      director: 'Ron Clements & John Musker',
      image: '/images/aladdin.jpg',
      description: "Exploring Aladdin's emotional tones.",
      url: 'https://www.disneyplus.com/movies/aladdin/2SngByljXESE?v=bf24',
      scriptExcerpt: "Aladdin's key dialogues...",
      keySceneVideoId: 'VIDEO_ID_5',
      characters: [
        {
          name: 'Aladdin',
          gender: 'Male',
          race: 'Middle Eastern',
          culture: 'Arabian',
        },
        {
          name: 'Princess Jasmine',
          gender: 'Female',
          race: 'Middle Eastern',
          culture: 'Arabian',
        },
        // Add more characters as needed
      ],
      character_metadata: {
        Aladdin: {
          Gender: 'Male',
          'Race/Ethnicity': 'Middle Eastern',
          Culture: 'Agrabah',
          Role: 'Protagonist',
          Marginalized: true, // Street rat from a lower socio-economic background
          POC: true,
        },
        Jasmine: {
          Gender: 'Female',
          'Race/Ethnicity': 'Middle Eastern',
          Culture: 'Agrabah',
          Role: 'Protagonist',
          Marginalized: true, // Royalty with limited personal freedom
          POC: true,
        },
        Genie: {
          Gender: 'Male',
          'Race/Ethnicity': 'Mythical Creature',
          Culture: 'Magical Realm',
          Role: 'Supporting',
          Marginalized: false, // As a mythical being, Genie isn't part of a marginalized group
          POC: false,
        },
        Jafar: {
          Gender: 'Male',
          'Race/Ethnicity': 'Middle Eastern',
          Culture: 'Agrabah',
          Role: 'Antagonist',
          Marginalized: false, // Holds significant power and influence
          POC: true,
        },
        Iago: {
          Gender: 'Male',
          'Race/Ethnicity': 'Parrot',
          Culture: 'Agrabah',
          Role: 'Supporting',
          Marginalized: false, // As an animal entity, Iago isn't part of a marginalized group
          POC: false,
        },
        Abu: {
          Gender: 'Male',
          'Race/Ethnicity': 'Monkey',
          Culture: 'Agrabah',
          Role: 'Supporting',
          Marginalized: false, // As an animal entity, Abu isn't part of a marginalized group
          POC: false,
        },
        Sultan: {
          Gender: 'No',
          'Race/Ethnicity': 'Middle Eastern',
          Culture: 'Agrabah',
          Role: 'Supporting',
          Marginalized: false, // Holds royal authority and influence
          POC: true,
        },
        // Add more characters as needed
      },
    },
    {
      slug: 'coco',
      title: 'Coco',
      year: 2017,
      director: 'Lee Unkrich & Adrian Molina',
      image: '/images/coco.jpg',
      description: "Analyzing Miguel's emotional expressions.",
      url: 'https://www.disneyplus.com/movies/coco/3hXfC4zFjX8R',
      scriptExcerpt: "Miguel's key dialogues...",
      keySceneVideoId: 'VIDEO_ID_6',
      characters: [
        {
          name: 'Miguel',
          gender: 'Male',
          race: 'Latino',
          culture: 'Mexican',
        },
        {
          name: 'Mama Coco',
          gender: 'Female',
          race: 'Latino',
          culture: 'Mexican',
        },
        // Add more characters as needed
      ],
      character_metadata: {
        Miguel: {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Protagonist',
          Marginalized: false, // Supported by his family despite challenges
          POC: true,
        },
        'Mama Coco': {
          Gender: 'Female',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Loved and respected within her family
          POC: true,
        },
        Abuelita: {
          Gender: 'Female',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Holds significant authority within the family
          POC: true,
        },
        'Ernesto De La Cruz': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Antagonist',
          Marginalized: false, // Famous and celebrated
          POC: true,
        },
        'Mama Imelda': {
          Gender: 'Female',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Holds leadership within the family in the afterlife
          POC: true,
        },
        Hector: {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: true, // Struggles to be remembered and gain respect
          POC: true,
        },
        'Chicarron': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: true, // Forgotten in the afterlife
          POC: true,
        },
        'Tia Rosita': {
          Gender: 'Female',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Respected within the family
          POC: true,
        },
        'Papa Julio': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Respected within the family
          POC: true,
        },
        'Tio Berto': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Respected within the family
          POC: true,
        },
        'Tio Oscar & Tio Felipe': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Respected within the family
          POC: true,
        },
        Mariachi: {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: true, // Lower social status as a street musician
          POC: true,
        },
        'Arrival Agent': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Holds a functional role in the afterlife
          POC: true,
        },
        'Corrections Officer': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Holds a position of authority
          POC: true,
        },
        'Juan Ortodoncia': {
          Gender: 'Male',
          'Race/Ethnicity': 'Latino',
          Culture: 'Mexican',
          Role: 'Supporting',
          Marginalized: false, // Respected within the community
          POC: true,
        },
        // Add more characters as needed
      },
    },
    {
      slug: 'mulan',
      title: 'Mulan',
      year: 1998,
      director: 'Tony Bancroft & Barry Cook',
      image: '/images/mulan.jpg',
      description: "Analyzing Mulan's emotional expressions.",
      url: 'https://www.disneyplus.com/movies/mulan/4HcSByljXESE?v=bf25',
      scriptExcerpt: "Mulan's key dialogues...",
      keySceneVideoId: 'VIDEO_ID_7',
      characters: [
        {
          name: 'Mulan',
          gender: 'Female',
          race: 'Chinese',
          culture: 'Chinese',
        },
        {
          name: 'Shang',
          gender: 'Male',
          race: 'Chinese',
          culture: 'Chinese',
        },
        // Add more characters as needed
      ],
      character_metadata: {
        Mulan: {
          Gender: 'Female',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Protagonist',
          Marginalized: true, // POC, female protagonist
          POC: true,
        },
        Shang: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC male character
          POC: true,
        },
        Mushu: {
          Gender: 'Male',
          'Race/Ethnicity': 'Mythical Creature',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: false, // Mythical creature, supporting
          POC: false,
        },
        ShanYu: {
          Gender: 'Male',
          'Race/Ethnicity': 'Hun',
          Culture: 'Hun',
          Role: 'Antagonist',
          Marginalized: false, // Antagonist, from a different culture
          POC: false,
        },
        ChiFu: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC, Chinese
          POC: true,
        },
        Yao: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        Ling: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        ChienPo: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        FaZhou: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        FaLi: {
          Gender: 'Female',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        'Grandmother Fa': {
          Gender: 'Female',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        Matchmaker: {
          Gender: 'Female',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        Emperor: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        GeneralLi: {
          Gender: 'Male',
          'Race/Ethnicity': 'Chinese',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: true, // POC
          POC: true,
        },
        'First Ancestor': {
          Gender: 'Male',
          'Race/Ethnicity': 'Spiritual Entity',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: false, // Mythical character
          POC: false,
        },
        CriKee: {
          Gender: 'Male',
          'Race/Ethnicity': 'Cricket',
          Culture: 'Chinese',
          Role: 'Supporting',
          Marginalized: false, // Animal entity
          POC: false,
        },
        // Add more characters as needed
      },
    },
    {
        slug: "the-princess-and-the-frog",
        title: "The Princess and the Frog",
        year: 2009,
        director: "Ron Clements & John Musker",
        url: "https://www.disneyplus.com/movies/the-princess-and-the-frog/7TPAcC8QPGpm",
        image: "/images/the-princess-and-the-frog.jpg",
        description: "Analyzing Tiana's emotional dialogues.",
        scriptExcerpt: "Tiana's key dialogues...",
        keySceneVideoId: "VIDEO_ID_3",
        characters: [
          {
            name: "Tiana",
            gender: "Female",
            race: "African American",
            culture: "New Orleans",
          },
          {
            name: "Prince Naveen",
            gender: "Male",
            race: "Mixed",
            culture: "Maldonia",
          },
          {
            name: "Charlotte La Bouff",
            gender: "Female",
            race: "Caucasian",
            culture: "New Orleans",
          },
          {
            name: "Dr. Facilier",
            gender: "Male",
            race: "African American",
            culture: "New Orleans",
          },
          {
            name: "Eudora",
            gender: "Female",
            race: "African American",
            culture: "New Orleans",
          },
          {
            name: "Big Daddy La Bouff",
            gender: "Male",
            race: "Caucasian",
            culture: "New Orleans",
          },
          {
            name: "Louis",
            gender: "Male",
            race: "Animal",
            culture: "New Orleans",
          },
          {
            name: "Ray",
            gender: "Male",
            race: "Animal",
            culture: "New Orleans",
          },
          {
            name: "Mama Odie",
            gender: "Female",
            race: "African American",
            culture: "New Orleans",
          },
          {
            name: "Lawrence",
            gender: "Male",
            race: "Caucasian",
            culture: "New Orleans",
          },
        ],
        character_metadata: {
          Tiana: {
            Gender: "Female",
            "Race/Ethnicity": "African American",
            Culture: "New Orleans",
            Role: "Protagonist",
            Marginalized: true,
            POC: true,
          },
          "Prince Naveen": {
            Gender: "Male",
            "Race/Ethnicity": "Mixed",
            Culture: "Maldonia",
            Role: "Protagonist",
            Marginalized: false,
            POC: true,
          },
          "Charlotte La Bouff": {
            Gender: "Female",
            "Race/Ethnicity": "Caucasian",
            Culture: "New Orleans",
            Role: "Supporting",
            Marginalized: false,
            POC: false,
          },
          "Dr. Facilier": {
            Gender: "Male",
            "Race/Ethnicity": "African American",
            Culture: "New Orleans",
            Role: "Antagonist",
            Marginalized: false,
            POC: true,
          },
          Eudora: {
            Gender: "Female",
            "Race/Ethnicity": "African American",
            Culture: "New Orleans",
            Role: "Supporting",
            Marginalized: false,
            POC: true,
          },
          "Big Daddy La Bouff": {
            Gender: "Male",
            "Race/Ethnicity": "Caucasian",
            Culture: "New Orleans",
            Role: "Supporting",
            Marginalized: false,
            POC: false,
          },
          Louis: {
            Gender: "Male",
            "Race/Ethnicity": "Animal",
            Culture: "New Orleans",
            Role: "Supporting",
            Marginalized: false,
            POC: false,
          },
          Ray: {
            Gender: "Male",
            "Race/Ethnicity": "Animal",
            Culture: "New Orleans",
            Role: "Supporting",
            Marginalized: false,
            POC: false,
          },
          "Mama Odie": {
            Gender: "Female",
            "Race/Ethnicity": "African American",
            Culture: "New Orleans",
            Role: "Supporting",
            Marginalized: false,
            POC: true,
          },
          Lawrence: {
            Gender: "Male",
            "Race/Ethnicity": "Caucasian",
            Culture: "New Orleans",
            Role: "Antagonist",
            Marginalized: false,
            POC: false,
          },
        },
      },
      
    {
      slug: 'pocahontas',
      title: 'Pocahontas',
      year: 1995,
      director: 'Mike Gabriel & Eric Goldberg',
      image: '/images/pocahontas.jpg',
      description: "Analyzing Pocahontas's emotional expressions.",
      url: 'https://www.disneyplus.com/movies/pocahontas/5HfCByljXESE?v=bf26',
      scriptExcerpt: "Pocahontas's key dialogues...",
      keySceneVideoId: 'VIDEO_ID_8',
      characters: [
        {
          name: 'Pocahontas',
          gender: 'Female',
          race: 'Native American',
          culture: 'Powhatan',
        },
        {
          name: 'John Smith',
          gender: 'Male',
          race: 'Caucasian',
          culture: 'English',
        },
        // Add more characters as needed
      ],
      character_metadata: {
        Pocahontas: {
          Gender: 'Female',
          'Race/Ethnicity': 'Native American',
          Culture: 'Powhatan',
          Role: 'Protagonist',
          Marginalized: true, // Indigenous woman facing colonial pressures
          POC: true,
        },
        'John Smith': {
          Gender: 'Male',
          'Race/Ethnicity': 'Caucasian',
          Culture: 'English',
          Role: 'Protagonist',
          Marginalized: false, // English settler with privilege and power
          POC: false,
        },
        Powhatan: {
          Gender: 'Male',
          'Race/Ethnicity': 'Native American',
          Culture: 'Powhatan',
          Role: 'Supporting',
          Marginalized: true, // Indigenous leader with limited power against colonizers
          POC: true,
        },
        Kocoum: {
          Gender: 'Male',
          'Race/Ethnicity': 'Native American',
          Culture: 'Powhatan',
          Role: 'Supporting',
          Marginalized: true, // Warrior from a marginalized indigenous community
          POC: true,
        },
        'Grandmother Willow': {
          Gender: 'Female',
          'Race/Ethnicity': 'Mythical Entity',
          Culture: 'Nature/Spiritual',
          Role: 'Supporting',
          Marginalized: false, // Spiritual guide not subject to human power dynamics
          POC: false,
        },
        Ratcliffe: {
          Gender: 'Male',
          'Race/Ethnicity': 'Caucasian',
          Culture: 'English',
          Role: 'Antagonist',
          Marginalized: false, // English governor with colonial power
          POC: false,
        },
        Nakoma: {
          Gender: 'Female',
          'Race/Ethnicity': 'Native American',
          Culture: 'Powhatan',
          Role: 'Supporting',
          Marginalized: true, // Indigenous friend of Pocahontas, part of marginalized community
          POC: true,
        },
        Kekata: {
          Gender: 'Male',
          'Race/Ethnicity': 'Native American',
          Culture: 'Powhatan',
          Role: 'Supporting',
          Marginalized: true, // Tribal shaman within a colonized society
          POC: true,
        },
        Wiggins: {
          Gender: 'Male',
          'Race/Ethnicity': 'Caucasian',
          Culture: 'English',
          Role: 'Supporting',
          Marginalized: false, // Assistant to Ratcliffe, shares in colonial power structure
          POC: false,
        },
        Namontack: {
          Gender: 'Male',
          'Race/Ethnicity': 'Native American',
          Culture: 'Powhatan',
          Role: 'Supporting',
          Marginalized: true, // Indigenous warrior with limited power
          POC: true,
        },
        Percy: {
          Gender: 'Male',
          'Race/Ethnicity': 'Animal',
          Culture: 'English',
          Role: 'Supporting',
          Marginalized: false, // Pet of Ratcliffe, represents colonial culture
          POC: false,
        },
        Animals: {
          Gender: 'Unknown',
          'Race/Ethnicity': 'Animal',
          Culture: 'Nature',
          Role: 'Supporting',
          Marginalized: false, // Not part of human social structure
          POC: false,
        },
        'Wind Spirits': {
          Gender: 'Unknown',
          'Race/Ethnicity': 'Spiritual Entity',
          Culture: 'Nature/Spiritual',
          Role: 'Supporting',
          Marginalized: false, // Represents natural forces beyond human control
          POC: false,
        },
        
      },
    },
    
  ];
  
  export default movies;
  