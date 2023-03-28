import ServicesDisplay from "@/ui/ServicesDisplay";
import SearchBar from "@/ui/SeachBar";

export default function HeroSection() {
    return (
        <section className="w-full h-full flex flex-col justify-center items-center gap-6">
            <h1 className="text-lg tablet:text-2xl font-semibold">Find the best local service providers in your area.</h1>
            <SearchBar />
            
            <div className="flex items-center justify-center gap-12">
                <ServicesDisplay title={"Painters"} />
                <ServicesDisplay title={"Handyman"} />
                <ServicesDisplay title={"Plumber"} />
                <ServicesDisplay title={"Electrician"} />
            </div>

        </section>
    );
}