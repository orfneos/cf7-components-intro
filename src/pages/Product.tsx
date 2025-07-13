import {useParams} from "react-router";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {productSchema} from "@/api/products.ts";

const Product = () => {
    const {productId} = useParams();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {errors, isSubmitting},
        reset,
    } = useForm({
        resolver:zodResolver(productSchema),
        defaultValues:{
            name: "",
            slug: "",
            image: "",
            price: 0,
            description: "",
            sort: 0,
            is_active: false,
            is_favorite: false,
            category_id: 1, //Default to 1
        }
    }
    );

    return(
        <>
        </>
    )
}

export default Product;