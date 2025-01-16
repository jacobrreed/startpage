import { injectBookmarks } from "./bookmarks.js"

const bookmarks = [
  {
    label: "reddit",
    items: {
      "r/hyprland": "https://www.reddit.com/r/hyprland",
      "r/unixporn": "https://www.reddit.com/r/unixporn",
      "r/linux_gaming": "https://www.reddit.com/r/linux_gaming",
      "r/neovim ": "https://www.reddit.com/r/neovim ",
    },
  },
  {
    label: "github",
    items: {
      "dotfiles": "https://github.com/jacobrreed/dotfiles",
      "nvim": "https://github.com/jacobrreed/nvim",
      "eldritch": "https://github.com/eldritch-theme/eldritch",
    },
  },
  {
    label: "media",
    items: {
      "YouTube Music": "https://music.youtube.com",
      "YouTube": "https://youtube.com",
      "Twitch": "https://twitch.tv",
    },
  },
  {
    label: "homelab",
    items: {
      "homepage": "https://homepage.jacobrreed.io",
      "Proxmox": "https://proxmox.jacobrreed.io",
      "ESXI": "https://esxi.jacobrreed.io",
      "Synology": "https://synology.jacobrreed.io:5001",
    },
  },
]

injectBookmarks(bookmarks)
