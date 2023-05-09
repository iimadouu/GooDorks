console.log("\x1b[34m%s\x1b[0m",
  `

#    ______             _____              _
#   / _____)           (____ \            | |
#  | /  ___  ___   ___  _   \ \ ___   ____| |  _
#  | | (___)/ _ \ / _ \| |   | / _ \ / ___) | / )
#  | \____/| |_| | |_| | |__/ / |_| | |   | |< (
#   \_____/ \___/ \___/|_____/ \___/|_|   |_| \_)
#

  `
);

console.log("\x1b[34m%s\x1b[0m",
  `
  Author:  iimadouu
  Github:  https://github.com/iimadouu\n
  `
);

console.log("\x1b[34m%s\x1b[0m", `\n\t\tBe Nice and use it at your own responsabi>

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dorks = () => {
  const google = require('google-it');

  rl.question("[+] Enter Your Dork Query (ex. index.php?id=1): ", (dork) => {
    rl.question("[+] How Many Websites To Display (ex. 5 ): ", (amount) => {
      console.log("\n ");

      const urls = new Set();
      let counter = 0;

      google({ 'query': dork, 'limit': parseInt(amount) })
        .then(results => {
          results.forEach(result => {
            const url = result.link.split(' ')[0];
            if (!urls.has(url)) {
              urls.add(url);
              counter++;
              console.log(`[+] ${counter} ${url}`);
            }
          });

          rl.close();
        })
        .catch(error => {
          console.log("[!] Error occurred: ", error);
          rl.close();
        });
    });
  });
};

console.log("\x1b[31m%s\x1b[0m", "\n\t\t\t\tGooDork");
console.log("\x1b[65m%s\x1b[0m", "\t\t[!] The GooDorking's here\n");
console.log("\x1b[31m%s\x1b[0m", "\t\t[!] Algeria 🇩🇿, #Free Palastine, #Free West>
dorks();
