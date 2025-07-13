import {z} from "zod";

const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID;

export const productSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1, "Required."),
    slug: z.string().min(1, "Required.")
        .regex(
            /[a-zA-Z0-9-_]+$/,
            "Must be use only Latin letters, numbers, - or _"),
    description: z.string().optional(),
    image: z.string().url("Must be a valid url.").optional(),
    price: z.coerce.number().nonnegative("Must be a positive number."),
    is_active: z.boolean(),
    is_favorite: z.boolean(),
    sort: z.coerce.number().int().min(0, "Must be a positive number."),
    category_id: z.coerce.number().optional(),
})

export type Product = z.infer<typeof productSchema>;

// export type Product = {
//     id: number;
//     name: string;
//     slug: string;
//     description?: string;
//     image?: string;
//     price: number;
//     is_active: boolean;
//     is_favorite: boolean;
//     sort: number;
//     category_id?: number;
// }

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/`);
    if (!res.ok) throw new Error("Failed to fetch products.");
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getProduct(id: number): Promise<Product> {
    const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product.");
    return await res.json();
}

export async function updateProduct(
    id: number,
    data:{
        name: string;
        description?: string | undefined;
        price: number;
        is_active: boolean;
        is_favorite: boolean;
        sort: number;
        slug: string;
        image?: string | undefined;
        }
): Promise<Product> {
    const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Failed to update product.");
    return await res.json();
}

export async function deleteProduct(id: number) : Promise<void> {
    const res = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error("Failed to delete product.");
}