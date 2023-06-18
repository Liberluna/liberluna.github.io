export interface Project {
  title: string
  desc: string
  link: string
}

export const projects: Project[] = [
  {
    title: "LiberChat",
    desc: "現在Liberlunaが開発中のオンラインチャットサービス、「LiberChat」。開発段階です。",
    link: "https://liberchat.deno.dev/",
  },
  {
    title: "LunaNovaCSS",
    desc: "JSでObjectをCSSに動的に変換する 新感覚のCSSフレームワーク",
    link: "https://github.com/Liberluna/LunaNovaCSS",
  },
  {
    title: "HackTo",
    desc: "Try hacking HackTo.",
    link: "./403",
  },
]
