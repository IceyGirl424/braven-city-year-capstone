import React, { useState } from 'react'
import { alumni, fields } from '../../data/alumni'
import AlumniCard from './AlumniCard'

const AlumniTracker = () => {
  const [selectedField, setSelectedField] = useState('All')

  const filteredAlumni = selectedField === 'All' 
    ? alumni 
    : alumni.filter(a => a.field === selectedField)

  return (
    <section id="alumni" className="alumni-section bg-white" style={{ padding: '100px 20px' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-dark">
            Where Our Alumni Are Now
          </h2>
          <p className="text-lg text-neutral-dark/80 max-w-2xl mx-auto">
            City Year isn't just for future teachers. See where our alumni have landed.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-8 flex justify-center">
          <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="px-6 py-3 rounded-lg border-2 border-neutral-dark/20 text-neutral-dark font-semibold focus:border-primary focus:outline-none bg-white min-h-[44px]"
          >
            {fields.map((field) => (
              <option key={field} value={field}>
                {field === 'All' ? 'All Fields' : field}
              </option>
            ))}
          </select>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlumni.map((alum, index) => (
            <AlumniCard key={index} alumni={alum} />
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12 text-neutral-dark/60">
            No alumni found in this category.
          </div>
        )}
      </div>
    </section>
  )
}

export default AlumniTracker

