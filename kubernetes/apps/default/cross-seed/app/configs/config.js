// Torrent content layout: Original
// Default Torrent Management Mode: Automatic
// Default Save Path: /media/downloads/torrents
// External program on finished: /scripts/xseed.sh "%F"

module.exports = {
  delay: 20,
  qbittorrentUrl: "http://qbittorrent.default.svc.cluster.local:8080",

  torznab: [
    `http://jackett:9117/api/v2.0/indexers/divxtotal/results/torznab?apikey=${process.env.JACKETT_API_KEY}`, // at
    // `http://prowlarr.default.svc.cluster.local:8080/4/api?apikey=${process.env.PROWLARR_API_KEY}`, // at
    // `http://prowlarr.default.svc.cluster.local:8080/16/api?apikey=${process.env.PROWLARR_API_KEY}`, // ant
    // `http://prowlarr.default.svc.cluster.local:8080/2/api?apikey=${process.env.PROWLARR_API_KEY}`, // blu
    // `http://prowlarr.default.svc.cluster.local:8080/1/api?apikey=${process.env.PROWLARR_API_KEY}`, // btn
    // `http://prowlarr.default.svc.cluster.local:8080/12/api?apikey=${process.env.PROWLARR_API_KEY}`, // cz
    // `http://prowlarr.default.svc.cluster.local:8080/3/api?apikey=${process.env.PROWLARR_API_KEY}`, // hdt
    // `http://prowlarr.default.svc.cluster.local:8080/15/api?apikey=${process.env.PROWLARR_API_KEY}`, // ipt
    // `http://prowlarr.default.svc.cluster.local:8080/5/api?apikey=${process.env.PROWLARR_API_KEY}`, // ms
    // `http://prowlarr.default.svc.cluster.local:8080/14/api?apikey=${process.env.PROWLARR_API_KEY}`, // tl
    // `http://prowlarr.default.svc.cluster.local:8080/13/api?apikey=${process.env.PROWLARR_API_KEY}`, // ts
    // `http://prowlarr.default.svc.cluster.local:8080/49/api?apikey=${process.env.PROWLARR_API_KEY}`, // bt
  ],

  action: "inject",
  includeEpisodes: true,
  includeSingleEpisodes: true,
  includeNonVideos: true,
  duplicateCategories: true,
  matchMode: "safe",
  skipRecheck: true,
  linkType: "hardlink",

  linkDir: "/media/downloads/qbittorrent/complete/xseeds",

  // I have sonarr, radarr, and prowlarr categories set in qBittorrent
  // The save paths for them are set to the following:
  dataDirs: [
    "/media/movies/",
    "/media/series/"
  ],

  maxDataDepth: 1,
  outputDir: "/config/xseeds",
  torrentDir: "/config/qBittorrent/BT_backup",
};
