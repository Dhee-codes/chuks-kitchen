export interface Navlink {
    label: string
    href: string
    isInHeader?: boolean
}

export const navlinks: Navlink[] = [
    {
        label: "Home",
        href: "/",
        isInHeader: true,
    },
    {
        label: "Explore",
        href: "/menu",
        isInHeader: true,
    },
    {
        label: "My Order",
        href: "/cart",
        isInHeader: true,
    },
    {
        label: "Account",
        href: "/account",
        isInHeader: true,
    },
    {
        label: "Contact",
        href: "/contact",
        isInHeader: false,
    },
]