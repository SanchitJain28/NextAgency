export default function PatternedSeparator() {
  return (
    <div className="relative flex items-center justify-center my-10">
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="absolute px-4 bg-white text-sm font-medium text-gray-500">
        ✦ ✦ ✦
      </div>
    </div>
  )
}
