let motoGP = [
    {
        circuit : 'Losail',
        location : 'Qatar',
        winner: {
            firstName : 'Andrea',
            lastName : 'Dovisiozo',
            country : 'Italy',
        }
    },
    {
        circuit : 'De Jerez',
        location : 'Spain',
        winner: {
            firstName : 'Valentino',
            lastName : 'Rossi',
            country : 'Italy',
        }
    },
    {
        circuit : 'Mugelo',
        location : 'Italy',
        winner: {
            firstName : 'Andrea',
            lastName : 'Dovisiozo',
            country : 'Italy',
        }
    },
    {
        circuit : 'Autodromo',
        location : 'Argentine',
        winner: {
            firstName : 'Cal',
            lastName : 'Crutchlow',
            country : 'UK',
        }
    },
];

let result = {};


for (let i = 0; i < motoGP.length; i++) {
    let winner = motoGP[i].winner;
    let country = winner.country;
    let name = winner.firstName + ' ' + winner.lastName;
    let winLocation = motoGP[i].location + ', ' + motoGP[i].circuit;

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