import { useState, useEffect } from 'react';

export function SolarCalculator({ averagePower }) {
    const [area, setArea] = useState('');
    const [efficiency, setEfficiency] = useState(18);
    const [hours, setHours] = useState(12);
    const [output, setOutput] = useState(0);

    // Calculate output whenever inputs change
    useEffect(() => {
        if (area && averagePower) {
            // Energy (Wh) = Panel Area (m²) × Efficiency × Irradiance (Wh/m²)
            // Irradiance ≈ Average Power × Hours
            const areaValue = parseFloat(area);
            const efficiencyDecimal = efficiency / 100;
            const calculatedOutput = areaValue * efficiencyDecimal * averagePower * hours;
            setOutput(calculatedOutput);
        } else {
            setOutput(0);
        }
    }, [area, efficiency, hours, averagePower]);

    const formatOutput = (value) => {
        const roundedValue = Number(value.toFixed(2));

        const valueStr = roundedValue.toString();
        const digitsBeforeDecimal = valueStr.split('.')[0].length;

        if (digitsBeforeDecimal >= 10) {
            // GWh (1,000,000,000+ Wh)
            return `${(roundedValue / 1000000000).toFixed(2)} GWh`;
        } else if (digitsBeforeDecimal >= 7) {
            // MWh (1,000,000+ Wh)
            return `${(roundedValue / 1000000).toFixed(2)} MWh`;
        } else if (digitsBeforeDecimal >= 5) {
            // kWh (10,000+ Wh)
            return `${(roundedValue / 1000).toFixed(1)} kWh`;
        } else {
            return `${roundedValue.toLocaleString()} Wh`;
        }
    };

    return (
        <div className="h-full bg-white rounded-lg shadow-md p-6">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 pb-4">Solar Energy Calculator</h3>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="area">
                        Panel Area (m²)
                    </label>
                    <input
                        id="area"
                        type="number"
                        min="0"
                        step="0.1"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="Enter panel area"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="efficiency">
                        Efficiency (%)
                    </label>
                    <input
                        id="efficiency"
                        type="number"
                        min="1"
                        max="100"
                        value={efficiency}
                        onChange={(e) => setEfficiency(parseInt(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="hours">
                        Hours of Operation
                    </label>
                    <input
                        id="hours"
                        type="number"
                        min="1"
                        max="24"
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Solar Energy Output</h4>
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-green-600">
                            {formatOutput(output)}
                        </div>
                        <div className="text-gray-500 text-sm">
                            Based on {averagePower} W·h/h average power
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}