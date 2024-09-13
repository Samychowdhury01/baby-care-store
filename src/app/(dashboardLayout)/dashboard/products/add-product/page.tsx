/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import CloudIcon from "@/components/ui/CloudIcon";
import { useAuth } from "@/lib/AuthProviders";
import { TCategory } from "@/types";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
const AddProductPage = () => {
  const { token } = useAuth();
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_LOCAL_SERVER}/categories`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      });
  }, []);

  //   handle
  const onSubmit = async (data: any) => {
    try {
      const { name, description, features, price, categoryId, image, rating } =
        data;
      const arrayFormattedFeatures = features
        .split(",")
        .map((feature: string) => feature.trim());
      // Handle image upload to ImgBB
      let imageUrl = "";
      if (data.image && data.image[0]) {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;
        console.log(img_hosting_token);
        const imgBBResponse = await fetch(
          `https://api.imgbb.com/1/upload?key=${img_hosting_token}`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!imgBBResponse.ok) {
          console.log(imgBBResponse);
          toast.error("image upload failed", {
            className: "bg-red-500 text-white",
          });
          return;
        }

        const imgBBData = await imgBBResponse.json();
        imageUrl = imgBBData.data.url; // Get the image URL from ImgBB
      }

      //  handle sending product data to server
      const productData = {
        name,
        description,
        features: arrayFormattedFeatures,
        price,
        categoryId,
        image: imageUrl,
        rating,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productData),
        }
      );
      const result = await response.json();
      if (result.success) {
        toast.success("Product created successfully", {
          className: "bg-green-500 text-white",
        });
        reset()
        console.log(result);
      } else {
        toast.error("Failed to create product", {
          className: "bg-red-500 text-white",
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", {
        className: "bg-red-500 text-white",
      });
      console.log(error);
    }
  };
  console.log(errors);
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold text-center mb-5 pb-2 border-b-2 bor">
        Add Product
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* image */}
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-200 duration-300 transition-all"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudIcon />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">Image is required</p>
            )}
          </label>
        </div>
        {/* rest inputs */}
        <div className="grid grid-cols-2 gap-3">
          {/* product name */}
          <div>
            <Input
              type="text"
              label="Product Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div>
            <Input
              type="number"
              label="Product Price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">price is required</p>
            )}
          </div>
          <div>
            <Input
              type="number"
              label="Rating"
              {...register("rating", { required: true })}
            />
            {errors.rating && (
              <p className="text-red-500 text-sm">rating is required</p>
            )}
          </div>
          <div>
            <Input
              type="text"
              label="Product Features"
              {...register("features", { required: true })}
            />
            {errors.features && (
              <p className="text-red-500 text-sm">features is required</p>
            )}
            <p className="text-foreground text-sm mt-2">
              write the features using "," separator
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className=" w-full">
              <Select
                label="Product Categories"
                placeholder="Select Category"
                {...register("categoryId", { required: true })}
              >
                {categories?.map((category: TCategory) => (
                  <SelectItem value={category._id} key={category?._id}>
                    {category?.name}
                  </SelectItem>
                ))}
              </Select>
              {errors.categoryId && (
                <p className="text-red-500 text-sm">category ID is required</p>
              )}
            </div>
          </div>
          <div>
            <Textarea
              label="Description"
              placeholder="Enter your description"
              className="w-full"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">Description is required</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <Button
            type="submit"
            variant="shadow"
            color="primary"
            className="text-black"
          >
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
