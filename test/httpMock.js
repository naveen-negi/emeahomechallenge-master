import nock from 'nock';

const books = [
  {
    Title: 'Fundamentals of Wavelets',
    Author: 'Goswami, Jaideva',
    Genre: 'tech',
    SubGenre: 'signal_processing',
    Height: '228',
    Publisher: 'Wiley',
  },
  {
    Title: 'Data Smart',
    Author: 'Foreman, John',
    Genre: 'tech',
    SubGenre: 'data_science',
    Height: '235',
    Publisher: 'Wiley',
  },
  {
    Title: 'God Created the Integers',
    Author: 'Hawking, Stephen',
    Genre: 'tech',
    SubGenre: 'mathematics',
    Height: '197',
    Publisher: 'Penguin',
  },
  {
    Title: 'Superfreakonomics',
    Author: 'Dubner, Stephen',
    Genre: 'science',
    SubGenre: 'economics',
    Height: '179',
    Publisher: 'HarperCollins',
  },
  {
    Title: 'Orientalism',
    Author: 'Said, Edward',
    Genre: 'nonfiction',
    SubGenre: 'history',
    Height: '197',
    Publisher: 'Penguin',
  },
  {
    Title: 'Nature of Statistical Learning Theory, The',
    Author: 'Vapnik, Vladimir',
    Genre: 'tech',
    SubGenre: 'data_science',
    Height: '230',
    Publisher: 'Springer',
  },
];

const TEST_URL = 'http://localhost:5500';

function setupMocks() {
  nock.cleanAll();

  nock(TEST_URL)
    .persist()

    .get(`/api/books`)
    .reply(200, books);
}

export default function httpMock() {
  return { setupMocks };
}
