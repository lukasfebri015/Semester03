const http = require('http');
const url = require('url');

const motorGP2 = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovisiozo',
      country: 'Italy',
    },
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy',
    },
  },
  {
    circuit: 'Mugelo',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovisiozo',
      country: 'Italy',
    },
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK',
    },
  },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');

  if (parsedUrl.pathname === '/') {
    res.writeHead(200);
    res.end(JSON.stringify(motorGP2));
  } else if (parsedUrl.pathname === '/country') {
    const country = parsedUrl.query.country;
    const filteredData = motorGP2.filter((race) => race.winner.country === country);
    res.writeHead(200);
    res.end(JSON.stringify(filteredData));
  } else if (parsedUrl.pathname === '/name') {
    const name = parsedUrl.query.name;
    const filteredData = motorGP2.filter(
      (race) =>
        race.winner.firstName.toLowerCase() === name.toLowerCase() ||
        race.winner.lastName.toLowerCase() === name.toLowerCase()
    );
    res.writeHead(200);
    res.end(JSON.stringify(filteredData));
  } else {
    res.writeHead(400);
    res.end('Bad Request');
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
;

let result = {};


for (let i = 0; i < motorGP2.length; i++) {
    let winner = motorGP2[i].winner;
    let country = winner.country;
    let name = winner.firstName + ' ' + winner.lastName;
    let winLocation = motorGP2[i].location + ', ' + motorGP2[i].circuit;

    // Periksa apakah negara sudah ada di objek hasil
    if (result[country]) {
        // Add the winning circuit and location to the existing country
        result[country].winningCircuit.push({ name: name, winLocation: winLocation });
        // Increment the total win for the existing country
        result[country].totalWin++;
    } else {
        // Buat negara baru dengan sirkuit dan lokasi pemenang
        result[country] = {
            winningCircuit: [{ name: name, winLocation: winLocation }],
            totalWin: 1
        };
    }
}

console.log(result);