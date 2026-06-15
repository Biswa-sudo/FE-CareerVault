export default function TemplateCard({ template, onSelect }) {
  return (
    <div className="relative group rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onSelect(template.id)}>
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
        <div className="w-full h-full bg-white rounded shadow-inner flex flex-col p-3" style={{ fontFamily: 'Inter' }}>
          <div className="h-3 w-1/2 rounded" style={{ backgroundColor: template.headerBg || '#6366f1' }}></div>
          <div className="mt-2 h-2 w-3/4 bg-gray-300 rounded"></div>
          <div className="mt-2 h-2 w-1/2 bg-gray-200 rounded"></div>
          <div className="mt-4 h-2 w-full bg-gray-100 rounded"></div>
          <div className="mt-2 h-2 w-2/3 bg-gray-100 rounded"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-white font-semibold text-lg">Use Template</span>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-800">{template.name}</h3>
        <p className="text-sm text-gray-500">{template.description}</p>
      </div>
    </div>
  )
}
