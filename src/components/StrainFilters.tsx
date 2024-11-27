import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

interface StrainFiltersProps {
  activeType?: string;
  activeTerpene?: string;
  activeSort?: string;
  types: string[];
  terpenes: string[];
}

export default function StrainFilters({
  activeType,
  activeTerpene,
  activeSort,
  types,
  terpenes
}: StrainFiltersProps) {
  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'thc-high', label: 'THC (Highest)' },
    { value: 'thc-low', label: 'THC (Lowest)' },
  ];

  const updateFilters = (key: string, value: string) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    window.location.href = url.toString();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Type Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter by Type
            </div>
          </label>
          <select
            value={activeType || ''}
            onChange={(e) => updateFilters('type', e.target.value)}
            className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Terpene Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter by Terpene
            </div>
          </label>
          <select
            value={activeTerpene || ''}
            onChange={(e) => updateFilters('terpene', e.target.value)}
            className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">All Terpenes</option>
            {terpenes.map(terpene => (
              <option key={terpene} value={terpene}>{terpene}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4" />
              Sort by
            </div>
          </label>
          <select
            value={activeSort || 'name-asc'}
            onChange={(e) => updateFilters('sort', e.target.value)}
            className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}