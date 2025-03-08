export interface TopMenuItem {
    name: string;
    url: string;
    active: boolean;
    children: SubMenuItem[];
}
export interface SubMenuItem {
    name: string;
    url: string;
}
export interface User {
    firstName: string;
    lastName: string;
    profImgSrc: string;
}
export interface Breadcrumb {
    moduleName: string;
    level?: string;
}
