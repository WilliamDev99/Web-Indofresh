interface PageHeaderProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  badgeColor?: "green" | "orange";
}

export default function PageHeader({
  badge,
  title,
  titleHighlight,
  description,
  badgeColor = "green",
}: PageHeaderProps) {
  const badgeStyles =
    badgeColor === "green"
      ? "bg-brand-green-50 text-brand-green-700"
      : "bg-brand-orange-50 text-brand-orange-600";

  return (
    <div className="relative bg-gradient-to-br from-brand-green-900 via-brand-green-800 to-brand-green-950 pt-32 pb-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className={`inline-block px-4 py-1.5 ${badgeStyles} text-sm font-semibold rounded-full mb-4`}
        >
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-300 to-brand-orange-500">
            {titleHighlight}
          </span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
