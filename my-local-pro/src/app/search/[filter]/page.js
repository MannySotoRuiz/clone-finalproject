import PreviewCard from "@/components/PreviewCard";
import SearchIconList from "@/ui/SearchIconList";
 
export default function SearchPage({ params }) {

    return (
        <div className="min-h-min w-full my-20">
            <SearchIconList activeFilter={params.filter} />
            <div className="flex flex-wrap justify-center desktop:justify-start px-10 tablet:px-0 desktop:px-20 gap-6">
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
            </div>
        </div>
    );
}
