type BlogListProps = {
  heading?: string | null;
  items: string[];
  footer?: string | null;
};

export default function BlogList({ heading, items, footer }: BlogListProps) {
  return (
    <div className="space-y-2">
      {/* Optional Heading */}
      {heading && <p className="font-semibold">{heading}</p>}

      {/* List with light background */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <ul className="list-disc list-inside space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Optional Footer */}
      {footer && <p className="text-gray-700">{footer}</p>}
    </div>
  );
}
