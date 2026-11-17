export type UserRole =
    | "customer"
    | "admin"
    | "super_admin";

export type Audience =
    | "men"
    | "women"
    | "boys"
    | "girls"
    | "senior"
    | "pets";

export interface Product {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    price: number;
    audience: Audience[];
    categoryId: string;
    images: {
        thumbnail: string;
        front: string;
    };
    status: "draft" | "active" | "inactive";
}