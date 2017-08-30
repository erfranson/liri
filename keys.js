var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');



 exports.client = new Twitter({
  consumer_key: 'Y7pDAMIxFuAN2AiBXYH6QFZIG',
  consumer_secret: 'eGuh0eww3c79vvRsZrXNTB02tTre4wGpHmOvVTrMP8OCOZ9TTW',
  access_token_key: '392564546-MDsvRsybiGC4P3BPAK9W0GvWlp2QGGRagshmv0oV',
  access_token_secret: 'BoHHGvLUI2k2yUzP4E1JIWCuHzcmYxwPrbzg2NuGf7GEZ',
})


exports.spotify = new Spotify({
  id: 'cd501735a3d14777acc2b77df5e4120c',
  secret: 'c4ecc8c4fe4845ab925d813202bf93ac'
});