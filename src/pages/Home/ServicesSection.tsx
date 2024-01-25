import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipSetReplacement from "@/components/ServiceTiles/ChipSetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";

const ServicesSection = () => {
    return (
        <Container>
            <div className="text-center flex flex-col justify-center items-center ">
                <h1>Services that we provide </h1>
                <p className="max-w-[80ch] mt-3">
                    All our technicians are fully qualified and licennsed. Moreover, they are incredibly skillful and proficient in various aspects of computer repair.
                </p>
            </div>
            <div className="grid grid-cols-12 mt-5 gap-3">
               <BatteryReplacement/>
            <ChipSetReplacement/>
            <DataRecovery/>
                <div className="bg-red-500 h-[415px] rounded-xl  col-span-12"></div>
                <div className="bg-red-500 h-[415px] rounded-xl col-span-12 md:col-span-6 lg:col-span-4"></div>
                <div className="bg-red-500 h-[415px] rounded-xl col-span-12 md:col-span-6 lg:col-span-4"></div>
                <div className="bg-red-500 h-[415px] rounded-xl col-span-12  lg:col-span-4"></div>
            </div>

        </Container>
    );
};


export default ServicesSection;