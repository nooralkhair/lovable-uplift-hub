export default function Tabs({ categories, active, onChange }) {
  return (
    <div className="flex space-x-4 mb-6 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    active === cat
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
