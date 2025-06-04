import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { RegionList } from '../components/RegionList';
import { RegionDetails } from '../components/RegionDetails';
import regionsData from '../data/regions';

export const Route = createLazyFileRoute('/')({
    component: HomePage,
});

function HomePage() {
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleSelectRegion = (regionName) => {
        setSelectedRegion(regionName);
    };

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
                <RegionList
                    regions={regionsData}
                    onSelectRegion={handleSelectRegion}
                    selectedRegion={selectedRegion}
                />

                <RegionDetails
                    region={selectedRegion ? regionsData[selectedRegion] : null}
                    regionName={selectedRegion}
                />
            </div>
        </div>
    );
}