type SectionHeadingProps = {
  eyebrow: string
  title: string
  centered?: boolean
}

function SectionHeading({
  eyebrow,
  title,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'mb-8 text-center' : 'mb-8'}>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-400/85">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-[#f8f5f2] sm:text-4xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
