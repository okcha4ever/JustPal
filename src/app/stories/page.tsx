import AddStory from "@/components/home/stories/AddStory";
import AllStories from "@/components/home/stories/AllStories";
import SearchByUser from "@/components/home/stories/SearchByUser";

const page = () => {
  return (
    <main>
      <div className="flex w-full flex-row items-center pb-10 pt-5">
        <div className="flex w-full items-center justify-center">
          <SearchByUser />
        </div>
        <div className="absolute right-0 flex justify-end px-20">
          <div>
            <AddStory />
          </div>
        </div>
      </div>
      <AllStories />
    </main>
  );
};

export default page;
