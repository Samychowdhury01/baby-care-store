"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useAuth } from "@/lib/AuthProviders";
import { useState } from "react";
import { postReview } from "@/action/reviewAction";
import { toast } from "sonner";
const ReviewForm = ({ id }: { id: string }) => {
  const { user } = useAuth();
  const [review, setReview] = useState("");

  const handlePostReview = async () => {
    const result = await postReview({
      userName: user?.username,
      review,
      productId: id,
    });

    if (result?.success) {
      toast.success("something went wrong! try again", {
        className: "bg-green-500 text-white",
      });
    } else {
      toast.error("something went wrong! try again", {
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <div className="space-y-5 mt-5">
      <h2 className="text-xl md:text-2xl border-l-3 border-primary pl-1">
        Write a Reviews
      </h2>
      <Textarea
        label="Review"
        placeholder="Write your thought about the product"
        className="max-w-2xl"
        onChange={(e) => setReview(e.target.value)}
      />
      <Button
        onClick={handlePostReview}
        isDisabled={!user}
        variant="bordered"
        color="primary"
        className="hover:bg-primary text-black transition-all duration-500"
      >
        Post
      </Button>
      {!user && <p>You must be logged in to post a review !</p>}
    </div>
  );
};

export default ReviewForm;
