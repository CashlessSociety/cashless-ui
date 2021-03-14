const ssb = require('./ssb/server');
const pull = require('pull-stream');

const streamPull = (...streams) =>
  new Promise((resolve, reject) => {
    pull(
      ...streams,
      pull.collect((err, msgs) => {
        if (err) return reject(err);
        return resolve(msgs);
      })
    );
  });

async function dumpAllMsgs() {
    const myQuery = [
      {
        $filter: {},
      },
    ];
    try {
      let results = await streamPull(
        ssb.query.read({
          query: myQuery,
        })
      );
      return results.map((result) => console.log(result));
    } catch (e) {
      console.log('ERROR QUERYING FLUME DB:', e);
      return [];
    }
  }

dumpAllMsgs()




// var previouslySync = true;
// function indexingLog(server) {
//   server.status((err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     if (data.sync.sync) {
//       if (!previouslySync) {
//         console.log("Indexing : DONE");
//         previouslySync = true;
//       }
//       return;
//     }

//     previouslySync = false;

//     const indexes = data.sync.plugins;
//     const total = data.sync.since;

//     const output = Object.entries(indexes).map(([name, progress]) => {
//       const p = progress / total;
//       return `${leftpad(Math.floor(p * 100))}% ${progressBar(p)} : ${name}`;
//     });

//     console.log(output.join("\n") + "\n\n");
//   });
// }

// function leftpad(str, width = 4) {
//   while (str.length !== width) str = " " + str;
//   return str;
// }

// function progressBar(proportion, width = 40) {
//   const fill = Math.floor(proportion * width);
//   var out = "";
//   for (var i = 0; i < width; i++) {
//     out += i < fill ? "■" : "□";
//   }

//   return out;
// }