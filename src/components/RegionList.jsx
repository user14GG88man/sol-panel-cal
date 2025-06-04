export function RegionList({ regions, onSelectRegion, selectedRegion }) {
  return (
      <div className="w-full bg-white rounded-lg shadow-md p-4 h-[600px] flex flex-col">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Ukrainian Regions</h2>

        <div className="overflow-y-auto flex-1 pr-2">
          <ul className="space-y-2">
            {Object.keys(regions).map((regionName) => (
                <li key={regionName}>
                  <button
                      onClick={() => onSelectRegion(regionName)}
                      className={`w-full text-left px-4 py-2 rounded-md transition cursor-pointer ${
                          selectedRegion === regionName
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                  >
                    {regionName}
                  </button>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}