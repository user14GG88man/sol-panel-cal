export function RegionData({region, regionName}) {
    if (!region || !regionName) {
        return null;
    }

    const getCurrentTimePeriod = () => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 9) return "06:00";
        if (hour >= 9 && hour < 12) return "09:00";
        if (hour >= 12 && hour < 15) return "12:00";
        if (hour >= 15 && hour < 18) return "15:00";
        if (hour >= 18 && hour < 21) return "18:00";
        return "average";
    };

    const currentTime = getCurrentTimePeriod();

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 pb-4">{regionName}</h2>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Power Throughout the Day</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(region)
                        .filter(([key]) => key !== "average")
                        .map(([time, power]) => (
                            <div
                                key={time}
                                className={`p-4 rounded-lg transition-all duration-200 ${
                                    time === currentTime
                                        ? "bg-blue-100 border-2 border-blue-400 shadow-md transform scale-105"
                                        : "bg-gray-50 hover:bg-gray-100"
                                }`}
                            >
                                <div className="text-sm font-medium text-gray-500">{time}</div>
                                <div className="font-bold text-lg text-gray-800 mt-1">{power} W·h/h</div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <span className="text-lg text-gray-700 mb-2 md:mb-0">Average Daily Output:</span>
                    <span className="font-bold text-xl text-green-600">{region.average} W·h/h per 1 kV</span>
                </div>
            </div>
        </div>
    );
}