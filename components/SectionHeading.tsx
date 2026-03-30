"use client";

export function SectionHeading({
  kicker,
  title,
  className,
}: {
  kicker: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`ayur-heading-wrap ${className ?? ""}`.trim()}>
      <h5>{kicker}</h5>
      <h3>{title}</h3>
    </div>
  );
}