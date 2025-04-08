import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.6.0/+esm"

animate(
    ".box",
    { rotate: 360 },
    { repeat: Infinity, repeatDelay: 0.2 }
)