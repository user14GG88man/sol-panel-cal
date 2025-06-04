import { createLazyFileRoute } from '@tanstack/react-router';
import { useSelector } from 'react-redux';
import { RegionData } from '../components/RegionData';
import { SolarCalculator } from '../components/SolarCalculator';

export const Route = createLazyFileRoute('/calculator')({
    component: CalculatorPage,
});

function CalculatorPage() {
    const { selectedRegion, regionData } = useSelector((state) => state.region);

    if (!selectedRegion || !regionData) {
        return (
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 h-[600px] flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-500 text-lg mb-4">
                            No region data has been selected yet.
                        </p>
                        <p className="text-gray-500">
                            Please select a region on the home page and click "Go to Calculator".
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 h-[600px] overflow-y-auto">
                    <RegionData
                        region={regionData}
                        regionName={selectedRegion}
                    />
                </div>

                <div className="h-[600px] shadow-md overflow-y-auto">
                    <SolarCalculator
                        averagePower={regionData.average}
                    />
                </div>
            </div>
        </div>
    );
}