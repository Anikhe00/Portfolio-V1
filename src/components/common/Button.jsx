export default function Button({ icon: Icon, label, link, className }) {
  const isMailto = link.startsWith("mailto:");

  return (
    <a
      href={link}
      target={isMailto ? "_self" : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      aria-label={label}
      className={`size-[24px] text-gray-400 hover:text-purple-700 ${className} cursor-pointer rounded-sm flex items-center justify-center`}
    >
      <Icon />
      <span className="sr-only">{label}</span>
    </a>
  );
}
