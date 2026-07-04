const WorkLogoPanel = ({ href, logoSrc, logoAlt, label }) => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-white dark:bg-gray-dark-2">
    <div className="flex flex-1 items-center justify-center bg-gray-light-1 p-6 dark:bg-black">
      <a href={href} target="_blank" rel="noreferrer" className="link">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="h-28 w-auto max-w-full object-contain"
        />
      </a>
    </div>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link block bg-purple py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-dark"
    >
      {label}
    </a>
  </div>
);

export default WorkLogoPanel;
