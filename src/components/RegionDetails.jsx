import {useDispatch} from 'react-redux';
import {useNavigate} from '@tanstack/react-router';
import {setSelectedRegion} from '../store/regionSlice';
import {RegionData} from './RegionData';

export function RegionDetails({region, regionName}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!region) {
        return (
            <div className="w-full h-[600px] bg-gray-100 rounded-lg shadow-md p-6 flex items-center justify-center">
                <p className="text-gray-500 text-xl">Please select a region from the list</p>
            </div>
        );
    }

    const handleGoToCalc = () => {
        dispatch(setSelectedRegion({
            regionName,
            regionData: region
        }));

        navigate({to: '/calculator'});
    };

    return (
        <div className="w-full bg-white rounded-lg shadow-md p-6 h-[600px] overflow-y-auto">
            <RegionData region={region} regionName={regionName}/>

            <button
                onClick={handleGoToCalc}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-medium text-lg py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
                Go to Calculator
            </button>
        </div>
    );
}