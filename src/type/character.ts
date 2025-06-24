interface Character {
    slug: string;
    name: string;
    description?: string;
    images: string[];
}

const list: Character[] = [
    {
        slug: "CocoaRize",
        name: "ココア&りじ",
        images: [
            "https://s1.250king.top/image/2025/06/fbd20yif.png",
            "https://s1.250king.top/image/2025/06/ygfjn0uo.png"
        ]
    },
    {
        slug: "ChinoFuyu",
        name: "チノ&フユ",
        images: [
            "https://s1.250king.top/image/2025/06/if9ljmg8.png",
            "https://s1.250king.top/image/2025/06/zoaj3rai.png"
        ]
    },
    {
        slug: "SyaroMaya",
        name: "シャロ&マヤ",
        images: [
            "https://s1.250king.top/image/2025/06/ghlmaw69.png",
            "https://s1.250king.top/image/2025/06/ohsgopdk.png"
        ]
    },
    {
        slug: "MeguChiya",
        name: "メグ&千夜",
        images: [
            "https://s1.250king.top/image/2025/06/redyocdf.png",
            "https://s1.250king.top/image/2025/06/ghlmaw69.png"
        ]
    }
]

export default list;
