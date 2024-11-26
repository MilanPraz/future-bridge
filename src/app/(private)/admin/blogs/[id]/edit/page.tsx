"use client";
import CompulsoryLabel from "@/components/common/CompulsoryLabel";
import RichTextEditor from "@/components/common/RichTextEditor";
import Title from "@/components/dashboard/Title";
import { H3 } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full rounded-sm"></Skeleton>,
});
const Creatable = dynamic(() => import("react-select/creatable"), {
  ssr: false,
  loading: () => <Skeleton className=" h-10 w-full rounded-sm"></Skeleton>,
});

const Categoryoptions = [
  {
    value: "programming",
    label: "Programming",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "travel",
    label: "Travel",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "lifestyle",
    label: "Lifestyle",
  },
  {
    value: "webDevelopment",
    label: "Web Development",
  },
  {
    value: "mobileDevelopment",
    label: "Mobile Development",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "food",
    label: "Food",
  },
];

const TagsOption = [
  {
    value: "javascript",
    label: "JavaScript",
  },
  {
    value: "fitness",
    label: "Fitness",
  },
  {
    value: "vacation",
    label: "Vacation",
  },
  {
    value: "investment",
    label: "Investment",
  },
  {
    value: "mindfulness",
    label: "Mindfulness",
  },
  {
    value: "css",
    label: "CSS",
  },
  {
    value: "ios",
    label: "iOS",
  },
  {
    value: "ai",
    label: "Artificial Intelligence",
  },
  {
    value: "onlineLearning",
    label: "Online Learning",
  },
  {
    value: "recipes",
    label: "Recipes",
  },
];

export default function page() {
  const router = useRouter();
  const [preview, setPreview] = useState<any>(null);
  const [ImageFile, setImageFile] = useState<File | null>(null);
  const { register, handleSubmit, setValue, watch, trigger } = useForm();

  //   IMAGE UPLOADER ONDROP
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader();
    file.onload = function () {
      setPreview(file.result);
    };
    file.readAsDataURL(acceptedFiles[0]);
    setImageFile(acceptedFiles[0]);
    setValue("image", acceptedFiles[0]);
    trigger("image");
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = (formData: any) => {
    const fd = new FormData();

    fd.append("image", ImageFile!);
    fd.append("title", formData.title);
    fd.append("content", formData.content);
    formData.tags.forEach((tag: any) => fd.append("tags", tag));
    fd.append("category", formData.category);
    fd.append("author", formData.author);

    // const promise = mutateAsync(fd).then((data) => {
    //   router.push("/admin/blogs");
    // });

    // toast.promise(promise, {
    //   loading: "Adding Blog",
    //   success: "Successfully posted blog",
    //   error: (err) => err.message || "Something went wrong !",
    // });
  };

  return (
    <div className=" 2xl:container px-4">
      <div className="py-4">
        <Title
          title="Add Blog"
          email="alisha@gmail.com"
          name="Alisha Khatri"
          img="/home/person1.jpg"
        />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className=" rounded-md border-2 border-dashed border-primary bg-gray-100 p-4 text-muted-foreground">
            <div {...getRootProps()}>
              <input {...register("image")} {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the image here ...</p>
              ) : (
                <p>Drag 'n' drop a image here, or click to select files</p>
              )}
              {preview && <img className=" rounded-lg" src={preview} />}
            </div>
          </div>
          {/* <FormErroror>{errors.image?.message}</FormErroror> */}

          <div>
            <CompulsoryLabel>Title</CompulsoryLabel>
            <Input {...register("title")} placeholder="Blog title here..." />
            {/* <FormError>{errors.title?.message}</FormError> */}
          </div>

          <div className="min-h-[9rem]">
            <CompulsoryLabel>Content</CompulsoryLabel>
            <RichTextEditor
              //   className=" bg-transparent"
              value={watch("content")}
              setValue={setValue}
              trigger={trigger}
              name="content"
            />
            {/* <FormError>{errors.content?.message}</FormError> */}
          </div>
          <section className=" grid grid-cols-2 gap-4">
            <div className=" ">
              <CompulsoryLabel>Category</CompulsoryLabel>
              <Select
                isMulti={false}
                onChange={(data: any) => {
                  setValue("category", data.value), trigger("category");
                }}
                options={Categoryoptions}
              />
              {/* <FormError>{errors.category?.message}</FormError> */}
            </div>

            <div>
              <CompulsoryLabel>Author</CompulsoryLabel>
              <Input {...register("author")} placeholder="Author name" />
              {/* <FormError>{errors.author?.message}</FormError> */}
            </div>
          </section>
          <div className=" ">
            <CompulsoryLabel>Tags</CompulsoryLabel>

            <Creatable
              isMulti
              onChange={(e: any) => {
                setValue(
                  "tags",
                  e.map((d: any) => d.value)
                );
                trigger("tags");
              }}
              options={TagsOption}
            />
            {/* <FormError>{errors.tags?.message}</FormError> */}
          </div>
          <Button type="submit" disabled={false}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
