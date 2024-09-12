import React from "react";
import { Button, Textarea } from "@nextui-org/react";
const ReviewForm = () => {
  const user = false;
  return (
    <div className="space-y-5 mt-5">
      <h2 className="text-2xl border-l-3 border-primary pl-1">
        Write a Reviews
      </h2>
      <Textarea
        label="Review"
        placeholder="Write your thought about the product"
        className="max-w-2xl"
      />
      <Button
        isDisabled={!user}
        variant="bordered"
        color="primary"
        className="hover:bg-primary hover:text-black transition-all duration-500"
      >
        Post
      </Button>
      {!user && <p>You must be logged in to post a review !</p>}
    </div>
  );
};

export default ReviewForm;
